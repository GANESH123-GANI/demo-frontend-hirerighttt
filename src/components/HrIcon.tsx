import type { SVGProps } from 'react'

export type HrIconName =
  | 'document'
  | 'mic'
  | 'chart'
  | 'rocket'
  | 'building'
  | 'link'
  | 'shield'
  | 'zap'
  | 'user'
  | 'users'
  | 'target'
  | 'scale'
  | 'lock'
  | 'clipboard'
  | 'calendar'
  | 'folder'
  | 'upload'
  | 'download'
  | 'search'
  | 'plus'
  | 'close'
  | 'warning'
  | 'eye'
  | 'alert'
  | 'cpu'
  | 'wrench'
  | 'cloud'
  | 'settings'
  | 'message'
  | 'puzzle'
  | 'sparkle'
  | 'briefcase'
  | 'flame'
  | 'map-pin'
  | 'tag'
  | 'book'
  | 'trending'
  | 'bot'
  | 'check'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'shield-check'
  | 'star'
  | 'menu'
  | 'form'
  | 'unlock'
  | 'sun'
  | 'video'
  | 'leaf'
  | 'clock'

type HrIconProps = {
  name: HrIconName
  size?: number
  className?: string
  strokeWidth?: number
  title?: string
}

function Svg({
  size,
  className,
  strokeWidth,
  title,
  children,
}: SVGProps<SVGSVGElement> & { size: number; strokeWidth: number; title?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
}

export function HrIcon({ name, size = 20, className, strokeWidth = 2, title }: HrIconProps) {
  switch (name) {
    case 'document':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
          <path d="M14 3v5h5M9 13h6M9 17h4" />
        </Svg>
      )
    case 'mic':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M12 14a3 3 0 003-3V6a3 3 0 10-6 0v5a3 3 0 003 3z" />
          <path d="M19 11a7 7 0 01-14 0M12 18v3" />
        </Svg>
      )
    case 'chart':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M4 19V5M4 19h16M8 17V9M12 17V6M16 17v-4" />
        </Svg>
      )
    case 'rocket':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M4.5 16.5c7.5-1.5 11-5 12.5-12.5 0 0-6 1.5-12.5 12.5z" />
          <path d="M9 15l-1.5 4.5L12 18" />
        </Svg>
      )
    case 'building':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M4 21V5a1 1 0 011-1h5v17M10 8h2M10 12h2M15 21V9h4a1 1 0 011 1v11" />
          <path d="M6 21h12" />
        </Svg>
      )
    case 'link':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 00-7.07-7.07L10 5" />
          <path d="M14 11a5 5 0 00-7.07 0L5.52 12.41a5 5 0 007.07 7.07L14 19" />
        </Svg>
      )
    case 'shield':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z" />
        </Svg>
      )
    case 'shield-check':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z" />
          <path d="M9 12l2 2 4-4" />
        </Svg>
      )
    case 'zap':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M13 2L4 14h7l-1 8 10-12h-7l0-8z" />
        </Svg>
      )
    case 'user':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c1.5-4 6-6 8-6s6.5 2 8 6" />
        </Svg>
      )
    case 'users':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3 2.5-5 6-5" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M14 20c0-2.5 2-4.5 5-4.5" />
        </Svg>
      )
    case 'target':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        </Svg>
      )
    case 'scale':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M12 3v18M5 7h14M7 7l-2 6h4L7 7zM17 7l-2 6h4l-2-6z" />
        </Svg>
      )
    case 'lock':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 118 0v3" />
        </Svg>
      )
    case 'unlock':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 014-4" />
        </Svg>
      )
    case 'clipboard':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <rect x="8" y="4" width="8" height="4" rx="1" />
          <path d="M7 7H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
        </Svg>
      )
    case 'calendar':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <rect x="4" y="5" width="16" height="16" rx="2" />
          <path d="M8 3v4M16 3v4M4 11h16" />
        </Svg>
      )
    case 'folder':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M4 7h5l2 2h9v10a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z" />
        </Svg>
      )
    case 'upload':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M12 16V4M8 8l4-4 4 4" />
          <path d="M4 20h16" />
        </Svg>
      )
    case 'download':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M12 4v12M8 12l4 4 4-4" />
          <path d="M4 20h16" />
        </Svg>
      )
    case 'search':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <circle cx="11" cy="11" r="6" />
          <path d="M20 20l-3-3" />
        </Svg>
      )
    case 'plus':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M12 5v14M5 12h14" />
        </Svg>
      )
    case 'close':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M6 6l12 12M18 6L6 18" />
        </Svg>
      )
    case 'warning':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M12 4L2 20h20L12 4z" />
          <path d="M12 10v4M12 18h.01" />
        </Svg>
      )
    case 'eye':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </Svg>
      )
    case 'alert':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v5M12 16h.01" />
        </Svg>
      )
    case 'cpu':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <rect x="7" y="7" width="10" height="10" rx="1" />
          <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
        </Svg>
      )
    case 'wrench':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 005.4-5.4l-2.3 2.3-2.7-2.7 2.3-2.3z" />
        </Svg>
      )
    case 'cloud':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M7 18h11a4 4 0 000-8 5.5 5.5 0 00-10.6-1.5A3.5 3.5 0 007 18z" />
        </Svg>
      )
    case 'settings':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </Svg>
      )
    case 'message':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M4 5h16v11H8l-4 4V5z" />
        </Svg>
      )
    case 'puzzle':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M8 4h3a2 2 0 012 2v1h1a2 2 0 012 2v3h-1a2 2 0 00-2 2v1H8a2 2 0 01-2-2v-1H5a2 2 0 01-2-2V9h1a2 2 0 002-2V4z" />
        </Svg>
      )
    case 'sparkle':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M12 3l1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3z" />
        </Svg>
      )
    case 'briefcase':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <rect x="3" y="8" width="18" height="12" rx="2" />
          <path d="M9 8V6a3 3 0 016 0v2" />
        </Svg>
      )
    case 'flame':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M12 22c4-3 6-6 6-10a6 6 0 00-10-4c-1 4-2 6-2 8a4 4 0 008 0c0-2-1-3-2-4 2 1 4 3 4 6 0 2.5-2 4-4 4z" />
        </Svg>
      )
    case 'map-pin':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M12 21s6-5.2 6-10a6 6 0 10-12 0c0 4.8 6 10 6 10z" />
          <circle cx="12" cy="11" r="2" />
        </Svg>
      )
    case 'tag':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M3 12l9-9h6v6l-9 9-6-6z" />
          <circle cx="15" cy="7" r="1" fill="currentColor" stroke="none" />
        </Svg>
      )
    case 'book':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M5 4h7a3 3 0 013 3v15a3 3 0 00-3-3H5V4z" />
          <path d="M19 4h-7a3 3 0 00-3 3v15a3 3 0 003-3h7V4z" />
        </Svg>
      )
    case 'trending':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M4 16l5-5 4 4 7-8" />
          <path d="M15 7h5v5" />
        </Svg>
      )
    case 'bot':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <rect x="5" y="8" width="14" height="11" rx="2" />
          <path d="M12 4v4M8 4h8M9 14h.01M15 14h.01" />
        </Svg>
      )
    case 'check':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M5 12l4 4 10-10" />
        </Svg>
      )
    case 'arrow-up-right':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M7 17L17 7M9 7h8v8" />
        </Svg>
      )
    case 'arrow-right':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </Svg>
      )
    case 'star':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7l3-7z" />
        </Svg>
      )
    case 'menu':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </Svg>
      )
    case 'form':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M8 4h8v4H8V4zM6 8h12v12H6V8zM9 12h6M9 16h4" />
        </Svg>
      )
    case 'sun':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </Svg>
      )
    case 'video':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M16 10l5-3v10l-5-3v-7z" />
        </Svg>
      )
    case 'leaf':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <path d="M6 20c6-1 10-5 12-12-7 2-11 6-12 12z" />
          <path d="M6 20c2-4 5-7 9-9" />
        </Svg>
      )
    case 'clock':
      return (
        <Svg size={size} className={className} strokeWidth={strokeWidth} title={title}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 2" />
        </Svg>
      )
    default:
      return null
  }
}
