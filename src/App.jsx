
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Portfolio from './Components/Portfolio/Portfolio'

import Services from './Components/Services/Services'

function App() {
 
  return (
    <>
    <Navbar/> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
    </Routes>
       
     {/* <Home/>  
     <Services/> 
     <About/>  
     <Portfolio/> */} 
    </>
  )
}

export default App
