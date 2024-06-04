import Job from "./Job";
import Rent from "./Rent";
import Todo from "./Todo";





export default function App() {
  return (

    <div className="flex justify-between m-20">
      <div className="flex border border-gray-700 rounded-lg w-1/2 m-2 h-auto justify-center">
        <Job/>
      </div>

      <div className="flex border border-gray-700 w-1/2 m-2 h-auto justify-center">
        <Rent/>
      </div>

    </div>

  )
}
