import React from "react";
import MakeupCard from './MakeupCard'
import Search from './Search';


function Home({makeupList, ifImageError}) {
  return (
    <main>
        <button>select brands</button>
        <button>select</button>
        <Search />
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
