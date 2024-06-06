import ItemRent from "./ItemRent";

export default function ListRent({data , DeleteHanler}) {



  return (

    <div className="flex flex-wrap justify-center ">

      {data.map((item)=><ItemRent item = {item} DeleteHanler={DeleteHanler} />)}

    </div>

    
  )
}
