const DUA_ACTIONS = [
  { icon: 'volume_up', label: 'Listen' },
  { icon: 'bookmark',  label: 'Save'   },
  { icon: 'share',     label: 'Share'  },
];

export default function DailyDua() {
  return (
    <section
      className="editorial-shadow"
      style={{
        gridColumn: 'span 5',
        backgroundColor: 'var(--color-surface-container-lowest)',
        padding: '3rem',
        borderRadius: '0.75rem',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* ── Decorative Quote Mark ── */}
      <div style={{ position: 'absolute', top: '3rem', left: '3rem', opacity: 0.1 }}>
        <span className="material-symbols-outlined" style={{ fontSize: '3.75rem', color: 'var(--color-primary)' }}>
          format_quote
        </span>
      </div>

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.625rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-secondary)',
          fontWeight: 700,
          marginBottom: '2.5rem',
          display: 'block',
        }}>
          Supplication for Peace
        </span>

        <p style={{
          fontFamily: 'var(--font-headline)',
          color: 'var(--color-primary)',
          fontStyle: 'italic',
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          lineHeight: 1.6,
          marginBottom: '2rem',
        }}>
          &quot;O Allah, I ask You for a heart that is at peace with meeting You.&quot;
        </p>

        <p style={{
          color: 'var(--color-on-surface-variant)',
          fontSize: '0.875rem',
          letterSpacing: '0.05em',
          marginBottom: '2.5rem',
        }}>
          From the Sunnah of the Messenger (PBUH)
        </p>

        {/* ── Action Buttons ── */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {DUA_ACTIONS.map(({ icon, label }) => (
            <button key={label} className="btn-icon-round" title={label}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>
                {icon}
              </span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}