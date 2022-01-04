import React,{useState,useEffect} from 'react'

function UseEffect() {
    const initialState = 10;
    const [myNum, setmyNum] = useState(initialState)
    
    useEffect(() => {
        document.title = `${myNum}`
        console.log("hello");
    })
    console.log("ello");

    // jab state variable chnage hota hai component rerender hota hai.
    // har component rerender hota hai to pehli bar useffect chnge hota hi hai.
      
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
          </div>
        </>
    )
}

export default UseEffect;
