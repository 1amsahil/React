import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Sidebar from "./components/Sidebar/Sidebar"
import CreatePost from "./components/CreatePost/CreatePost"
import PostList from "./components/Post/PostList"
import PostListContainer  from "./store/Post-list-store"

import "./App.css"
import { useState } from "react"
import { Outlet } from "react-router-dom"

function App() {

  return (

    <PostListContainer>

      <div className="app-container">  
        
        <Sidebar/> 

        <div className="content" >  
          <Header/>
          <Outlet/>
          <Footer/>
        </div>

      </div>

    </PostListContainer>
  )
}

export default App
