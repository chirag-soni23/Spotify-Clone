import React from 'react'
import Login from './pages/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

