export function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  return (
    <span className={`logo logo--${size}`}>
      <span className="logo__mark" aria-hidden="true">
        V
      </span>
      <span className="logo__text">
        <span className="logo__name">Vintage</span>
        <span className="logo__sub">Petite Brasserie</span>
      </span>
    </span>
  )
}
