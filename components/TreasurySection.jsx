import Image from 'next/image';

const COLLECTIONS = [
  {
    id: 'morning',
    title: 'Morning Remembrances',
    description: 'A collection of authentic Adhkar to start your day with intention.',
    meta: '12 Supplications',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsqzbcvGfaDmEFD1WtFXk6Dq4YF1BFv5uepfhbxYMAlG09A0h4UQ_bTOIkzTqD2q9u9wrqWD189_8Kc4-oH9MjPcRBO6wvIdla9bAgz_0vTGQk5GoGRBGYa6OTbG2hEYlwCGaSIbrB1z53ItObytV-AekJC3L1O2sUmJiktUa69IDrsgCy7gqkpOJSGQhEfRcFWPlzsE0f4A_9EGHHiA4ase5Gwam7NqEUb9UUO5cpJh7kT8YJapEYKZnPVMGkQq1qHsxKZcNItNk',
    alt: 'Leather journal and wooden misbaha in warm sunlight',
  },
  {
    id: 'names',
    title: 'Names of Allah',
    description: 'Explore the meanings and depth of the 99 beautiful names.',
    meta: '99 Names',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAIRB_OnLubBXDmnn-h904iQRwrFkrGKu5B4AEMZIbaeXT_4yYgN5QFR0VFFDO10b58jZJ2AG4XJmeVR2V6hu6RA4VNbB7xn8uRLoyPpeDE75fKl4yoCD4VJWyHiwdk-xFROUmVlNFNKQ6ztzeoKOc7nxeTzAODfIxahcjI5csUVC2Z8Gk1yS5-_ba8zNwCjaDaOoxKzizcoZoo4yf_SL3HqyULTcn9XyjywLuTKXTaYBSLzbwqI2nUuhqUzMru-Naoho_XHOqUx68',
    alt: 'Arabic calligraphy on parchment with gold leaf',
  },
  {
    id: 'healing',
    title: 'Verses of Healing',
    description: 'Selected Ayahs for comfort, shifa, and emotional well-being.',
    meta: '15 Verses',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_f6MeKvidxnrpE9Wo91GtfjYVO8YfnyCFYk99JtAxMq_7V5KpnS76sLkEH6cINUnqXueWRBncpAb_ivZtU5LPR4nic7HipBM4Xbj4d5aZKZ15_I10Np1OoHtREOUUSqoDUyWACx7x1TndQJAdce3qtNV_buCxQV6aZRZnNMJjmZaHZ_PpIB2r8H-wZqWcAudfLyBvqv_qm7ecHGgElLBikOcRFFhCEJZx1rGQX1BuI03nGN_3iUCxHbuHpXucYc3hagXHBF56_ik',
    alt: 'Aerial desert oasis at dusk with stars',
  },
];

export default function TreasurySection() {
  return (
    <section style={{ marginTop: '6rem' }}>

      {/* ── Section Header ── */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: '3rem',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <div>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            color: 'var(--color-primary)',
          }}>
            Explore the Treasury
          </h2>
          <p style={{
            color: 'var(--color-on-surface-variant)',
            marginTop: '1rem',
          }}>
            Curated collections for your spiritual journey.
          </p>
        </div>

        <a href="#" style={{
          color: 'var(--color-secondary)',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          textDecoration: 'none',
          fontFamily: 'var(--font-body)',
          transition: 'gap 0.2s',
        }}>
          View All Collections
          <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>

      {/* ── Cards Grid ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '2rem',
      }}>
        {COLLECTIONS.map(({ id, title, description, meta, src, alt }) => (
          <div
            key={id}
            className="card-img-zoom editorial-shadow"
            style={{
              backgroundColor: 'var(--color-surface-container-low)',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
          >
            {/* Image */}
            <div className="treasury-img-wrap">
              <Image
                src={src}
                alt={alt}
                width={400}
                height={256}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            {/* Text */}
            <div style={{ padding: '2rem' }}>
              <h4 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: '1.5rem',
                color: 'var(--color-primary)',
                marginBottom: '0.5rem',
              }}>
                {title}
              </h4>
              <p style={{
                color: 'var(--color-on-surface-variant)',
                fontSize: '0.875rem',
                marginBottom: '1.5rem',
                lineHeight: 1.6,
              }}>
                {description}
              </p>
              <span style={{
                color: 'var(--color-secondary)',
                fontSize: '0.625rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-body)',
              }}>
                {meta}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}