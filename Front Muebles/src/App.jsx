import { useState } from 'react'
import './App.css'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/Home'
import { ROUTES } from './Helpers/RoutesPath';
import Nav from './Components/Nav/Nav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Nav/>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home/>} />
        </Routes> 
        {/* <Link to="/Home">Home</Link> */}
    </>
  )
}

export default App
