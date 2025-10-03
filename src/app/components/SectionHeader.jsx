export default function SectionHeader({ title, subtitle, id }) {
    return (
      <header id={id} className="container py-8">
        <h2 className="text-3xl font-bold text-[var(--text)]">{title}</h2>
        {subtitle && <p className="text-[var(--text-muted)] mt-2">{subtitle}</p>}
      </header>
    )
  }
  