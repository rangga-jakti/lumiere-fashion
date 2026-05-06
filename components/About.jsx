'use client'
import { useEffect, useRef } from 'react'
export default function About() {
  const sectionRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
            el.classList.add('visible')
          })
        }
      })
    }, { threshold: 0.15 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  return (
    <section id="tentang" ref={sectionRef} className="py-28 bg-[#1C1410] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-left relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
                alt="About Lumiere"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#C9A96E] text-[#1C1410] rounded-2xl p-6 shadow-2xl max-w-[180px]">
              <div className="font-display text-4xl font-bold">5+</div>
              <div className="text-xs font-mono tracking-widest uppercase mt-1">Tahun Berdiri</div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-[#C9A96E]/30" />
          </div>
          <div className="space-y-6">
            <div className="reveal">
              <span className="text-[#C9A96E] text-xs font-mono tracking-widest uppercase">Tentang Kami</span>
              <div className="divider mt-3" />
            </div>
            <h2 className="reveal delay-100 font-display text-4xl lg:text-5xl font-semibold text-[#FAF7F4] leading-tight">
              Dibuat dengan
              <br />
              <em className="text-[#C9A96E]">Penuh Cinta</em>
            </h2>
            <p className="reveal delay-200 text-[#FAF7F4]/60 leading-relaxed">
              Lumiere lahir dari kecintaan terhadap fashion muslim yang modern dan elegan.
              Kami percaya setiap wanita berhak tampil cantik tanpa harus mengorbankan nilai-nilai yang dipegang.
            </p>
            <p className="reveal delay-300 text-[#FAF7F4]/60 leading-relaxed">
              Setiap produk kami dirancang dengan teliti menggunakan bahan premium pilihan,
              memastikan kenyamanan dan keindahan yang bisa dirasakan setiap hari.
            </p>
            <div className="reveal delay-400 grid grid-cols-2 gap-4 pt-4">
              {[
                { icon: "🌿", title: "Bahan Premium", desc: "Kualitas terjamin" },
                { icon: "✂️", title: "Handcrafted", desc: "Dibuat dengan detail" },
                { icon: "🚚", title: "Free Ongkir", desc: "Seluruh Indonesia" },
                { icon: "↩️", title: "Easy Return", desc: "7 hari garansi" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 items-start p-4 rounded-xl bg-[#FAF7F4]/5 hover:bg-[#FAF7F4]/10 transition-colors">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-[#FAF7F4]">{item.title}</div>
                    <div className="text-xs text-[#FAF7F4]/40 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}