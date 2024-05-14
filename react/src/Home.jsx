import Corse from "./component/home/Corse"
import Main from "./component/home/Main"
import Footer from "./component/layout/Footer"
import Header from "./component/layout/Header"


function Home() {



let name = 'ali'



    return(
        
        <div>
            <Header/>

            <Main/>
             
            <h3>Hello Mohammad , my first component and file</h3>

            <h2>your name is : {name} </h2>

            <Corse title="hi" price="500"/>
         



            
            <Footer/>
        </div>
        
        
    )
}

export default Home