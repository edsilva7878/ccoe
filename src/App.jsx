import { Routes, Route } from 'react-router-dom'

import './App.css'
import Home from "./pages/home"
import Cloud from './pages/cloud'
import CCOE from './pages/ccoe'
import Services from './pages/services'
import Info from './pages/info'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cloud' element={<Cloud/>} />
        <Route path='/ccoe' element={<CCOE/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/info' element={<Info/>} />
      </Routes>
    </div>
  )
}

export default App
