import ItemJob from './ItemJob'

export default function ListJob({data}) {
  return (

    <div>

      {data.map((item)=><ItemJob item={item} />)}
      
    </div>
  )
}
