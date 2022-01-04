import React,{useState, useReducer} from 'react'
import './style.css';
const reducer = (state,action)=>{
    if(action.type === "INCR"){
        state = state+1;
    }
    if(action.type === "DECR"){
        state = !state ? 0:state-1;
    }
return state;
}
function UseReducer() {


    const initialData = 0;
    const [state, dispatch] = useReducer(reducer, initialData) 

 

    return (
        <>

        <div className='center_div'>
        <p>{state}</p>
        <div className='button2' onClick={ ( ) => dispatch( { type: "INCR" } ) } >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        increment
        </div>

        <div className='button2' onClick={ ( ) => dispatch( { type: "DECR" } ) } >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Decrement
        </div>
        </div> 

        </>
    )
}

export default UseReducer;
