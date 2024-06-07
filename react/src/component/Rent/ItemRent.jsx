import DeleteRent from "./DeleteRent";

export default function ItemRent({item , DeleteHanler ,  StatusHanler}) {


  return (



    <div className="flex flex-col w-auto border-2 border-slate-300 rounded m-2 p-2 text-gray-500">
      
      <div className="flex flex-row-reverse justify-between">
        <h1 className= {`${item?.Status ? 'font-bold line-through' : ''}`} >{item?.Title}</h1>
        <input type="checkbox" checked={item?.Status } onChange={()=>StatusHanler(item)}  />
      </div>
      <button className="flex justify-between ">
        <DeleteRent clickHanler={()=>DeleteHanler(item)} />
        <span className="font-bold text-green-800 uppercase p-2">edite</span>
      </button>
    </div>
  )
}
