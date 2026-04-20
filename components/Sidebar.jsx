import Image from 'next/image';

const NAV_ITEMS = [
  { icon: 'menu_book',    label: 'Holy Quran', href: '#', active: true },
  { icon: 'auto_awesome', label: 'Daily Duas', href: '#' },
  { icon: 'fingerprint',  label: 'Tasbih',     href: '#' },
  { icon: 'explore',      label: 'Qibla',      href: '#' },
  { icon: 'edit_note',    label: 'Journal',    href: '#' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">

      {/* ── Brand / User Identity ── */}
      <div style={{ padding: '0 2rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{
            width: '2.5rem', height: '2.5rem',
            borderRadius: '9999px',
            overflow: 'hidden',
            backgroundColor: 'var(--color-surface-container-highest)',
          }}>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkhS9H4lB_5EaZ41vD6CVjLa8_hZgMblcZYb3NSik99uBmWrZ4XVJu6nWIzAv2ULyt_VVbhuOFmmtY8jZD0q4VgESjxZ5w_o6X_V4EY3uEl6Mx0P-KREyjLC5EF5WwsadU8lv3LI93Um_Vicuh_it9phZcWllSTsxx1OnLOGYHUfmYrI8YtAMLkB1U1ADJNOGqNVy4-UK0EScnfLe8DIcmzMrBFTZDa9xf2NS0zv9SNAqK6-gJir2nIg1d6njMXsrwlZAtD47fLeM"
              alt="User avatar"
              width={40}
              height={40}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '9999px' }}
            />
          </div>
          <div>
            <h3 style={{
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '0.625rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              The Sanctuary
            </h3>
            <p style={{ color: 'rgba(21,66,18,0.7)', fontSize: '0.625rem' }}>
              Peace be upon you
            </p>
          </div>
        </div>
      </div>

      {/* ── Navigation Links ── */}
      <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {NAV_ITEMS.map(({ icon, label, href, active }) => (
          <a
            key={label}
            href={href}
            className={`nav-link${active ? ' active' : ''}`}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: active ? "'FILL' 1" : "'FILL' 0" }}
            >
              {icon}
            </span>
            <span>{label}</span>
          </a>
        ))}
      </nav>

      {/* ── Bottom Actions ── */}
      <div style={{ padding: '0 2rem', marginTop: 'auto' }}>
        <button style={{
          width: '100%',
          backgroundColor: 'var(--color-primary)',
          color: '#ffffff',
          borderRadius: '9999px',
          padding: '1rem',
          fontWeight: 700,
          fontSize: '0.625rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          fontFamily: 'var(--font-body)',
        }}>
          Open Mushaf
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[
            { icon: 'help_outline', label: 'Help' },
            { icon: 'shield',       label: 'Privacy' },
          ].map(({ icon, label }) => (
            <a key={label} href="#" style={{
              color: 'rgba(21,66,18,0.5)',
              fontSize: '0.625rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none',
            }}>
              <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>
                {icon}
              </span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}