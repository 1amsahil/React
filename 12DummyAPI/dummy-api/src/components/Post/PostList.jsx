import { ContextPostList } from "../../store/Post-list-store";
import { useContext } from "react";
import Post from "./Post";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";


export default function PostList() {

  const {postData} = useContext(ContextPostList)
  const {addInitialPosts} = useContext(ContextPostList)
  
  const handleGetPost = () => {
    console.log("Get Post Clicked");
    fetch("https://dummyjson.com/posts")
    .then( res => res.json() )
    .then( (data) => {
      addInitialPosts(data.posts)
    } )
  }

  return (
    <div>
      {postData.length === 0 && <WelcomeMessage onGetPost = {handleGetPost} />} 
      {postData.map( item => <Post item = {item} key={item.id}/>
        // {console.log(data)} 
        )
      } 
    </div>
  )
}
