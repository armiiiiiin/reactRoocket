
export default function ItemRent({item}) {


  return (



    <div className="flex flex-col w-auto border-2 border-slate-300 rounded m-2 p-2 text-gray-500">
      
      <h1>{item?.Title}</h1>
      <button className="flex justify-between ">
        <span className=" font-bold text-red-800 uppercase p-2">delete</span>
        <span className="font-bold text-green-800 uppercase p-2">edite</span>
      </button>
    </div>
  )
}
