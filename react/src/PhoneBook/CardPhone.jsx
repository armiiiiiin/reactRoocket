


export default function CardPhone({x}) {
  return (


    <div className="grid border-2 rounded-lg border-slate-400 w-60 h-24 font-medium text-sm p-1 m-1">
        
        <div className="flex flex-row-reverse ">
            <h1 className="flex justify-center w-3/5 ">{x?.title}</h1>
            <h3 className="flex justify-center w-1/5">{x?.ad}</h3>
            <h3 className="flex justify-center w-1/5">{x?.verify}</h3>
        </div>

    
        <div className="flex flex-row-reverse ">
            <h3 className="flex justify-center w-1/2">{x?.phone}</h3>
            <h3 className="flex justify-center w-1/2">{x?.tell}</h3>
        </div>


        <div className="flex flex-row-reverse ">
            <h3 className="flex justify-center w-1/2">{x?.instagrem}</h3>
            <h3 className="flex justify-center w-1/2">{x?.website}</h3>
        </div>



        <div className="flex flex-row-reverse ">
            <h1 className="flex justify-center w-1/3 ">{x?.nardeban}</h1>
            <h1 className="flex justify-center w-1/3 ">{x?.vip}</h1>
            <h1 className="flex justify-center w-1/3 ">{x?.ok}</h1>
        </div>



    </div>


  )
}
