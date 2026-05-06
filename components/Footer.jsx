export default function Footer() {
  return (
    <footer className="bg-[#1C1410] border-t border-[#FAF7F4]/8 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-xl font-bold text-[#FAF7F4]">Lumiere</span>
              <span className="text-[#C9A96E] text-xs font-mono">✦</span>
            </div>
            <p className="text-[#FAF7F4]/40 text-sm leading-relaxed max-w-xs">
              Fashion muslim modern yang elegan dan berkelas. Tampil cantik tanpa mengorbankan nilai.
            </p>
            <div className="flex gap-3 mt-5">
              {["IG", "TK", "FB", "YT"].map((s) => (
                <a key={s} href="#"
                  className="w-9 h-9 rounded-full border border-[#FAF7F4]/10 flex items-center justify-center text-[#FAF7F4]/40 hover:border-[#C9A96E]/40 hover:text-[#C9A96E] transition-all text-xs font-mono">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono text-[#FAF7F4]/40 tracking-widest uppercase mb-4">Koleksi</div>
            <div className="space-y-2">
              {["Gamis", "Hijab", "Tunik", "Celana", "Outer"].map((item) => (
                <a key={item} href="#koleksi" className="block text-sm text-[#FAF7F4]/60 hover:text-[#C9A96E] transition-colors">{item}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono text-[#FAF7F4]/40 tracking-widest uppercase mb-4">Info</div>
            <div className="space-y-2">
              {["Tentang Kami", "Cara Order", "Pengiriman", "Return & Refund", "Kontak"].map((item) => (
                <a key={item} href="#" className="block text-sm text-[#FAF7F4]/60 hover:text-[#C9A96E] transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#FAF7F4]/8 pt-6 flex flex-col md:flex-row justify-between gap-2">
          <p className="text-[#FAF7F4]/40 text-xs font-mono">2025 Lumiere. All rights reserved.</p>
          <p className="text-[#FAF7F4]/40 text-xs font-mono">Made with ♥ in Indonesia</p>
        </div>
      </div>
    </footer>
  )
}