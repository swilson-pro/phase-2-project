import React, { useEffect, useState } from "react";
import MakeupCard from "./MakeupCard";

//  Goal is to filter out and display the company products on the page
//  when the create button is clicked it will direct to MyCompanyProducts
// Createnewproduct will then have input info then it will be posted on MyCompanyProducts

function Createnewproduct({ onAddMakeUp, newProductArray, setNewProductArray }) {

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
      .then((newMakeUp) => setNewProductArray([...newProductArray, newMakeUp]))
    
  })

  console.log(makeUpName , makeUpBrand , makeUpImage, makeUpPrice)

  return (
    <div>
      <div className="new-makeup-header">
        <img src='empowering_makeup_logo.png' alt='your logo' />
        <h1>Create New Product</h1>
      </div>
      <div className="create-new-makeup-container">
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
        <ul>
          {
            newProductArray.map((makeup) => {
              return (
                <MakeupCard key={makeup.id} makeup={makeup} />
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Createnewproduct;
