import React , { useEffect } from "react"
// import MakeupCard from "./MakeupCard";
import MakeupTable from "./MakeupTable";

//  creating props to be able to get info for each product under the compnay 
const MyCompanyProducts = ({ makeup }) => {

//  Goal is to filter out and display the company products on the page
//  when the create button is clicked it will direct to MyCompanyProducts
// Createnewproduct will then have input info then it will be posted on MyCompanyProducts

    return (
      <div>
        {/* <MakeupTable makeup={makeup} /> */}
        <header className="my-company-header">
          <h1>My Company Products</h1>
          <form>
          </form>
        </header>
      </div>
    );
  };

export default MyCompanyProducts