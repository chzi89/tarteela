"use client";

// Unicode for gear icon
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FBFBE2]/70 backdrop-blur-xl flex justify-between items-center px-12 py-6 max-w-480 mx-auto">
<div className="flex items-center gap-12">
<span className="font-serif italic text-2xl text-[#154212] tracking-tighter">Tarteela</span>
<div className="hidden md:flex items-center gap-8">
<a className="text-[#735C00] font-semibold border-b-2 border-[#735C00] pb-1 font-serif text-lg tracking-tight" href="#">Reading</a>
<a className="text-[#154212]/60 hover:text-[#735C00] transition-colors duration-300 font-serif text-lg tracking-tight" href="#">Supplications</a>
<a className="text-[#154212]/60 hover:text-[#735C00] transition-colors duration-300 font-serif text-lg tracking-tight" href="#">Treasury</a>
<a className="text-[#154212]/60 hover:text-[#735C00] transition-colors duration-300 font-serif text-lg tracking-tight" href="#">Community</a>
</div>
</div>
<div className="flex items-center gap-6">
<button className="material-symbols-outlined text-[#154212] cursor-pointer hover:text-[#735C00] transition-colors duration-300" data-icon="settings"><p>&#x26ED;</p></button>
<button className="material-symbols-outlined text-[#154212] cursor-pointer hover:text-[#735C00] transition-colors duration-300" data-icon="account_circle"><p>&#128100;</p></button>
</div>
</nav>
  
  );
}

