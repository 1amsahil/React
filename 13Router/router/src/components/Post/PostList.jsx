import Post from "./Post";
import WelcomeMessage from "../WelcomeMessage/WelcomeMessage";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useLoaderData } from "react-router-dom";


export default function PostList() {

  // const {postData,fetching} = useContext(ContextPostList);
  const postData = useLoaderData();

 
  return (
    <div>
      {/* {fetching && <LoadingSpinner/>} */}

      {/* {!fetching && postData.length === 0 && <WelcomeMessage/>}  */}
      { postData.length === 0 && <WelcomeMessage/>} 
      
      {/* {!fetching && postData.map( item => <Post item = {item} key={item.id}/> */}
      { postData.map( item => <Post item = {item} key={item.id}/>
        )
      } 
    </div>
  )
};


export const  PostLoader = async () => {

  return await fetch("https://dummyjson.com/posts")
  .then( res => res.json() )
  .then( (data) => {
    return data.posts;
  });

};
