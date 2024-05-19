



export default function CardDivar({x}) {



 
  return (

    <div className="mt-2 flex  justify-center">

        <div className="flex   max-w-80 border-2 rounded-lg border-sky-500 p-6 m-2  justify-center">
            <div>
                <img className="max-w-32" src={x ?. img} alt="" />
            </div>

            <div>
                <h1>{x ?. title}</h1>
                <span>{x ?. price}</span>
            </div>
        </div>


    </div>



  )

}
