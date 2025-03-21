import { createContext, useReducer } from "react"

// Create Context (Contract of Data)
export const ContextPostList = createContext(
  {
    postData : [],
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

  else if(action.type === "DELETE_POST") {

    newPostData = currPostData.filter( (post) => (post.id !== action.payload.id ? post: null ))

  }

  return newPostData;
}

// PostListContainer
const PostListContainer = ({children}) => {

  // UseReducer
  const [postData ,dispatcher ] = useReducer(Reducer, DEFAULT_POST_LIST );

  // Add Function
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(userId, postTitle, postBody, reactions, tags);

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

  // Delete Function
  const deletePost = (id) => {

    let DP = 
    {
      type : "DELETE_POST",
      payload : {id}
    }

    dispatcher(DP);
  }

  return (
        <ContextPostList.Provider value = { {postData,  addPost,  deletePost} }>
          {children}
        </ContextPostList.Provider>
    )
};


// Dummy Data

const DEFAULT_POST_LIST = [

  {
    id : "1",
    title : "Going to Dubai",
    body : "Hello Guys , I am going to Dubai for my vacations",
    reactions : 5,
    userId : "user@161",
    tags : ["Vaccation", "Dubai", "Coding"],
  },

  {
    id : "2",
    title : "Final Year result out",
    body : "After lot of hardwork got 74.4%, Alhamdulillah",
    reactions : 45,
    userId : "user@161",
    tags : ["Btech", "Result", ],
  } 
]
export default PostListContainer;