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
  const newPostData = currPostData;

  if(action.type === "ADD_POST") {
    newPostData = [...postData, data];
  }

  else if(action.type === "DELETE_POST") {
    newPostData = postData.filter( (thisData) => { (data !== thisData ? data : null) })
  }

  return newPostData;
}

// PostListContainer
const PostListContainer = ({children}) => {

  // UseReducer
  const [postData ,dispatcher ] = useReducer(Reducer, DEFAULT_POST_LIST );

  // Add Function
  const addPost = (data) => {
    console.log("Added");

    let AP = 
    {
      type : "ADD_POST",
      payload : {data}
    }

    dispatcher();
  }

  // Delete Function
  const deletePost = (data) => {
    console.log("Deleted");

    let DP = 
    {
      type : "DELETE_POST",
      payload : {data}
    }

    dispatcher();
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
    body : "Hello Guys , I am going to Dubai for my internship",
    reactions : 5,
    userId : "user@161",
    tags : ["intership", "Dubai", "Coding"],
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