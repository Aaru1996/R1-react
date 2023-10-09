import React, { useState } from "react";
import { useRef } from "react";
const Todos = () =>{
         
    const [text,setText]= useState('')
    const [data,setData]= useState([])
    const handleChange = (e)=>{
        setText(e.target.value)
    }

    const handleAdd = () => {
        if(!text)
        return false
          setData([...data, {id:Date.now(), action:false ,  value: text,  delete:"Delete"}])
          setText("")
    }
    const handleDelete = (id) =>{
        console.log(id)
        console.log(data)
      let upData= data.filter((e) => e.id != id )
        console.log(upData)
        if(upData)
         setData([...upData])
    }
    const handleCheck = (e) =>{
         let updata= data.map((el)=>{
                if(el.id==e.id)
               return {...el, action:!el.action}
                else
                return el
         })
         setData([...updata])
    }
  
    return (
        <div>
            <div>
                <input  value={text} onChange={handleChange} placeholder="type something"/>
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                <table border={1}>
                    <tr>
                      <th>Id</th>
                      <th>Value</th>
                      <th>Action</th>
                      <th>Delete</th>
                    </tr>
                   
                        {data?.map((e)=> {
                            return(
                                <tr>
                                    <td>{e.id}</td>
                                    <td>{e.value}</td>
                                    <td><input onChange={()=>handleCheck(e)} type='checkbox' value={e.action} />{e?.action ? "Read" : "Unread"}</td>
                                    <td onClick={()=>handleDelete(e.id)}>{e.delete}</td>
                                </tr>
                            )
                        })}
                    
                </table>
            </div>
        </div>
    )
}

export default Todos