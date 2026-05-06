'use client'
import { useState, useEffect } from 'react'
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const links = ['Koleksi', 'Tentang', 'Testimoni', 'Kontak']
  return (
    <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-500 " + (scrolled ? "bg-[#FAF7F4]/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6")}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-[#1C1410] tracking-tight">Lumière</span>
          <span className="text-[#C9A96E] text-xs font-mono">✦</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link} href={"#" + link.toLowerCase()}
              className="nav-link text-sm font-medium text-[#8C7B6B] hover:text-[#1C1410] transition-colors">
              {link}
            </a>
          ))}
          <a href="#kontak" className="btn-primary text-sm font-medium px-5 py-2.5 rounded-full">
            Shop Now
          </a>
        </div>
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={"block w-6 h-0.5 bg-[#1C1410] transition-all duration-300 " + (menuOpen ? "rotate-45 translate-y-2" : "")} />
          <span className={"block w-6 h-0.5 bg-[#1C1410] transition-all duration-300 " + (menuOpen ? "opacity-0" : "")} />
          <span className={"block w-6 h-0.5 bg-[#1C1410] transition-all duration-300 " + (menuOpen ? "-rotate-45 -translate-y-2" : "")} />
        </button>
      </div>
      <div className={"md:hidden transition-all duration-300 overflow-hidden " + (menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0")}>
        <div className="bg-[#FAF7F4] border-t border-[#EDE8E3] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link} href={"#" + link.toLowerCase()}
              className="text-sm font-medium text-[#8C7B6B]"
              onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
          <a href="#kontak" className="text-sm font-medium text-[#C9A96E]" onClick={() => setMenuOpen(false)}>
            Shop Now →
          </a>
        </div>
      </div>
    </nav>
  )
}