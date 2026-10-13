import { HrIcon, type HrIconName } from './HrIcon'

export type MarketingFeatureCardProps = {
  step?: string
  icon: HrIconName
  title: string
  desc: string
  highlight?: string
}

export function MarketingFeatureCard({
  step,
  icon,
  title,
  desc,
  highlight,
}: MarketingFeatureCardProps) {
  return (
    <article className="hr-mkt-card">
      <div className="hr-mkt-card-head">
        {step ? <span className="hr-mkt-num">{step}</span> : <span aria-hidden />}
        <span className="hr-mkt-icon" aria-hidden>
          <HrIcon name={icon} size={20} />
        </span>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      {highlight ? (
        <div className="hr-mkt-highlight">
          <HrIcon name="check" size={14} strokeWidth={2.5} />
          {highlight}
        </div>
      ) : null}
    </article>
  )
}
