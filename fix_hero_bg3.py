with open('components/Hero.jsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace(
    "url('https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1600&q=80')",
    "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80')"
)
with open('components/Hero.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done')
