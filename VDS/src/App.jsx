import { useState } from 'react'
import Home from './UI/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './UI/Services'
import Aboutus from './UI/Aboutus'
import Contactus from './UI/Contactus'
import Services3 from './UI/Services3'
import Bookappointment from './UI/Bookappointment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/servicedetails" element={<Services3/>}/>
      <Route path="/bookappointment" element={<Bookappointment/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
