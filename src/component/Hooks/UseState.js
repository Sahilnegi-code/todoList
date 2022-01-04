import React from 'react';
import { useState } from 'react';
import './style.css';

function UseState() {
  const initialState = 10;
  const [myNum, setmyNum] = useState(initialState)
  console.log(myNum);
    return (
        <>
          <div className='center_div'>
          <p>{myNum}</p>
          <div className='button2' onClick={()=>setmyNum(myNum+1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          increment
          </div>
          <div className='button2' onClick={()=> myNum>0?setmyNum(myNum-1):setmyNum(0)} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          HOVER ME
          </div>
          </div>  
        </>
    )
}

export default UseState
