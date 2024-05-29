import { useState } from "react"
import ItemTodo from "./component/Todo/ItemTodo"
import ListTodo from "./component/Todo/ListTodo"




export default function Todo() {



    const [data , setdata] = useState (
         
            [{
              title : "read a book" ,
              status : false
            },
            {
              title : "go to gym" ,
              status : true
            },
            ]
          
    )


// let handler = () =>{

//     setdata([
//         ...data ,
//         {
//             title : "watch the tv" ,
//             status : false
//           }
//     ])
// }

const [newTodoTitle , setNewTodoTitle] = useState ('');

const onInputNewTodoHanler = (event) =>{
  setNewTodoTitle (event.target.value)
}


const addNewTodoHanler = (event) =>{
  if (event.key === 'Enter' &&  newTodoTitle!= '' ) {
    

    setdata([
      ...data,
      {
        title : newTodoTitle,
        status : false,
      }
    ])

    setNewTodoTitle ('')
  }  
}

  return (


      <div className="flex items-center justify-center h-screen">
          <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">

              <div className="flex items-center mb-6">
                  <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
              </div>

              <div className="relative">
                  <input type="text" placeholder="What needs to be done today?"
                  onChange={onInputNewTodoHanler}
                  onKeyDown={addNewTodoHanler}
                  value={newTodoTitle}
                  className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
              </div>

             
              {/* <ListTodo>
                {data.map((i)=><ItemTodo x = {i} />)}
              </ListTodo> */}

              <ListTodo w = {data}/>


              {/* <button onClick={handler}>more</button> */}

          </div>
      </div>
    
)
}
