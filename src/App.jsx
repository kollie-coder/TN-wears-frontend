import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import { HomePage, AuthPage, AccountVerify, ForgetPassword, NewPassword } from './pages';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/auth' element={<AuthPage/>} />
        <Route path='/verification' element={<AccountVerify/>} />
        <Route path='/forgot-password' element={<ForgetPassword/>} />
        <Route path='/new-password' element={<NewPassword/>} />
      </Routes>
    </>
  )
}

export default App
