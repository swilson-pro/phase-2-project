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
  <div className='newproductform'>
    <h2 className='newproductheading'>New Product</h2>
    <form className='form' onSubmit={handleSubmit}>
      <input 
      className='newProdInput'
      type="text"
      name="image"
      placeholder="Image URL"
      value={image}
      onChange={(e) => setImage(e.target.value)}
       />
      <input 
      className='newProdInput'
      type="text"
      name="name"
      placeholder="Name of Product"
      value={name}
      onChange={(e) => setName(e.target.value)}
       />
      <input 
      className='newProdInput'
      type="text"
      name="prodtype"
      placeholder="Product Type"
      value={productType}
      onChange={(e) => setProductType(e.target.value)}
       />
      <input 
      className='newProdInput'
      type="number"
      name="price"
      placeholder="Price"
      value={price}
      onChange={(e) => setPrice(parseFloat(e.target.value))}
       />
      <input 
      className='newProdInput'
      type="text"
      name="brand"
      placeholder="Brand"
      value={brand}
      onChange={(e) => setBrand(e.target.value)}
       />

      <textarea className='newProdInput' cols='200' rows='10' value={description} onChange={(e) => setDescription(e.target.value)} />
      <br/>
      <button className='addProduct' type="submit">Add Product</button>
    </form>
  </div>
  )
}

export default NewProductForm;
