import ItemJob from "./ItemJob";

export default function ListJob({jobStaticData}) {
  return (


    <div>
      {jobStaticData.map((i)=><ItemJob i = {i}/>)}
    </div>
  )
}
