export default function FeaturedSurah() {
  const BG_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBX0HER3qojUQe0H6i55QNFc_KhD03mO00mpjEnAfkr1uqm5fhA48qx9TTQV6uTYlEhUfNh_ociUGlsdunHflrbyJUcmtO1vXNb12QC1NnHvkQY__Ty9NxiJs1TmHEOJDwLasuiaFvMh3FB5Li24tIIcfrp8Epmile4wWb5O1v_zNdboGcNjRFP_sztlSkazNUnG1hlKFU62Vj_Wvxsbhng0rrcbZEzyCxJ9WyEjvckyIbakSfPc5nwN2gBgc1m6CASbKlgp_7KVwE";

  return (
    <section
      className="featured-section editorial-shadow"
      style={{
        gridColumn: 'span 7',
        position: 'relative',
        height: '31rem',
        borderRadius: '0.75rem',
        overflow: 'hidden',
      }}
    >
      {/* Background image with zoom on hover */}
      <div
        className="featured-overlay"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(21,66,18,0.9), rgba(21,66,18,0.2)), url('${BG_IMAGE}')`,
        }}
      />

      {/* Content overlay */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        height: '100%',
        padding: '3rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
        <span style={{
          color: 'var(--color-secondary-fixed)',
          fontSize: '0.625rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontWeight: 700,
          marginBottom: '1rem',
          display: 'block',
          fontFamily: 'var(--font-body)',
        }}>
          Featured Wisdom
        </span>

        <h3 style={{
          fontFamily: 'var(--font-headline)',
          color: '#ffffff',
          fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
          marginBottom: '1.5rem',
          lineHeight: 1.1,
        }}>
          Surah Ar-Rahman
        </h3>

        <p style={{
          color: 'rgba(168,197,160,0.9)',
          fontSize: '1.125rem',
          maxWidth: '28rem',
          fontStyle: 'italic',
          marginBottom: '2.5rem',
          lineHeight: 1.7,
        }}>
          &quot;Then which of the favors of your Lord will you deny?&quot;
        </p>

        <div>
          <button style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(8px)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '0.75rem 2rem',
            borderRadius: '9999px',
            cursor: 'pointer',
            fontFamily: 'var(--font-body)',
            transition: 'background-color 0.3s, color 0.3s',
          }}>
            Read Surah
          </button>
        </div>
      </div>
    </section>
  );
}