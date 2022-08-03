import React, {useState} from "react";

function NewProductForm({handleAddProduct}) {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')

  console.log({image, name, brand, price})

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image: image,
        name: name,
        brand: brand,
        price: price,
      })
    })
    .then(r => r.json())
    .then(console.log)
  }

  return ( 
  <div>
    <h2>New Product</h2>
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      name="image"
      placeholder="Image URL"
      value={image}
      onChange={(e) => setImage(e.target.value)}
       />
      <input 
      type="text"
      name="name"
      placeholder="Name of Product"
      value={name}
      onChange={(e) => setName(e.target.value)}
       />
      <input 
      type="number"
      name="price"
      placeholder="Price"
      value={price}
      onChange={(e) => setPrice(parseFloat(e.target.value))}
       />
      <input 
      type="text"
      name="brand"
      placeholder="Brand"
      value={brand}
      onChange={(e) => setBrand(e.target.value)}
       />
      <button type="submit">Add a Product</button>
    </form>
  </div>
  )
}

export default NewProductForm;
