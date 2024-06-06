import DeletItem from "../Todo/DeletItem";
import DeleteRent from "./DeleteRent";

export default function ItemRent({item , DeleteHanler}) {


  return (



    <div className="flex flex-col w-auto border-2 border-slate-300 rounded m-2 p-2 text-gray-500">
      
      <h1>{item?.Title}</h1>
      <button className="flex justify-between ">
        <DeleteRent clickHanler={DeleteHanler} />
        <span className="font-bold text-green-800 uppercase p-2">edite</span>
      </button>
    </div>
  )
}
