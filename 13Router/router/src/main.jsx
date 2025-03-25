import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider , createBrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import CreatePost from './components/CreatePost/CreatePost.jsx'
import PostList from './components/Post/PostList.jsx'

const router = createBrowserRouter([
  { path : "/home", element : <App/> },
  { path : "/", element : <App/>,
    children : 
    [
      { path : "/", element : <PostList/> },
      { path : "/createpost", element : <CreatePost/> },
    ]
   },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
