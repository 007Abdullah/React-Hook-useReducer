import React, { useContext, useReducer, useState } from 'react'
import counterContext from './GlobalContex';
import CounterReducer from './CounterReducer';

export default function Second() {

    let useCounter = useContext(counterContext);

    console.log("Why Coming ITs===>", useCounter)

    const [table, settable] = useState([]);

    const [state, dispatch] = useReducer(CounterReducer, 10)

    console.log(state)

    function check() {
        let t = 2
        for (let i = 0; i <= 10; i++) {
            settable((prev) => (
                prev.concat(t * i)
            ))
        }
    }


    return (
        <div>
            <h1>Reducer Value : {state}</h1>
            <button onClick={() => dispatch('INCREMENT')}>INCREMENT Reducer</button>
            <br />
            <br />
            <br />

            <button onClick={check}>Table</button>
            <p>First Name {useCounter}</p>
            <button onClick={() => { useCounter[1](++useCounter[0]) }}>Click ME</button>
            {table.map((e, i) => {
                return (
                    <>
                        <div key={i}>
                            <p>{e}</p>
                        </div>


                    </>
                )
            })}

        </div>
    )
}
