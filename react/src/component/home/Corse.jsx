

export default function Corse({image = "default image" , title  = "default title" , price =  "default price"}) {
    

    return(

        <div>
            <h3>{image}</h3>
            <h3>{title}</h3>
            <h3>{price}</h3>

        </div>
    )
}