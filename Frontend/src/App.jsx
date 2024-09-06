import React from 'react'
import Login from './pages/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import { UserData } from './context/User'
import Loading from './components/Loading'
import Admin from './pages/Admin'
import Playlist from './pages/Playlist'
import Album from './pages/Album'

function App() {
  const {loading,user,isAuth} = UserData();
  return (
    <>
    {loading?<Loading/>:
    <BrowserRouter>
    <Routes>
      <Route path='/' element={isAuth?<Home/>:<Login/>}/>
      <Route path='/playlist' element={isAuth?<Playlist user={user}/>:<Login/>}/>
      <Route path='/album/:id' element={isAuth?<Album user={user}/>:<Login/>}/>
      <Route path='/admin' element={isAuth?<Admin/>:<Login/>}/>
      <Route path='/register' element={isAuth?<Home/>:<Register/>}/>
      <Route path='/login' element={isAuth?<Home/>:<Login/>}>
      </Route>
    </Routes>
    </BrowserRouter>}
    </>
  )
}

export default App

