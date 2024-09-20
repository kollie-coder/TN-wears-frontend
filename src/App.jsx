import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage, AuthPage } from './pages';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/auth' element={<AuthPage/>} />
      </Routes>
    </>
  )
}

export default App
