import { useState } from "react";



export default function Counter() {

    

    const [clickCount , setclickCount] = useState(0)



    const clickHanler = ()=>{
        setclickCount (clickCount + 1)
        
    }

    return (

    <div className="flex flex-col font-bold ">
        
        <button onClick={clickHanler}>click me</button>
        <h1>{clickCount}</h1>


    </div>

  )

}
