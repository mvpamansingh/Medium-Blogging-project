import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import BlogsPage from './pages/BlogsPage'
import type { SignupInput } from '@aman108/medium-project-zod-types'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path= "/signup" element ={<SignUpPage/>}/>
        <Route path ="/signin" element = {<SignInPage/>}/>
        <Route path='/blogspage' element ={<BlogsPage/>}/>
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
