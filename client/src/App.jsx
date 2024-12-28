import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from "./pages/About"
import Contact from "./pages/Contact"
import SeaCucumber from "./pages/SeaCucumber"
import Services from "./pages/Services"
import NavBar from "./components/NavBar"
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <div className=' pt-4 px-4 sm:px-10 md:px-14 lg:px-8 min-h-screen'>
      <Header/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/seaCucumber' element={<SeaCucumber/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App