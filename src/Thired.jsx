import React, { useReducer } from 'react'
import CounterReducer from './CounterReducer';
const Thired = () => {
    const [counterValueDisplay, dispatch] = useReducer(CounterReducer, 0);
    return (
        <div>
            <button onClick={() => { dispatch("INCREMENT") }}>INCREMENT</button>
            <br />
            <br /> <br />
            <button onClick={() => { dispatch("Decrement") }}>Decrement</button>
            <br />
            <br />
            Increment and Decrement  : {counterValueDisplay}
        </div >
    )
}
export default Thired;