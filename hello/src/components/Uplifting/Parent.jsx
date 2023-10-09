import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const Parent = () =>{
    const [value, setValue] = useState(0)
    return(
        <div>
             <Child1 value={value} setValue={setValue} />
             <Child2 count={value}/>
        </div>
    )
}

export default Parent