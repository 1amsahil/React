import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Sidebar from "./components/Sidebar/Sidebar"
import CreatePost from "./components/CreatePost/CreatePost"
import Post from "./components/Post/Post"
import PostList from "./components/Post/PostList"

import "./App.css"

function App() {

  return <div className="app-container">

        <Sidebar/> 
        <div className="content" >  
          <Header/>
          <CreatePost/>
          <Post/>
          <Footer/>
        </div>       
    </div>
}

export default App
