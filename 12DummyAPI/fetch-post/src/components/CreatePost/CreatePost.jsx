import { useContext, useRef } from "react"
import { ContextPostList } from "../../store/Post-list-store";
import "./CreatePost.css"

export default function CreatePost() {

  const {addPost} = useContext(ContextPostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleonSubmit = (event) =>
  {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");


    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers : {'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId : userId,
        title :postTitle,
        body : postBody,
        reactions : reactions,
        tags : tags,
      }),
      
    }).then((res) => res.json())
    .then(post => addPost(post) );

    // userIdElement.current.value = "";
    // postTitleElement.current.value = "";
    // postBodyElement.current.value = "";
    // reactionsElement.current.value = "";
    // tagsElement.current.value = "";

    }

  return <form className="post-form" onSubmit={handleonSubmit} >

    <div className="mb-3">
      <label htmlFor="id" className="form-label">User-Id</label>
      <input 
      type="text" 
      className="form-control" 
      id="id" 
      ref={userIdElement}
      placeholder="Enter your User-Id" />
    </div>

    <div className="mb-3">
      <label htmlFor="title" className="form-label">Enter Title</label>
      <input 
      type="text" 
      className="form-control" 
      id="title" 
      ref={postTitleElement}
      placeholder="How are you feeling today..." />

    </div>
    
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Content</label>
      <textarea 
      type="text" 
      className="form-control" 
      id="body" 
      ref={postBodyElement}
      placeholder="Tell us about more" 
      rows={3} />
    </div>

    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Reactions</label>
      <input 
      type="text" 
      className="form-control" 
      id="reactions" 
      ref={reactionsElement}/>
    </div>

    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Tags</label>
      <input 
      type="text" 
      className="form-control" 
      id="tags" placeholder="please enter tags using space" 
      ref={tagsElement}/>
    </div>



    <button type="submit" className="btn btn-primary">Post</button>
  </form>

}
