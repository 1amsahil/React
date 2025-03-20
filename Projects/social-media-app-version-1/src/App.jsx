import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Sidebar from "./components/Sidebar/Sidebar"
import CreatePost from "./components/CreatePost/CreatePost"
import PostList from "./components/Post/PostList"
import PostListContainer  from "./store/Post-list-store"

import "./App.css"
import { useState } from "react"

function App() {

  const [selectedTab, setSelectedTab] = useState("Home")

  return (

    <PostListContainer>

      <div className="app-container">  
        
        <Sidebar tab={selectedTab} HandleSelectedTab={setSelectedTab}  /> 

        <div className="content" >  
          <Header/>
          {selectedTab === "Home" ? <PostList/> : <CreatePost/> }
          <Footer/>
        </div>

      </div>

    </PostListContainer>
  )
}

export default App
