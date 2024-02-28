import { useState } from 'react'
import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import { ROUTES } from './Helpers/RoutesPath';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Seccion from './Components/Seccion/Seccion';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
        <div className='min-h-40 pt-28 pb-16 bg-gray-200'>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home/>} />
            <Route path="/Seccion/:id/:itemName" element={<Seccion/>} />
          </Routes> 
        </div>
        <Footer/>
    </>
  )
}

export default App
