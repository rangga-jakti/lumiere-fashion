'use client'
import { useEffect, useRef } from 'react'
export default function Hero() {
  const heroRef = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return
      heroRef.current.style.transform = "translateY(" + (window.scrollY * 0.3) + "px)"
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1C1410]">
      <div ref={heroRef} className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1606103836293-0a063315c833?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1410]/95 via-[#1C1410]/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1410]/60 via-transparent to-transparent" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 border border-[#C9A96E]/40 rounded-full px-4 py-1.5 mb-8"
            style={{ animation: "fadeIn 0.6s ease 0.2s both" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse" />
            <span className="text-[#C9A96E] text-xs font-mono tracking-widest uppercase">New Collection 2025</span>
          </div>
          <h1 className="font-display text-[#FAF7F4] leading-[1.1] mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)", animation: "fadeIn 0.7s ease 0.35s both" }}>
            Fashion Muslim
            <br />
            <em className="text-[#C9A96E] not-italic">Yang Elegan</em>
          </h1>
          <p className="text-[#FAF7F4]/60 text-lg leading-relaxed mb-10 max-w-lg"
            style={{ animation: "fadeIn 0.7s ease 0.5s both" }}>
            Tampil anggun dan modern dengan koleksi busana muslim premium kami.
            Dibuat dengan bahan terbaik, dirancang untuk wanita masa kini.
          </p>
          <div className="flex flex-wrap gap-4" style={{ animation: "fadeIn 0.7s ease 0.65s both" }}>
            <a href="#koleksi" className="btn-primary px-8 py-4 rounded-full text-sm font-semibold tracking-wide">
              Lihat Koleksi
            </a>
            <a href="#tentang" className="flex items-center gap-2 text-[#FAF7F4]/60 hover:text-[#FAF7F4] transition-colors text-sm font-medium">
              Tentang Kami
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <div className="flex gap-10 mt-16 pt-10 border-t border-[#FAF7F4]/10"
            style={{ animation: "fadeIn 0.7s ease 0.8s both" }}>
            {[
              { num: "500+", label: "Produk" },
              { num: "10k+", label: "Pelanggan" },
              { num: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-[#C9A96E] text-2xl font-bold">{stat.num}</div>
                <div className="text-[#FAF7F4]/40 text-xs font-mono tracking-widest uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[#FAF7F4] text-xs font-mono tracking-widest">scroll</span>
        <div className="w-px h-10 bg-[#FAF7F4] animate-pulse" />
      </div>
    </section>
  )
}