


export default function CardPhone({data}) {
  return (


    <div className="grid border-2 rounded-lg border-slate-400 w-60 h-24 font-medium text-sm p-1 m-1">
        
        <div className="flex flex-row-reverse ">
            <h1 className="flex justify-center w-3/5 ">{data?.title}</h1>
            <h3 className="flex justify-center w-1/5">{data?.ad}</h3>
            <h3 className="flex justify-center w-1/5">{data?.verify}</h3>
        </div>

    
        <div className="flex flex-row-reverse ">
            <h3 className="flex justify-center w-1/2">{data?.phone}</h3>
            <h3 className="flex justify-center w-1/2">{data?.tell}</h3>
        </div>


        <div className="flex flex-row-reverse ">
            <h3 className="flex justify-center w-1/2">{data?.instagrem}</h3>
            <h3 className="flex justify-center w-1/2">{data?.website}</h3>
        </div>



        <div className="flex flex-row-reverse ">
            <h1 className="flex justify-center w-1/3 ">{data?.nardeban}</h1>
            <h1 className="flex justify-center w-1/3 ">{data?.vip}</h1>
            <h1 className="flex justify-center w-1/3 ">{data?.ok}</h1>
        </div>



    </div>


  )
}
