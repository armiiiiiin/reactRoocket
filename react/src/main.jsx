import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import App from './App'
import Main from './component/home/Main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    < App />
    < Home />
  </React.StrictMode>,
)
