import './globals.css'
export const metadata = {
  title: 'Lumière - Fashion Muslim Modern',
  description: 'Koleksi fashion muslim modern yang elegan dan berkelas.',
}
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
