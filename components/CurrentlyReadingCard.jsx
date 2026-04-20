export default function CurrentlyReadingCard() {
  return (
    <section style={{
      gridColumn: 'span 8',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: 'var(--color-primary)',
      borderRadius: '0.75rem',
      color: 'var(--color-on-primary)',
      padding: '3.5rem',
      boxShadow: 'var(--shadow-editorial)',
      transition: 'transform 0.25s ease',
      minHeight: '25rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Label row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
          <span className="material-symbols-outlined" style={{ color: 'var(--color-secondary-fixed)' }}>
            auto_stories
          </span>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.625rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: 'var(--color-primary-fixed-dim)',
          }}>
            Currently Reading
          </span>
        </div>

        {/* Surah title */}
        <h2 style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          marginBottom: '1rem',
        }}>
          Surah Al-Kahf
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: '1.25rem',
          fontWeight: 300,
          color: 'rgba(168,197,160,0.8)',
          marginBottom: '2rem',
          fontStyle: 'italic',
        }}>
          &quot;The Cave&quot; — Ayah 45 of 110
        </p>
      </div>

      {/* ── CTA Buttons ── */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', gap: '1.5rem',
      }}>
        <button style={{
          backgroundColor: 'var(--color-secondary-fixed)',
          color: 'var(--color-on-secondary-fixed)',
          padding: '1rem 2.5rem',
          borderRadius: '9999px',
          fontWeight: 600,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontFamily: 'var(--font-body)',
          transition: 'background-color 0.2s',
        }}>
          Resume Now
          <span className="material-symbols-outlined" style={{ fontSize: '1.125rem', fontVariationSettings: "'FILL' 1" }}>
            play_arrow
          </span>
        </button>

        <button style={{
          color: 'rgba(255,255,255,0.8)',
          border: '1px solid rgba(255,255,255,0.2)',
          padding: '1rem 2rem',
          borderRadius: '9999px',
          background: 'transparent',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          transition: 'color 0.2s',
        }}>
          View Progress
        </button>
      </div>

      {/* ── Decorative Blob ── */}
      <div className="decorative-blob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M44.7,-76.4C58.2,-69.2,69.7,-57.4,77.3,-43.8C84.8,-30.2,88.4,-15.1,87.6,-0.5C86.7,14.1,81.4,28.2,73.4,41.2C65.4,54.2,54.7,66.1,41.5,73.1C28.2,80.1,14.1,82.2,-0.2,82.5C-14.5,82.8,-28.9,81.4,-42.5,74.7C-56,68.1,-68.6,56.2,-76.4,42C-84.3,27.8,-87.3,11.3,-85.2,-4.5C-83.1,-20.3,-75.8,-35.4,-65.7,-48C-55.6,-60.6,-42.6,-70.7,-28.8,-77.7C-15.1,-84.7,-0.7,-88.6,14,-86.2C28.7,-83.8,42.4,-75.1,44.7,-76.4Z"
            fill="#FFFFFF"
            transform="translate(100 100)"
          />
        </svg>
      </div>

    </section>
  );
}