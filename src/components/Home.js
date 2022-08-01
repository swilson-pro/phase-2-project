import React from "react";
import MakeupCard from './MakeupCard'
import Search from './Search';
import {components} from 'react-select'


function Home({makeupList, ifImageError,setSearchTerm,searchTerm, updateBrand, brand}) {
    
  return (
    <main>
        {/* try to put a checkbox in the dropdown. */}
        <label htmlFor='brands'>Choose a brand:</label>
        <select name='brands' id='brands' onChange={updateBrand}>
            <option value='revlon'>Revlon</option>
            <option value='maybelline'>Maybelline</option>
            <option value='covergirl'>Covergirl</option>
            <option value='dior'>Dior</option>
            <option value=''>All Brands</option>
        </select>
        <button>select</button>
        <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>

        <ul className='cards'>
            {makeupList.map((makeup) => {
            return <MakeupCard 
            key={makeup.id} ifImageError={ifImageError} makeup={makeup}/>
    })}
        </ul>
  </main>
  )
}

export default Home;
