import { createContext, useReducer, useState, useEffect } from "react"

// Create Context (Contract of Data)
export const ContextPostList = createContext(
  {
    postData : [],
    fetching : false,
    addPost : () => {},
    deletePost : () => {},
  }
);

// Reducer
const Reducer = (currPostData, action) =>
{
  let newPostData = currPostData;

  if(action.type === "ADD_POST") {
    newPostData = [ action.payload, ...currPostData];
  }

  else if(action.type === "ADD_INITIAL_POSTS") {
    newPostData = action.payload.posts;
  }

  else if(action.type === "DELETE_POST") {
    newPostData = currPostData.filter( (post) => (post.id !== action.payload.id ? post: null ))
  }

  return newPostData;
}

// PostListContainer
const PostListContainer = ({children}) => {

  // UseReducer
  const [postData ,dispatcher ] = useReducer(Reducer, [] );

  // Add Function
  const addPost = (post) => {
    
    console.log(post);

    dispatcher(
    {
      type : "ADD_POST",
      payload : post
    })
  }

  // Add Initial Function
  const addInitialPosts = (posts) => {
    dispatcher(
    {
      type : "ADD_INITIAL_POSTS",
      payload :{ 
        posts : posts,
      }
    })
  }

  // Delete Function
  const deletePost = (id) => {

    let deletePostObj = 
    {
      type : "DELETE_POST",
      payload : {id}
    }

    dispatcher(deletePostObj  );
  
  }

    
  const [fetching, setFetching] = useState(false);

  // useEffect
  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true);
    
    fetch("https://dummyjson.com/posts", {signal})
    .then( res => res.json() )
    .then( (data) => {
      addInitialPosts(data.posts);

      setFetching(false);
    })
    
    return () => {
      console.log("Cleaning up useEffect");
      controller.abort();
    }

  } , []);



  
  return (
        <ContextPostList.Provider value = { {postData, fetching, addPost, deletePost} }>
          {children}
        </ContextPostList.Provider>
    )
};

export default PostListContainer;