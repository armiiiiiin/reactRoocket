import ItemTodo from "./ItemTodo";



export default function ListTodo({w , deleteTodo}) {
    console.log({w})
  return (
      
      <ul className="list-reset">
        {/* {children} */}

        {/* {data.map((i)=><ItemTodo x = {i} />)} */}

        { w.map((i , index) => <ItemTodo key={index} item={i} deleteTodo={deleteTodo} />)}
        
    </ul>
)
}
