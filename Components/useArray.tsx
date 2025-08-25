import { useState } from "react";

export function UseArray(){
    const [array, setArray] = useState([1,2,3,4,5,6]);

    return (
        <div>
            {array.map((item)=><h1>{item}</h1>)}
            <button onClick={()=>setArray(()=>
                array.filter((item,index)=> index!=array.length-1)
            )} className="p-2 rounded text-red-600 font-bold">Remove</button>
        </div>
    )
}