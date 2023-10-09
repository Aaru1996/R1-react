import React, { useState } from "react";

const Counter  = () =>{
    const [count, setCount] = useState(0)

    const handleDec = () =>{
         setCount(count-1);
    }
    const handleInc = () =>{
        setCount(count+1);
   }
    return (
        <div>
            <div>{count}</div>
            <button disabled={count==0} onClick={handleDec}>-</button>
            <button onClick={handleInc}>+</button>
        </div>
    )
}

export default Counter