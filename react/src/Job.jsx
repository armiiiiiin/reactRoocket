
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import ListJob from './component/Job/ListJob';

export default function Job() {




  //first data default manual set
  const [data , setdata] = useState([
    {
      id : uuidv4(),
      title : 'first title',
      status : false,
    },
    {
      id : uuidv4(),
      title : 'secend title',
      status : true,
    }
  ])


  //insert data from input by only onkeydown

  const onKeyDownHanler = ((i)=>{
    if(i.key == 'Enter' && i.target.value != ''){
      setdata([
        ...data,

       { 
        id : uuidv4(),
        title : i.target.value ,
        status : false,
      }
      ] 
          
      )
    i.target.value = ''
    }
  // console.log(i.target.value)
  //   console.log(i.key)
  })



 


  return (

    <div>
      <div>
        <h1>JOB</h1>
        <input type="text" placeholder='type Any Think' className='border border-gray-800' 
        onKeyDown={onKeyDownHanler}
        />
      </div>

      <div>
        <ListJob data = {data} />
      </div>
    </div>

  )
}
