import Image from 'next/image';

export default function HeroHeader() {
  return (
    <header style={{ marginBottom: '5rem' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '2rem',
        justifyContent: 'space-between',
      }}>

        {/* ── Greeting Text ── */}
        <div style={{ maxWidth: '42rem' }}>
          <p style={{
            color: 'var(--color-secondary)',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontSize: '0.75rem',
            marginBottom: '1rem',
          }}>
            Assalamu Alaikum
          </p>

          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 300,
            color: 'var(--color-primary)',
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            fontStyle: 'italic',
          }}>
            Welcome back,{' '}
            <span style={{ fontWeight: 400, fontStyle: 'normal' }}>Omar.</span>
          </h1>

          <p style={{
            color: 'var(--color-on-surface-variant)',
            fontSize: '1.125rem',
            maxWidth: '28rem',
            lineHeight: 1.7,
          }}>
            May your heart find tranquility in the remembrance of the Divine today.
          </p>
        </div>

        {/* ── Avatar (hidden on mobile) ── */}
        <div style={{
          display: 'none',         /* shown via media query in CSS if needed */
          width: '8rem',
          height: '8rem',
          borderRadius: '9999px',
          backgroundColor: 'var(--color-surface-container-highest)',
          padding: '4px',
        }}>
          <div style={{ width: '100%', height: '100%', borderRadius: '9999px', overflow: 'hidden' }}>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo5qXLgL2xT_K94tn_w_CsJeIxB3-9-M5S8ngvJSnByNmjHDThM2eIIqCzqAjRzFG6CLW4V3ckT7c3itgM-os2GQ7a3R9EuALlyjwr5fxk5i2En8skwQKVjVK6FQofnTq8XZhs4X_nwgDrABoRxkKJ2xb28siKqo0tlf3BXs4ZRstF0cX3rfCKGB1TPc-8x6RHbwk19boZDV8TlYjTo1iVxHM-JA2yLi1tSypbFt1at4VHbnEarbHQb8nQ059uyEERRA-rypA8DsA"
              alt="User avatar — olive branch"
              width={128}
              height={128}
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '9999px' }}
            />
          </div>
        </div>

      </div>
    </header>
  );
}