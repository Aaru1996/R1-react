import React from "react";

const Child1= ({value, setValue}) =>{
    return (
        <div>
           <button disabled={value==0} onClick={()=>setValue(value==0 ? value:(value-1))}>-</button>
           <button onClick={()=>setValue(value+1)}>+</button>
        </div>
    )
}

export default Child1