import React from "react";
import MakeupCard from './MakeupCard'

function MakeupTable({makeupList}) {
  return (
  <ul className='cards'>
    {makeupList.map((makeup) => {
        return <MakeupCard key={makeup.id} makeup={makeup}/>
    })}
  </ul>
  )
}

export default MakeupTable;