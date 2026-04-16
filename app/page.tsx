
import Image from 'next/image';

export default function Home() {
  return (
    <>
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-360 mx-auto">
{/* Hero Section & Greeting */}
<header className="mb-20">
<div className="flex flex-col md:flex-row justify-between items-end gap-8">
<div className="max-w-2xl">
<p className="text-secondary font-medium tracking-widest uppercase text-xs mb-4">Assalamu Alaikum</p>
<h1 className="text-6xl md:text-8xl font-light text-primary leading-tight mb-6 italic">
                        Welcome back, <span className="font-normal not-italic">Omar.</span>
</h1>
<p className="text-on-surface-variant text-lg md:text-xl max-w-md leading-relaxed">
                        May your heart find tranquility in the remembrance of the Divine today.
                    </p>
</div>
<div className="md:flex hidden w-32 h-32 rounded-full bg-surface-container-highest items-center justify-center p-1">
<div className="w-full h-full rounded-full overflow-hidden">
<Image
  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo5qXLgL2xT_K94tn_w_CsJeIxB3-9-M5S8ngvJSnByNmjHDThM2eIIqCzqAjRzFG6CLW4V3ckT7c3itgM-os2GQ7a3R9EuALlyjwr5fxk5i2En8skwQKVjVK6FQofnTq8XZhs4X_nwgDrABoRxkKJ2xb28siKqo0tlf3BXs4ZRstF0cX3rfCKGB1TPc-8x6RHbwk19boZDV8TlYjTo1iVxHM-JA2yLi1tSypbFt1at4VHbnEarbHQb8nQ059uyEERRA-rypA8DsA"
  alt="Close-up artistic shot of a small olive branch on aged paper background with warm morning light"
  width={128}
  height={128}
  className="w-full h-full object-cover rounded-full"
/>
</div>
</div>
</div>
</header>
{/* Bento Grid Main Content */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/* Resume Reading (Primary Focus) */}
<section className="md:col-span-8 group relative overflow-hidden bg-primary rounded-xl text-on-primary p-10 md:p-14 editorial-shadow transition-all hover:-translate-y-1">
<div className="relative z-10 flex flex-col h-full justify-between min-h-100">
<div>
<div className="flex items-center gap-3 mb-12">
<span className="material-symbols-outlined text-secondary-fixed" data-icon="auto_stories">auto_stories</span>
<span className="font-body text-xs tracking-widest uppercase font-semibold text-primary-fixed-dim">Currently Reading</span>
</div>
<h2 className="text-5xl md:text-7xl font-headline mb-4">Surah Al-Kahf</h2>
<p className="text-xl md:text-2xl font-light text-primary-fixed-dim/80 mb-8 max-w-sm italic">&quot;The Cave&quot; — Ayah 45 of 110</p>
</div>
<div className="flex flex-wrap items-center gap-6">
<button className="bg-secondary-fixed text-on-secondary-fixed px-10 py-4 rounded-full font-semibold hover:bg-secondary-fixed-dim transition-all flex items-center gap-3">
                            Resume Now
                            <span className="material-symbols-outlined text-lg" data-icon="play_arrow" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
</button>
<button className="text-white/80 hover:text-white border border-white/20 px-8 py-4 rounded-full transition-all">
                            View Progress
                        </button>
</div>
</div>
{/* Abstract Decorative Pattern (Clipped Asymmetry) */}
<div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 pointer-events-none">
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.2,-69.2,69.7,-57.4,77.3,-43.8C84.8,-30.2,88.4,-15.1,87.6,-0.5C86.7,14.1,81.4,28.2,73.4,41.2C65.4,54.2,54.7,66.1,41.5,73.1C28.2,80.1,14.1,82.2,-0.2,82.5C-14.5,82.8,-28.9,81.4,-42.5,74.7C-56,68.1,-68.6,56.2,-76.4,42C-84.3,27.8,-87.3,11.3,-85.2,-4.5C-83.1,-20.3,-75.8,-35.4,-65.7,-48C-55.6,-60.6,-42.6,-70.7,-28.8,-77.7C-15.1,-84.7,-0.7,-88.6,14,-86.2C28.7,-83.8,42.4,-75.1,44.7,-76.4Z" fill="#FFFFFF" transform="translate(100 100)"></path>
</svg>
</div>
</section>
{/* Quick Stats/Info Side Cards */}
<div className="md:col-span-4 flex flex-col gap-8">
{/* Daily Remembrance Counter */}
<div className="bg-surface-container-low p-8 rounded-xl flex flex-col justify-between h-full editorial-shadow">
<span className="font-body text-[10px] tracking-widest uppercase text-on-surface-variant font-bold">Prayer Times</span>
<div className="mt-8">
<div className="flex justify-between items-center py-3 border-b border-outline-variant/10">
<span className="text-primary font-medium">Asr</span>
<span className="text-primary font-bold">15:24</span>
</div>
<div className="flex justify-between items-center py-3 border-b border-outline-variant/10">
<span className="text-on-surface-variant">Maghrib</span>
<span>18:12</span>
</div>
<div className="flex justify-between items-center py-3">
<span className="text-on-surface-variant">Isha</span>
<span>19:34</span>
</div>
</div>
<div className="mt-8 bg-secondary-container/30 p-4 rounded-lg">
<p className="text-xs text-on-secondary-container leading-relaxed">Next prayer is <span className="font-bold">Asr</span> in 42 minutes.</p>
</div>
</div>
{/* Daily Goal */}
<div className="bg-surface-container-highest p-8 rounded-xl editorial-shadow">
<div className="flex justify-between items-start mb-6">
<span className="font-body text-[10px] tracking-widest uppercase text-on-surface-variant font-bold">Reading Goal</span>
<span className="material-symbols-outlined text-primary/40" data-icon="track_changes">track_changes</span>
</div>
<div className="text-4xl font-headline text-primary mb-2">12 / 20</div>
<p className="text-sm text-on-surface-variant mb-6">Ayahs read today</p>
<div className="w-full bg-surface-container-low h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{width: "60%"}}></div>
</div>
</div>
</div>
{/* Surah of the Day (Large Featured) */}
<section className="md:col-span-7 relative h-125 rounded-xl overflow-hidden editorial-shadow group">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="Interior of a majestic mosque with high arches and sunlight streaming through geometric stained glass windows onto marble floors" style={{backgroundImage: "linear-gradient(to right, rgba(21, 66, 18, 0.9), rgba(21, 66, 18, 0.2)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBX0HER3qojUQe0H6i55QNFc_KhD03mO00mpjEnAfkr1uqm5fhA48qx9TTQV6uTYlEhUfNh_ociUGlsdunHflrbyJUcmtO1vXNb12QC1NnHvkQY__Ty9NxiJs1TmHEOJDwLasuiaFvMh3FB5Li24tIIcfrp8Epmile4wWb5O1v_zNdboGcNjRFP_sztlSkazNUnG1hlKFU62Vj_Wvxsbhng0rrcbZEzyCxJ9WyEjvckyIbakSfPc5nwN2gBgc1m6CASbKlgp_7KVwE')" }}>
</div>
<div className="relative z-10 h-full p-12 flex flex-col justify-end">
<span className="text-secondary-fixed text-xs tracking-widest uppercase font-bold mb-4">Featured Wisdom</span>
<h3 className="text-on-primary text-5xl md:text-6xl font-headline mb-6 leading-tight">Surah Ar-Rahman</h3>
<p className="text-primary-fixed-dim/90 text-lg md:text-xl max-w-md italic mb-10 leading-relaxed">
                        &quot;Then which of the favors of your Lord will you deny?&quot;
                    </p>
<div>
<button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                            Read Surah
                        </button>
</div>
</div>
</section>
{/* Daily Dua (Spotlight) */}
<section className="md:col-span-5 bg-surface-container-lowest p-12 rounded-xl editorial-shadow relative flex flex-col justify-center">
<div className="absolute top-12 left-12 opacity-10">
<span className="material-symbols-outlined text-6xl text-primary" data-icon="format_quote">format_quote</span>
</div>
<div className="relative z-10 text-center">
<span className="font-body text-[10px] tracking-widest uppercase text-secondary font-bold mb-10 block">Supplication for Peace</span>
<p className="text-primary font-headline italic text-3xl md:text-4xl leading-relaxed mb-8">
                        &quot;O Allah, I ask You for a heart that is at peace with meeting You.&quot;
                    </p>
<p className="text-on-surface-variant text-sm tracking-wide mb-10">From the Sunnah of the Messenger (PBUH)</p>
<div className="flex justify-center gap-4">
<button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined text-xl" data-icon="volume_up">volume_up</span>
</button>
<button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined text-xl" data-icon="bookmark">bookmark</span>
</button>
<button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined text-xl" data-icon="share">share</span>
</button>
</div>
</div>
</section>
</div>
{/* Section: Treasury Preview */}
<section className="mt-24">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-4xl md:text-5xl font-headline text-primary">Explore the Treasury</h2>
<p className="text-on-surface-variant mt-4">Curated collections for your spiritual journey.</p>
</div>
<a className="text-secondary font-semibold flex items-center gap-2 hover:gap-4 transition-all" href="#">
                    View All Collections
                    <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Card 1 */}
<div className="bg-surface-container-low rounded-xl overflow-hidden group">
<div className="h-64 overflow-hidden">
<Image
  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsqzbcvGfaDmEFD1WtFXk6Dq4YF1BFv5uepfhbxYMAlG09A0h4UQ_bTOIkzTqD2q9u9wrqWD189_8Kc4-oH9MjPcRBO6wvIdla9bAgz_0vTGQk5GoGRBGYa6OTbG2hEYlwCGaSIbrB1z53ItObytV-AekJC3L1O2sUmJiktUa69IDrsgCy7gqkpOJSGQhEfRcFWPlzsE0f4A_9EGHHiA4ase5Gwam7NqEUb9UUO5cpJh7kT8YJapEYKZnPVMGkQq1qHsxKZcNItNk"
  alt="Soft focused image of a leather-bound journal and a wooden misbaha on a linen cloth in warm sunlight"
  width={400}
  height={256}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="p-8">
<h4 className="text-2xl font-headline text-primary mb-2">Morning Remembrances</h4>
<p className="text-on-surface-variant text-sm mb-6">A collection of authentic Adhkar to start your day with intention.</p>
<span className="text-secondary text-xs font-bold tracking-widest uppercase">12 Supplications</span>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-low rounded-xl overflow-hidden group">
<div className="h-64 overflow-hidden">
<Image
  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIRB_OnLubBXDmnn-h904iQRwrFkrGKu5B4AEMZIbaeXT_4yYgN5QFR0VFFDO10b58jZJ2AG4XJmeVR2V6hu6RA4VNbB7xn8uRLoyPpeDE75fKl4yoCD4VJWyHiwdk-xFROUmVlNFNKQ6ztzeoKOc7nxeTzAODfIxahcjI5csUVC2Z8Gk1yS5-_ba8zNwCjaDaOoxKzizcoZoo4yf_SL3HqyULTcn9XyjywLuTKXTaYBSLzbwqI2nUuhqUzMru-Naoho_XHOqUx68"
  alt="Elegant close up of Arabic calligraphy on parchment with gold leaf details"
  width={400}
  height={256}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="p-8">
<h4 className="text-2xl font-headline text-primary mb-2">Names of Allah</h4>
<p className="text-on-surface-variant text-sm mb-6">Explore the meanings and depth of the 99 beautiful names.</p>
<span className="text-secondary text-xs font-bold tracking-widest uppercase">99 Names</span>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-low rounded-xl overflow-hidden group">
<div className="h-64 overflow-hidden">
<Image
  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_f6MeKvidxnrpE9Wo91GtfjYVO8YfnyCFYk99JtAxMq_7V5KpnS76sLkEH6cINUnqXueWRBncpAb_ivZtU5LPR4nic7HipBM4Xbj4d5aZKZ15_I10Np1OoHtREOUUSqoDUyWACx7x1TndQJAdce3qtNV_buCxQV6aZRZnNMJjmZaHZ_PpIB2r8H-wZqWcAudfLyBvqv_qm7ecHGgElLBikOcRFFhCEJZx1rGQX1BuI03nGN_3iUCxHbuHpXucYc3hagXHBF56_ik"
  alt="High quality aerial shot of a tranquil desert oasis at dusk with stars beginning to appear"
  width={400}
  height={256}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>
</div>
<div className="p-8">
<h4 className="text-2xl font-headline text-primary mb-2">Verses of Healing</h4>
<p className="text-on-surface-variant text-sm mb-6">Selected Ayahs for comfort, shifa, and emotional well-being.</p>
<span className="text-secondary text-xs font-bold tracking-widest uppercase">15 Verses</span>
</div>
</div>
</div>
</section>
</main>
      {/* SideNavBar (Mobile Trigger Style but fixed as per rules) */}
<aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-[#FBFBE2] flex-col border-r-0 pt-10 pb-10 z-40">
<div className="px-8 mb-12">
<div className="flex items-center gap-4 mb-1">
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
<Image
  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkhS9H4lB_5EaZ41vD6CVjLa8_hZgMblcZYb3NSik99uBmWrZ4XVJu6nWIzAv2ULyt_VVbhuOFmmtY8jZD0q4VgESjxZ5w_o6X_V4EY3uEl6Mx0P-KREyjLC5EF5WwsadU8lv3LI93Um_Vicuh_it9phZcWllSTsxx1OnLOGYHUfmYrI8YtAMLkB1U1ADJNOGqNVy4-UK0EScnfLe8DIcmzMrBFTZDa9xf2NS0zv9SNAqK6-gJir2nIg1d6njMXsrwlZAtD47fLeM"
  alt="Portrait of a young man with a serene expression, soft side lighting"
  width={40}
  height={40}
  className="w-full h-full object-cover rounded-full"
/>
</div>
<div>
<h3 className="text-[#154212] font-sans font-bold text-xs uppercase tracking-widest">The Sanctuary</h3>
<p className="text-[#154212]/70 text-[10px]">Peace be upon you</p>
</div>
</div>
</div>
<nav className="grow flex flex-col gap-2">
<a className="bg-[#735C00] text-white rounded-full mx-4 py-3 px-6 flex items-center gap-4" href="#">
<span className="material-symbols-outlined" data-icon="menu_book" style={{fontVariationSettings: "'FILL' 1"}}>menu_book</span>
<span className="font-sans uppercase tracking-widest text-xs">Holy Quran</span>
</a>
<a className="text-[#154212]/70 py-3 px-10 flex items-center gap-4 hover:bg-[#E4E4CC] rounded-full transition-all mx-4" href="#">
<span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
<span className="font-sans uppercase tracking-widest text-xs">Daily Duas</span>
</a>
<a className="text-[#154212]/70 py-3 px-10 flex items-center gap-4 hover:bg-[#E4E4CC] rounded-full transition-all mx-4" href="#">
<span className="material-symbols-outlined" data-icon="fingerprint">fingerprint</span>
<span className="font-sans uppercase tracking-widest text-xs">Tasbih</span>
</a>
<a className="text-[#154212]/70 py-3 px-10 flex items-center gap-4 hover:bg-[#E4E4CC] rounded-full transition-all mx-4" href="#">
<span className="material-symbols-outlined" data-icon="explore">explore</span>
<span className="font-sans uppercase tracking-widest text-xs">Qibla</span>
</a>
<a className="text-[#154212]/70 py-3 px-10 flex items-center gap-4 hover:bg-[#E4E4CC] rounded-full transition-all mx-4" href="#">
<span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
<span className="font-sans uppercase tracking-widest text-xs">Journal</span>
</a>
</nav>
<div className="px-8 mt-auto">
<button className="w-full bg-[#154212] text-white rounded-full py-4 font-bold text-xs uppercase tracking-widest mb-10 hover:bg-[#2d5a27] transition-colors">
                Open Mushaf
            </button>
<div className="flex flex-col gap-4">
<a className="text-[#154212]/50 text-[10px] uppercase tracking-widest flex items-center gap-2" href="#">
<span className="material-symbols-outlined text-sm" data-icon="help_outline">help_outline</span>
                    Help
                </a>
<a className="text-[#154212]/50 text-[10px] uppercase tracking-widest flex items-center gap-2" href="#">
<span className="material-symbols-outlined text-sm" data-icon="shield">shield</span>
                    Privacy
                </a>
</div>
</div>
</aside>
{/* Content adjustment for sidebar */}
<style jsx>{`
        @media (min-width: 1024px) {
            main, nav {
                margin-left: 288px;
            }
        }
    `}</style>
{/* Footer Space */}
<footer className="py-20 text-center border-t border-outline-variant/5 mx-12">
<p className="font-headline italic text-primary/40 text-xl">Peace be with you on your journey.</p>
</footer>
    </>
  );
}
