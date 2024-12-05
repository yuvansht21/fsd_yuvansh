import React, { useState } from 'react'

const State3 = () => {
    const[total,settotal]=useState(0);
  return (
    <div>
        <button
           onClick={()=>{
            settotal(total+1);
           }}
           >
            increase
           </button>
           <button
            onClick={()=>{
                settotal(total-1);
            }}
            >
                decrease
            </button>
            <h2>{total}</h2>
    </div>
  )
}

export default State3