'use client'
import { useEffect, useRef, useState } from 'react'
export default function Contact() {
  const sectionRef = useRef(null)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => el.classList.add('visible'))
        }
      })
    }, { threshold: 0.15 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    const waMessage = encodeURIComponent("Halo Lumiere, saya " + form.name + " ingin bertanya tentang koleksi terbaru. " + form.message)
    window.open("https://wa.me/6281234567890?text=" + waMessage, "_blank")
    setSubmitted(true)
  }
  return (
    <section id="kontak" ref={sectionRef} className="py-28 bg-[#1C1410] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="reveal">
              <span className="text-[#C9A96E] text-xs font-mono tracking-widest uppercase">Hubungi Kami</span>
              <div className="divider mt-3" />
            </div>
            <h2 className="reveal delay-100 font-display text-4xl lg:text-5xl font-semibold text-[#FAF7F4] mt-4 mb-8 leading-tight">
              Ada yang Bisa
              <br />
              <em className="text-[#C9A96E]">Kami Bantu?</em>
            </h2>
            <div className="reveal delay-200 space-y-6">
              {[
                { label: 'WhatsApp', value: '+62 812-3456-7890' },
                { label: 'Email', value: 'hello@lumiere.id' },
                { label: 'Instagram', value: '@lumiere.official' },
                { label: 'Jam Operasional', value: 'Senin-Sabtu: 08.00 - 21.00' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F4]/5 border border-[#FAF7F4]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C9A96E] text-xs font-mono">✦</span>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[#FAF7F4]/40 tracking-widest uppercase mb-1">{item.label}</div>
                    <div className="text-[#FAF7F4] text-sm">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal delay-300 flex gap-3 mt-8">
              {['IG', 'TK', 'FB', 'YT'].map((s) => (
                <a key={s} href="#"
                  className="w-10 h-10 rounded-full border border-[#FAF7F4]/10 flex items-center justify-center text-[#FAF7F4]/40 hover:border-[#C9A96E]/40 hover:text-[#C9A96E] transition-all text-xs font-mono">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <div className="bg-[#FAF7F4]/5 border border-[#FAF7F4]/10 rounded-3xl p-8">
              <h3 className="font-display text-2xl text-[#FAF7F4] mb-2">Kirim Pesan</h3>
              <p className="text-[#FAF7F4]/40 text-sm mb-8">Kami akan membalas via WhatsApp.</p>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">💬</div>
                  <h4 className="font-display text-2xl text-[#C9A96E] mb-2">Terima Kasih!</h4>
                  <p className="text-[#FAF7F4]/40 text-sm">Pesan kamu sudah dikirim ke WhatsApp kami.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: 'name', label: 'Nama', type: 'text', placeholder: 'Nama lengkap' },
                    { id: 'phone', label: 'No. WhatsApp', type: 'tel', placeholder: '08xxxxxxxxxx' },
                    { id: 'email', label: 'Email', type: 'email', placeholder: 'nama@email.com' },
                  ].map((field) => (
                    <div key={field.id}>
                      <label className="text-xs font-mono text-[#FAF7F4]/40 tracking-widest uppercase block mb-1.5">{field.label}</label>
                      <input type={field.type} required placeholder={field.placeholder}
                        value={form[field.id]} onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                        className="w-full bg-[#FAF7F4]/5 border border-[#FAF7F4]/10 rounded-xl px-4 py-3 text-[#FAF7F4] text-sm placeholder-[#FAF7F4]/20 focus:outline-none focus:border-[#C9A96E]/50 transition-colors" />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs font-mono text-[#FAF7F4]/40 tracking-widest uppercase block mb-1.5">Pesan</label>
                    <textarea placeholder="Tanyakan tentang produk, ukuran, atau custom order..." rows={4}
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#FAF7F4]/5 border border-[#FAF7F4]/10 rounded-xl px-4 py-3 text-[#FAF7F4] text-sm placeholder-[#FAF7F4]/20 focus:outline-none focus:border-[#C9A96E]/50 transition-colors resize-none" />
                  </div>
                  <button type="submit" className="btn-primary w-full py-4 rounded-full font-semibold text-sm mt-2">
                    Kirim via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}