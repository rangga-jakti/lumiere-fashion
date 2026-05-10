with open('components/Collection.jsx', 'r', encoding='utf-8') as f:
    content = f.read()
content = content.replace(
    "{ id: 5, name: 'Gamis Rania', category: 'Gamis', price: 425000, image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=500&q=80'",
    "{ id: 5, name: 'Gamis Rania', category: 'Gamis', price: 425000, image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=500&q=80'"
)
with open('components/Collection.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done')
