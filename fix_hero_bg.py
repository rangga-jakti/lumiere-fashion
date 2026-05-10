with open('components/Hero.jsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace(
    "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1606103836293-0a063315c833?w=1600&q=80')"
)
with open('components/Hero.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done')
