import { createContext, useReducer } from "react"

// Create Context (Contract of Data)
export const ContextPostList = createContext(
  {
    postData : [],
    addPost : () => {},
    addInitialPosts : () => {},
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
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    
    dispatcher(
    {
      type : "ADD_POST",
      payload :
      
      { id : `${Date.now()}-${Math.random()}`,
        title : postTitle,
        body : postBody,
        reactions : reactions,
        userId : userId,
        tags : tags,
      }
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

  return (
        <ContextPostList.Provider value = { {postData,  addPost, addInitialPosts, deletePost} }>
          {children}
        </ContextPostList.Provider>
    )
};

export default PostListContainer;