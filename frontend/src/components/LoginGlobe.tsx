import { useEffect, useRef } from 'react'
import styles from './LoginGlobe.module.css'

/** Top-right → bottom-left (normalized) */
const DIR_X = -0.70710678
const DIR_Y = 0.70710678

type Meteor = {
  x: number
  y: number
  speed: number
  size: number
  alpha: number
  twinkle: number
}

type DustStar = {
  x: number
  y: number
  size: number
  alpha: number
  phase: number
}

const METEOR_COUNT = 240
const DUST_COUNT = 160

function spawnMeteor(width: number, height: number): Meteor {
  const band = Math.random()
  let x: number
  let y: number

  if (band < 0.45) {
    x = Math.random() * (width * 1.25)
    y = -40 - Math.random() * height * 0.35
  } else if (band < 0.9) {
    x = width + 20 + Math.random() * width * 0.35
    y = Math.random() * (height * 1.15)
  } else {
    x = Math.random() * (width * 1.1)
    y = Math.random() * (height * 0.45)
  }

  return {
    x,
    y,
    speed: 1.1 + Math.random() * 3.8,
    size: 0.45 + Math.random() * 2.4,
    alpha: 0.2 + Math.random() * 0.75,
    twinkle: Math.random() * Math.PI * 2,
  }
}

function spawnDust(width: number, height: number): DustStar {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: 0.35 + Math.random() * 1.1,
    alpha: 0.08 + Math.random() * 0.35,
    phase: Math.random() * Math.PI * 2,
  }
}

function respawnIfOffScreen(star: Meteor, width: number, height: number) {
  const margin = 80
  if (star.x < -margin || star.y > height + margin) {
    Object.assign(star, spawnMeteor(width, height))
  }
}

export function LoginGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef(0)
  const pointerRef = useRef({ x: 0, y: 0, inside: false })
  const ripplesRef = useRef<{ x: number; y: number; born: number }[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const el = wrap
    const cvs = canvas
    const context = ctx

    let meteors: Meteor[] = []
    let dust: DustStar[] = []
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function seedStars(width: number, height: number) {
      meteors = Array.from({ length: METEOR_COUNT }, () => {
        const m = spawnMeteor(width, height)
        m.x = Math.random() * width * 1.1
        m.y = Math.random() * height * 1.1
        return m
      })
      dust = Array.from({ length: DUST_COUNT }, () => spawnDust(width, height))
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { width, height } = el.getBoundingClientRect()
      cvs.width = Math.floor(width * dpr)
      cvs.height = Math.floor(height * dpr)
      cvs.style.width = `${width}px`
      cvs.style.height = `${height}px`
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      if (meteors.length === 0) seedStars(width, height)
    }

    let lastMove = 0
    function onMove(e: PointerEvent) {
      const rect = el.getBoundingClientRect()
      pointerRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        inside: true,
      }
      const now = performance.now()
      if (now - lastMove > 85) {
        lastMove = now
        ripplesRef.current.push({ x: pointerRef.current.x, y: pointerRef.current.y, born: now })
        if (ripplesRef.current.length > 10) ripplesRef.current.shift()
      }
    }

    function onLeave() {
      pointerRef.current.inside = false
    }

    resize()
    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    window.addEventListener('resize', resize)

    function drawMeteor(star: Meteor, sx: number, sy: number) {
      const tw = 0.7 + Math.sin(star.twinkle) * 0.3
      const alpha = star.alpha * tw
      const trail = 10 + star.size * 14

      context.beginPath()
      context.moveTo(sx, sy)
      context.lineTo(sx - DIR_X * trail, sy - DIR_Y * trail)
      const stroke = context.createLinearGradient(
        sx - DIR_X * trail,
        sy - DIR_Y * trail,
        sx,
        sy,
      )
      stroke.addColorStop(0, 'rgba(255,255,255,0)')
      stroke.addColorStop(1, `rgba(255,255,255,${alpha})`)
      context.strokeStyle = stroke
      context.lineWidth = star.size
      context.lineCap = 'round'
      context.stroke()

      context.beginPath()
      context.fillStyle = `rgba(255,255,255,${Math.min(1, alpha + 0.12)})`
      context.arc(sx, sy, star.size * 0.5, 0, Math.PI * 2)
      context.fill()
    }

    function draw() {
      const { width, height } = el.getBoundingClientRect()
      if (width < 1 || height < 1) {
        frameRef.current = requestAnimationFrame(draw)
        return
      }

      context.clearRect(0, 0, width, height)

      const ptr = pointerRef.current
      const now = performance.now()
      ripplesRef.current = ripplesRef.current.filter((rip) => now - rip.born < 900)

      for (const d of dust) {
        if (!reducedMotion) d.phase += 0.015
        const tw = 0.65 + Math.sin(d.phase) * 0.35
        context.beginPath()
        context.fillStyle = `rgba(255,255,255,${d.alpha * tw})`
        context.arc(d.x, d.y, d.size, 0, Math.PI * 2)
        context.fill()
      }

      for (const rip of ripplesRef.current) {
        const age = (now - rip.born) / 900
        const radius = 18 + age * 120
        context.beginPath()
        context.arc(rip.x, rip.y, radius, 0, Math.PI * 2)
        context.strokeStyle = `rgba(255,255,255,${(1 - age) * 0.2})`
        context.lineWidth = 1.4 * (1 - age)
        context.stroke()
      }

      if (ptr.inside) {
        const glow = context.createRadialGradient(ptr.x, ptr.y, 0, ptr.x, ptr.y, 36)
        glow.addColorStop(0, 'rgba(255,255,255,0.14)')
        glow.addColorStop(1, 'rgba(255,255,255,0)')
        context.fillStyle = glow
        context.beginPath()
        context.arc(ptr.x, ptr.y, 36, 0, Math.PI * 2)
        context.fill()
      }

      for (const star of meteors) {
        if (!reducedMotion) {
          star.x += DIR_X * star.speed
          star.y += DIR_Y * star.speed
          star.twinkle += 0.035
          respawnIfOffScreen(star, width, height)
        }

        let sx = star.x
        let sy = star.y

        if (ptr.inside) {
          const dx = sx - ptr.x
          const dy = sy - ptr.y
          const dist = Math.hypot(dx, dy)
          const influence = 145
          if (dist < influence) {
            const t = 1 - dist / influence
            const push = t * t * 28
            const nx = dist > 0.001 ? dx / dist : 0
            const ny = dist > 0.001 ? dy / dist : 0
            sx += nx * push
            sy += ny * push
          }
        }

        drawMeteor(star, sx, sy)
      }

      frameRef.current = requestAnimationFrame(draw)
    }

    frameRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(frameRef.current)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div ref={wrapRef} className={styles.wrap} aria-hidden>
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  )
}
