import ItemTodo from "./ItemTodo";



export default function ListTodo({w}) {
    console.log({w})
  return (
      
      <ul className="list-reset">
        {/* {children} */}

        {/* {data.map((i)=><ItemTodo x = {i} />)} */}

        { w.map((i , index) => <ItemTodo key={index} item={i} />)}
        
    </ul>
)
}
