import CardPhone from "./PhoneBook/CardPhone";
import ListCardPhone from "./PhoneBook/ListCardPhone";




export default function PhoneBook() {

  let data = [
    {
      title : "111111" ,
      ad : "yes" ,
      verify : "no" ,
      tell : "09117818389" ,
      phone : "01154252393" ,
      insta : "@mohammad" ,
      website : "www.mijob.ir"
    },
    {
      title : "111111" ,
      ad : "yes" ,
      verify : "no" ,
      tell : "09117818389" ,
      phone : "01154252393" ,
      insta : "@mohammad" ,
      website : "www.mijob.ir"
    },
    {
      title : "111111" ,
      ad : "yes" ,
      verify : "no" ,
      tell : "09117818389" ,
      phone : "01154252393" ,
      insta : "@mohammad" ,
      website : "www.mijob.ir"
    },
    {
      title : "111111" ,
      ad : "yes" ,
      verify : "no" ,
      tell : "09117818389" ,
      phone : "01154252393" ,
      insta : "@mohammad" ,
      website : "www.mijob.ir"
    },
    {
      title : "111111" ,
      ad : "yes" ,
      verify : "no" ,
      tell : "09117818389" ,
      phone : "01154252393" ,
      insta : "@mohammad" ,
      website : "www.mijob.ir"
    },
    {
      title : "111111" ,
      ad : "yes" ,
      verify : "no" ,
      tell : "09117818389" ,
      phone : "01154252393" ,
      insta : "@mohammad" ,
      website : "www.mijob.ir"
    },
    {
      title : "111111" ,
      ad : "yes" ,
      verify : "no" ,
      tell : "09117818389" ,
      phone : "01154252393" ,
      insta : "@mohammad" ,
      website : "www.mijob.ir"
    },
    {
      title : "111111" ,
      ad : "yes" ,
      verify : "no" ,
      tell : "09117818389" ,
      phone : "01154252393" ,
      insta : "@mohammad" ,
      website : "www.mijob.ir"
    },
    {
      title : "111111" ,
      ad : "yes" ,
      verify : "no" ,
      tell : "09117818389" ,
      phone : "01154252393" ,
      insta : "@mohammad" ,
      website : "www.mijob.ir"
    },
    {
      title : "111111" ,
      ad : "yes" ,
      verify : "no" ,
      tell : "09117818389" ,
      phone : "01154252393" ,
      insta : "@mohammad" ,
      website : "www.mijob.ir"
    }
    
  ]

  return (

    <div className="flex w-full p-10 h-screen">

        <div className="grid  justify-center w-5/6 border-2 border-gray-500 m-2">
            <h1 className="w-full  bg-slate-600">left Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta illum debitis voluptates harum voluptas nulla dolore cum? Sit, nisi doloribus pariatur ad, modi, repellendus mollitia eligendi quis ut eius quidem.</h1>
           
           <ListCardPhone>

              { data.map((data)=>
                  <CardPhone 
                    data = {data}
                  />
            )}

           </ListCardPhone>
        </div>

        <div className="flex justify-center w-1/6 border-2 border-gray-500 m-2 p-2">
            <h1>right section</h1>
        </div>
        
    </div>

  )
}
