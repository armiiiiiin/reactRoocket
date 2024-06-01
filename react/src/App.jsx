import Job from "./Job";
import Rent from "./Rent";
import Todo from "./Todo";





export default function App() {
  return (

    <div className="flex justify-between m-20">
      <div className="flex border w-1/2 m-2 h-60 justify-center">
        <Job/>
      </div>

      <div className="flex border w-1/2 m-2 h-60 justify-center">
        <Rent/>
      </div>

    </div>

  )
}
