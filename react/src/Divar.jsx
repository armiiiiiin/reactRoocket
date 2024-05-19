import { useState } from "react";
import CardDivar from "./component/Divar/CardDivar";
import LisrDivar from "./component/Divar/LisrDivar";



export default function Divar() {



    const [GetData , setGetData] = useState([
        {
            title : "new car for sale",
                price : "5000$",
                img : "https://s100.divarcdn.com/static/photo/afra/post/jtXFL-q-ohT8BxdssP_2mQ/19112c37-a341-46d6-8759-6a367bea3f84.jpg"
        },
        {
            title : "new car for sale",
                price : "5000$",
                img : "https://s100.divarcdn.com/static/photo/afra/post/jtXFL-q-ohT8BxdssP_2mQ/19112c37-a341-46d6-8759-6a367bea3f84.jpg"
        }
    ])
    



let userData = GetData.map((i) => <CardDivar x={i} />)


const moreHanler = () => {
    setGetData([
        ...GetData,
        {
            title : "111111111111",
                price : "5000$",
                img : "https://s100.divarcdn.com/static/photo/afra/post/jtXFL-q-ohT8BxdssP_2mQ/19112c37-a341-46d6-8759-6a367bea3f84.jpg"
        },
        {
            title : "222222",
                price : "5000$",
                img : "https://s100.divarcdn.com/static/photo/afra/post/jtXFL-q-ohT8BxdssP_2mQ/19112c37-a341-46d6-8759-6a367bea3f84.jpg"
        }
        
    
    ])

}



    return(


        <div className="flex  justify-center">


                <LisrDivar >


                    {userData}

                    <button onClick={moreHanler}>more</button>
                    

                </LisrDivar>
        </div>




    )
}