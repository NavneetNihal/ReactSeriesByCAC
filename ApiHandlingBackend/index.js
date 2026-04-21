import express from 'express';

const app = express();


app.get('/api/products', (req, res) => {
    const products = [
  {
    "id": 1,
    "name": "Solid Wooden Dining Table",
    "price": 299.99,
    "image": "https://example.com/images/wooden-table.jpg"
  },
  {
    "id": 2,
    "name": "Ergonomic Office Chair",
    "price": 149.50,
    "image": "https://example.com/images/office-chair.jpg"
  },
  {
    "id": 3,
    "name": "Ceramic Coffee Mug",
    "price": 12.99,
    "image": "https://example.com/images/coffee-mug.jpg"
  },
  {
    "id": 4,
    "name": "Adjustable Desk Lamp",
    "price": 35.00,
    "image": "https://example.com/images/desk-lamp.jpg"
  },
  {
    "id": 5,
    "name": "Minimalist Bookshelf",
    "price": 110.00,
    "image": "https://example.com/images/bookshelf.jpg"
  },
  {
    "id": 6,
    "name": "Wireless Bluetooth Headphones",
    "price": 89.99,
    "image": "https://example.com/images/headphones.jpg"
  },
  {
    "id": 7,
    "name": "Indoor Potted Plant",
    "price": 24.50,
    "image": "https://example.com/images/potted-plant.jpg"
  },
  {
    "id": 8,
    "name": "Mechanical Keyboard",
    "price": 129.00,
    "image": "https://example.com/images/keyboard.jpg"
  }
]

    setTimeout(() => {
        res.send(products);
    }, 3000);
})



const port = process.env.PORT || 3000;6


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});