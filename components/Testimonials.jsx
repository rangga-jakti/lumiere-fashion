'use client'
import { useEffect, useRef, useState } from 'react'
const testimonials = [
  { name: 'Fatimah Azzahra', role: 'Ibu Rumah Tangga', avatar: 'FA', text: 'Gamis Zahira sangat nyaman dipakai seharian. Bahannya adem dan modelnya elegant. Banyak yang nanya beli dimana!', rating: 5 },
  { name: 'Siti Nurhaliza', role: 'Mahasiswi', avatar: 'SN', text: 'Hijab voalnya bagus banget, nggak licin dan mudah dibentuk. Sudah beli 3 warna dan pasti balik lagi buat beli lebih!', rating: 5 },
  { name: 'Aisyah Putri', role: 'Pengusaha', avatar: 'AP', text: 'Kualitasnya sesuai harga bahkan lebih. Packaging rapih, pengiriman cepat. Sudah jadi langganan tetap sejak 2 tahun lalu.', rating: 5 },
  { name: 'Rahma Dewi', role: 'Content Creator', avatar: 'RD', text: 'Sering pake baju Lumiere untuk konten karena modelnya photogenic banget. Bahan premium tapi harga tetap terjangkau.', rating: 5 },
]
export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
        }
      })
    }, { threshold: 0.2 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % testimonials.length), 4000)
    return () => clearInterval(timer)
  }, [])
  const t = testimonials[active]
  return (
    <section id="testimoni" ref={sectionRef} className="py-28 bg-[#FAF7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="reveal">
            <span className="text-[#C9A96E] text-xs font-mono tracking-widest uppercase">Testimoni</span>
            <div className="divider mx-auto mt-3" />
          </div>
          <h2 className="reveal delay-100 font-display text-4xl lg:text-5xl font-semibold text-[#1C1410] mt-4">
            Yang Mereka <em>Katakan</em>
          </h2>
        </div>
        <div className="reveal delay-200 max-w-2xl mx-auto">
          <div key={active} className="bg-white rounded-3xl p-10 shadow-sm relative"
            style={{ animation: "fadeIn 0.5s ease both" }}>
            <div className="absolute top-8 right-10 font-display text-8xl text-[#C9A96E]/10 leading-none select-none">&ldquo;</div>
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => <span key={i} className="text-[#C9A96E] text-lg">★</span>)}
            </div>
            <p className="font-display text-xl text-[#1C1410] leading-relaxed italic mb-8">&ldquo;{t.text}&rdquo;</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1C1410] flex items-center justify-center">
                <span className="text-[#C9A96E] text-sm font-mono font-bold">{t.avatar}</span>
              </div>
              <div>
                <div className="font-semibold text-[#1C1410]">{t.name}</div>
                <div className="text-xs text-[#8C7B6B] font-mono tracking-wider">{t.role}</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={"transition-all duration-300 rounded-full " + (i === active ? "w-8 h-2 bg-[#C9A96E]" : "w-2 h-2 bg-[#C9A96E]/30 hover:bg-[#C9A96E]/60")} />
            ))}
          </div>
        </div>
        <div className="reveal delay-300 grid grid-cols-3 gap-6 mt-20 max-w-2xl mx-auto text-center">
          {[
            { num: "4.9", label: "Rating" },
            { num: "10k+", label: "Pelanggan" },
            { num: "98%", label: "Puas" },
          ].map((s) => (
            <div key={s.label} className="p-6 rounded-2xl bg-[#1C1410]">
              <div className="font-display text-3xl font-bold text-[#C9A96E]">{s.num}</div>
              <div className="text-xs text-[#FAF7F4]/40 font-mono tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}