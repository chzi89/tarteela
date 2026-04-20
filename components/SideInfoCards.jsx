const PRAYER_TIMES = [
  { name: 'Asr',    time: '15:24', active: true  },
  { name: 'Maghrib', time: '18:12', active: false },
  { name: 'Isha',   time: '19:34', active: false  },
];

const READING_GOAL = {
  done:  12,
  total: 20,
};

export default function SideInfoCards() {
  const pct = Math.round((READING_GOAL.done / READING_GOAL.total) * 100);

  return (
    <div style={{
      gridColumn: 'span 4',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    }}>

      {/* ── Prayer Times Card ── */}
      <div className="editorial-shadow" style={{
        backgroundColor: 'var(--color-surface-container-low)',
        padding: '2rem',
        borderRadius: '0.75rem',
        flex: 1,
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.625rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--color-on-surface-variant)',
          fontWeight: 700,
        }}>
          Prayer Times
        </span>

        <div style={{ marginTop: '2rem' }}>
          {PRAYER_TIMES.map(({ name, time, active }, i) => (
            <div key={name} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.75rem 0',
              borderBottom: i < PRAYER_TIMES.length - 1
                ? '1px solid rgba(197,200,186,0.1)'
                : 'none',
            }}>
              <span style={{
                color: active ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                fontWeight: active ? 500 : 400,
              }}>
                {name}
              </span>
              <span style={{
                fontWeight: active ? 700 : 400,
                color: active ? 'var(--color-primary)' : 'inherit',
              }}>
                {time}
              </span>
            </div>
          ))}
        </div>

        {/* Next prayer alert */}
        <div style={{
          marginTop: '2rem',
          backgroundColor: 'rgba(245,224,144,0.3)',
          padding: '1rem',
          borderRadius: '0.5rem',
        }}>
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--color-on-secondary-container)',
            lineHeight: 1.6,
          }}>
            Next prayer is{' '}
            <strong>Asr</strong> in 42 minutes.
          </p>
        </div>
      </div>

      {/* ── Reading Goal Card ── */}
      <div className="editorial-shadow" style={{
        backgroundColor: 'var(--color-surface-container-highest)',
        padding: '2rem',
        borderRadius: '0.75rem',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.625rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--color-on-surface-variant)',
            fontWeight: 700,
          }}>
            Reading Goal
          </span>
          <span className="material-symbols-outlined" style={{ color: 'rgba(21,66,18,0.4)' }}>
            track_changes
          </span>
        </div>

        <div style={{
          fontFamily: 'var(--font-headline)',
          fontSize: '2.5rem',
          color: 'var(--color-primary)',
          marginBottom: '0.5rem',
        }}>
          {READING_GOAL.done} / {READING_GOAL.total}
        </div>

        <p style={{
          fontSize: '0.875rem',
          color: 'var(--color-on-surface-variant)',
          marginBottom: '1.5rem',
        }}>
          Ayahs read today
        </p>

        {/* Progress bar */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

    </div>
  );
}