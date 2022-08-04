import React, {useState} from "react";

function NewProductForm({newProduct}) {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [price, setPrice] = useState('')
  const [productType, setProductType] = useState('')
  const [description, setDescription] = useState('')

  console.log({image, name, productType, brand, price, description})

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3002/posts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_link: image,
        name: name,
        product_type: productType,
        brand: brand,
        price: price,
        description: description,
      })
    })
    .then(r => r.json())
    .then(newMakeup => newProduct(newMakeup))
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
      type="text"
      name="prodtype"
      placeholder="Product Type"
      value={productType}
      onChange={(e) => setProductType(e.target.value)}
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

      <textarea cols='200' rows='10' value={description} onChange={(e) => setDescription(e.target.value)} />
      <br/>
      <button type="submit">Add a Product</button>
    </form>
  </div>
  )
}

export default NewProductForm;
