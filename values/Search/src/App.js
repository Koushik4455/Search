import React from 'react'
import Navbar from './Layout/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './Layout/Footer'
import Values from './Pages/Values'
import Home from './Pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/Home' element={<Home />}/>
        <Route exact path='/Values' element={<Values />}/>

      </Routes>
      <Footer />
      </BrowserRouter>
      {/* <Values /> */}
    </div>
  )
}

export default App