import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import styles from './BrandLogo.module.css'

export type BrandLogoProps = {
  dark?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl'
  to?: string
  asSpan?: boolean
  onClick?: () => void
  className?: string
  style?: CSSProperties
  imgStyle?: CSSProperties
}

export function BrandLogo({
  dark = false,
  size = 'md',
  to = '/',
  asSpan = false,
  onClick,
  className = '',
  style,
  imgStyle,
}: BrandLogoProps) {
  const imgSrc = dark
    ? '/logos/hireright-official-transparent.png'
    : '/logos/hireright-official-light.png'

  const imgElement = (
    <img
      src={imgSrc}
      alt="HireRight — Right People. Right Decisions."
      title="HireRight — Right People. Right Decisions."
      className={`${styles.logoImg} ${styles[size]}`}
      style={imgStyle}
      loading="eager"
      decoding="async"
    />
  )

  const combinedClass = `${styles.brandLink} ${className}`.trim()

  if (asSpan || !to) {
    return (
      <span
        className={combinedClass}
        onClick={onClick}
        style={style}
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
      >
        {imgElement}
      </span>
    )
  }

  return (
    <Link
      to={to}
      className={combinedClass}
      aria-label="HireRight — Right People. Right Decisions."
      onClick={onClick}
      style={style}
    >
      {imgElement}
    </Link>
  )
}
