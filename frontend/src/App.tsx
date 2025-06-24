import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import BlogsPage from './pages/BlogsPage'
import type { SignupInput } from '@aman108/medium-project-zod-types'
import { IndividualBlog } from './pages/Blog'
import { BlogCard } from './components/BlogCard'
import { AppBar } from './components/AppBar'
import {CreateBlog} from './pages/CreateBlog'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <AppBar/>
      <Routes>
    
        <Route path= "/signup" element ={<SignUpPage/>}/>
        <Route path ="/signin" element = {<SignInPage/>}/>
        <Route path='/blogspage' element ={<BlogsPage/>}/>
        <Route path= "/blog/:id" element ={<IndividualBlog/>}/>
        <Route path= "/createblog" element= {<CreateBlog/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
