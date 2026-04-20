"use client";

// app/page.jsx  (ya pages/index.jsx — dono me kaam karega)
// ─────────────────────────────────────────────────────────
// The Sanctuary — Main Dashboard Page
//
// Layout:
//   <Sidebar>      Fixed left nav (lg+ only)
//   <main>         Scrollable content area
//     <HeroHeader>
//     Bento Grid:
//       <CurrentlyReadingCard>  (8 cols)
//       <SideInfoCards>         (4 cols)
//       <FeaturedSurah>         (7 cols)
//       <DailyDua>              (5 cols)
//     <TreasurySection>
//   <footer>
// ─────────────────────────────────────────────────────────

import '../styles/globals.css';

import Sidebar            from '../components/Sidebar';
import HeroHeader         from '../components/HeroHeader';
import CurrentlyReadingCard from '../components/CurrentlyReadingCard';
import SideInfoCards      from '../components/SideInfoCards';
import FeaturedSurah      from '../components/FeaturedSurah';
import DailyDua           from '../components/DailyDua';
import TreasurySection    from '../components/TreasurySection';

export default function HomePage() {
  return (
    <>
      {/* ── Fixed Sidebar ── */}
      <Sidebar />

      {/* ── Scrollable Main Content ── */}
      <main
        className="main-content"
        style={{
          paddingTop: '8rem',
          paddingBottom: '6rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          maxWidth: '90rem',
          margin: '0 auto',
        }}
      >
        {/* Greeting */}
        <HeroHeader />

        {/* Bento Grid */}
        <div
          className="bento-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '2rem',
          }}
        >
          <CurrentlyReadingCard />
          <SideInfoCards />
          <FeaturedSurah />
          <DailyDua />
        </div>

        {/* Treasury Collections */}
        <TreasurySection />
      </main>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <p style={{
          fontFamily: 'var(--font-headline)',
          fontStyle: 'italic',
          color: 'rgba(21,66,18,0.4)',
          fontSize: '1.25rem',
        }}>
          Peace be with you on your journey.
        </p>
      </footer>
    </>
  );
}
