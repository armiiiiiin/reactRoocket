import Main from "./component/home/Main"
import Footer from "./component/layout/Footer"
import Header from "./component/layout/Header"


function Home() {



let name = 'ali'


    return(
        
        <div>
            <Header/>
            <Main/>
            <h1>Hello Mohammad , my first component and file</h1>
            <h2>your name is : {name} </h2>
            <Footer/>
        </div>
        
        
    )
}

export default Home