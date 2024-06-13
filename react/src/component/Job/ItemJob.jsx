


export default function ItemJob({item}) {
  return (
    <div className="border border-gray-400 m-2 p-2 w-full">

      <div className="flex justify-between">
        <h1>{item.title}</h1>
        <input type="checkbox" checked={item.status}/>
      </div>

      <div className="flex justify-between">
        <h1>delete</h1>
        <h1>edite</h1>
      </div>

    </div>

  )
}
