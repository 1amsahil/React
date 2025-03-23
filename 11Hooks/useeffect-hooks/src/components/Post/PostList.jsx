import { ContextPostList } from "../../store/Post-list-store";
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";


export default function PostList() {

  const {postData,addInitialPosts} = useContext(ContextPostList);
  const [fetching, setFetching] = useState(false);

  // useEffect
  useEffect(() => {

    setFetching(true);
    
    fetch("https://dummyjson.com/posts")
    .then( res => res.json() )
    .then( (data) => {
      addInitialPosts(data.posts);

      setFetching(false);
    })
    
  } , [])

  return (
    <div>
      {fetching && <LoadingSpinner/>}
      {!fetching && postData.length === 0 && <WelcomeMessage/>} 
      {!fetching && postData.map( item => <Post item = {item} key={item.id}/>
        // {console.log(data)} 
        )
      } 
    </div>
  )
}
