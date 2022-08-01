import React , { useState, useEffect } from "react"
// import MakeupCard from "./MakeupCard";
import MakeupTable from "./MakeupTable";

//  creating props to be able to get info for each product under the compnay 
const MyCompanyProducts = ({ makeup }) => {
  const[myMakeUpProducts , setMyMakeUpProducts]= useState("")
//  Goal is to filter out and display the company products on the page
//  when the create button is clicked it will direct to MyCompanyProducts
// Createnewproduct will then have input info then it will be posted on MyCompanyProducts

useEffect(() => {
  fetch('http://localhost:3000/products')
  .then((res) => res.json())
  .then((myMakeUpProducts) => {setMyMakeUpProducts(myMakeUpProducts)})
})
    return (
      <div>
        {/* <MakeupTable makeup={makeup} /> */}
      </div>
    );
  };

export default MyCompanyProducts