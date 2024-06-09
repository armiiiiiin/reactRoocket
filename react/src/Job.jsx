import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import ListJob from "./component/Job/ListJob";


export default function Job() {


const [jobStaticData , setJobStaticData] = useState([
  {
    id : uuidv4(),
    Title : 'restorant ventor',
    status : false,
  }
])

const [input , setInput] = useState('')
const onChangeHanler = ((y)=>{
  setInput(y.target.value)
})

const onKeyDownHanler = ((x)=>{
  if (x.key === 'Enter' && x.target.value != ''){
    
    // console.log('onKeyDownHanler')
    setJobStaticData([
      ...jobStaticData,
      {
        id : uuidv4(),
        Title : input,
        status : false,
      }
    ]),
    setInput('')
  }
})





  return (
    <div>
      <h1 className="flex justify-center p-2">Job</h1>

      <div className="flex ">
        <input type="text" placeholder="type any think" 
                className="m-2 border rounded  border-gray-900 p-1"
                onChange={onChangeHanler}
                onKeyDown={onKeyDownHanler}
                value={input}/>

        <button className="m-2">Add</button>
      </div>

      <ListJob jobStaticData = {jobStaticData} />


    </div>
  )
}
