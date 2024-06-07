import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import ListRent from "./component/Rent/ListRent";


export default function Rent() {


const [data , setdata] = useState([
  {
    id : uuidv4() ,
    Title : '1111',
    status : false,
  }
])


//************************************** */
  //use only onKeyDown
    // const onKeyDownHanler = ((e)=>{
    //   if (e.key == 'Enter' && e.target.value != '') {
    //     // console.log('first' , e.key , e.target.value )
    //     setdata([

    //       ...data,
          
    //       {
                // id : uuidv4(),
                // Title : e.target.value,
    //          status : false,
    //       }
    //     ]
    //     ),

    //     e.target.value = ''
    //   }
    // })
  //END
//************************************** */



//************************************** */
//use onKeyDown and onChange
const [Input , setInput] = useState ('')
const onChange = (e)=>{
  console.log(e.target.value)
  setInput(e.target.value)
}
const onKeyDownHanler = ((e)=>{
  if (e.key == 'Enter' && e.target.value != '') {
    // console.log('first' , e.key , e.target.value )
    setdata([

      ...data,
      
      {
        id : uuidv4(),
        Title : Input,
        status : false,
      }
    ]
    ),

    setInput ('')
  }
})
//END
//************************************** */



//************************************** */
//Delete
const DeleteHanler = (item) =>{
  let newData = data.filter ((itemsssss)=>{

    return item.id != itemsssss.id;
  })

  setdata(newData)
  console.log(newData)
  console.log(data)
  console.log(item)
}
//End
//************************************** */





const StatusHanler = (item)=>{
  
 
  let newitemstatus = data.map((todoitem) => {
    if(item.id === todoitem.id ) {
      todoitem.status = ! todoitem.status
    }

    return todoitem
  })

    // console.log(newitemstatus)
    setdata(newitemstatus)

  }


console.log(data)




  return (
    <div>
      <h1 className="flex justify-center justify-items-center p-2">Rent</h1>

      <div className="flex justify-center">
        <input type="text" placeholder="type any think" className="m-2 border rounded  border-gray-900 p-1"
        onKeyDown={onKeyDownHanler}
        onChange={onChange}
        value={Input}
        />
        <button className="m-2">Add</button>
      </div>

      <ListRent data={data} DeleteHanler={DeleteHanler}   StatusHanler={StatusHanler} />
    </div>
  )
}
