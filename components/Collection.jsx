'use client'
import { useEffect, useRef, useState } from 'react'
const products = [
  { id: 1, name: 'Gamis Zahira', category: 'Gamis', price: 385000, image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&q=80', tag: 'Bestseller' },
  { id: 2, name: 'Hijab Voal Layla', category: 'Hijab', price: 125000, image: 'https://images.unsplash.com/photo-1559563458-527698bf5295?w=500&q=80', tag: 'New' },
  { id: 3, name: 'Tunik Safa', category: 'Tunik', price: 275000, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80', tag: null },
  { id: 4, name: 'Celana Kulot Nisa', category: 'Celana', price: 215000, image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80', tag: 'Popular' },
  { id: 5, name: 'Gamis Rania', category: 'Gamis', price: 425000, image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=500&q=80', tag: 'New' },
  { id: 6, name: 'Set Outer Hana', category: 'Outer', price: 345000, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80', tag: null },
  { id: 7, name: 'Hijab Satin Mira', category: 'Hijab', price: 145000, image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&q=80', tag: 'Bestseller' },
  { id: 8, name: 'Tunik Kaftan Dina', category: 'Tunik', price: 295000, image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&q=80', tag: null },
]
const categories = ['Semua', 'Gamis', 'Hijab', 'Tunik', 'Celana', 'Outer']
const formatPrice = (price) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price)
export default function Collection() {
  const [active, setActive] = useState('Semua')
  const [filtered, setFiltered] = useState(products)
  const sectionRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 80)
          })
        }
      })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])
  useEffect(() => {
    if (active === 'Semua') setFiltered(products)
    else setFiltered(products.filter((p) => p.category === active))
  }, [active])
  const btnClass = (cat) => cat === active
    ? 'px-5 py-2 rounded-full text-sm font-medium bg-[#1C1410] text-[#FAF7F4]'
    : 'px-5 py-2 rounded-full text-sm font-medium border border-[#EDE8E3] text-[#8C7B6B] hover:border-[#1C1410] hover:text-[#1C1410] transition-all'
  return (
    <section id="koleksi" ref={sectionRef} className="py-28 bg-[#FAF7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="reveal">
            <span className="text-[#C9A96E] text-xs font-mono tracking-widest uppercase">Koleksi Kami</span>
            <div className="divider mx-auto mt-3" />
          </div>
          <h2 className="reveal delay-100 font-display text-4xl lg:text-5xl font-semibold text-[#1C1410] mt-4">
            Pilihan <em>Terbaik</em>
          </h2>
          <p className="reveal delay-200 text-[#8C7B6B] mt-4 max-w-md mx-auto text-sm">
            Koleksi busana muslim modern dengan kualitas premium dan desain yang timeless.
          </p>
        </div>
        <div className="reveal delay-300 flex justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)} className={btnClass(cat)}>{cat}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product, i) => (
            <div key={product.id} className="reveal card-product bg-white rounded-2xl overflow-hidden"
              style={{ transitionDelay: i * 60 + "ms" }}>
              <div className="aspect-[3/4] overflow-hidden bg-[#F0EBE5] relative">
                <img src={product.image} alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                {product.tag && (
                  <span className="absolute top-3 left-3 text-[10px] font-mono tracking-wider bg-[#1C1410] text-[#FAF7F4] px-2.5 py-1 rounded-full uppercase">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-4">
                <div className="text-[10px] font-mono text-[#C9A96E] tracking-widest uppercase mb-1">{product.category}</div>
                <h3 className="font-display font-semibold text-[#1C1410] text-sm mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#1C1410] text-sm">{formatPrice(product.price)}</span>
                  <button className="text-xs btn-outline px-3 py-1.5 rounded-full font-medium">+ Keranjang</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="reveal text-center mt-12">
          <a href="#kontak" className="btn-outline px-8 py-3 rounded-full text-sm font-semibold inline-block">
            Lihat Semua Koleksi
          </a>
        </div>
      </div>
    </section>
  )
}