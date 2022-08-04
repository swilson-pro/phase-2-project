import React from "react"
import MakeupC3 from "./MakeupC3";


const MyProducts = ({makeupList, deleteProduct}) => {

  console.log('MyProductsmakeuplist', makeupList)

    return (
      <main>
        <ul className='cards'>
        {makeupList.map((makeup) => {
            return <MakeupC3 
            key={makeup.id} 
            makeup={makeup}
            deleteProduct={deleteProduct}
            />
    })}
        </ul>
      </main>
    );
  };

export default MyProducts