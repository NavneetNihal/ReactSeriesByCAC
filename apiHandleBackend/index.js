import express from 'express';

const app = express();


app.get('/api/products', (req, res) => {
    const products = [
  {
    id: 1,
    name: "table",
    price: 299.99,
    image: "https://example.com/images/wooden-table.jpg"
  },
  {
    id: 2,
    name: "chair",
    price: 149.50,
    image: "https://example.com/images/office-chair.jpg"
  },
  {
    id: 3,
    name: "mug",
    price: 12.99,
    image: "https://example.com/images/coffee-mug.jpg"
  },
  {
    id: 4,
    name: "lamp",
    price: 35.00,
    image: "https://example.com/images/desk-lamp.jpg"
  },
  {
    id: 5,
    name: "bookshelf",
    price: 110.00,
    image: "https://example.com/images/bookshelf.jpg"
  },
  {
    id: 6,
    name: "headphones",
    price: 89.99,
    image: "https://example.com/images/headphones.jpg"
  },
  {
    id: 7,
    name: "plant",
    price: 24.50,
    image: "https://example.com/images/potted-plant.jpg"
  },
  {
    id: 8,
    name: "keyboard",
    price: 129.00,
    image: "https://example.com/images/keyboard.jpg"
  }
]
// http://localhost:3000/api/products?search=metal


    if (req.query.search) {
      const filterProducts =  products.filter(product => product.name.includes(req.query.search))
      res.send(filterProducts)
      return
    }


    setTimeout(() => {
        res.send(products);
    }, 3000);
})



const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});