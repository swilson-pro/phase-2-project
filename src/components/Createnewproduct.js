import React, { useState } from "react";

//  Goal is to filter out and display the company products on the page
//  when the create button is clicked it will direct to MyCompanyProducts
// Createnewproduct will then have input info then it will be posted on MyCompanyProducts

function Createnewproduct({ onAddMakeUp }) {

  const [makeUpName, setMakeUpName] = useState("")
  const [makeUpBrand, setMakeUpBrand] = useState("")
  const [makeUpImage, setMakeUpImage] = useState("")
  const [makeUpPrice, setMakeUpPrice] = useState("")

  const handleMakeUpSubmit = ((e) => {
    e.preventDefault()
    fetch('http://localhost:3000/products', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: makeUpName,
        brand: makeUpBrand,
        image: makeUpImage,
        price: makeUpPrice
      }) ,
    })
    .then((res) => res.json())
    .then((newMakeUp) => onAddMakeUp(newMakeUp))
  })

  console.log(makeUpName)

  return (
    <div>
      <header>
        <img src='empowering_makeup_logo.png' alt='your logo' />
        <h1>Create New Product</h1>
      </header>
      <body className="create-new-makeup-container">
        {/* i need an input for brand, name, price, image link, and description */}
        <form onSubmit={handleMakeUpSubmit} className="make-up-form">
          <input type="text"
            name="name"
            placeholder="Product Name"
            value={makeUpName}
            onChange={(e) => setMakeUpName(e.target.value)}
          />
          <input type="text"
            name="brand"
            placeholder="Product Brand"
            value={makeUpBrand}
            onChange={(e) => setMakeUpBrand(e.target.value)}
          />
          <input type="text"
            name="name"
            placeholder="Product Image"
            value={makeUpImage}
            onChange={(e) => setMakeUpImage(e.target.value)}
          />
          <input type="text"
            name="name"
            placeholder="Product Price"
            value={makeUpPrice}
            onChange={(e) => setMakeUpPrice(parseFloat(e.target.value))}
          />
          <button type="submit">Create New Product</button>
        </form>

      </body>
    </div>
  )
}

export default Createnewproduct;
