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
    const reactions = {likes : reactionsElement.current.value,}
    const tags = tagsElement.current.value.split(" ");

    addPost(userId, postTitle, postBody, reactions, tags);

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    }

  return <form className="post-form" onSubmit={handleonSubmit} >

    <div className="mb-3">
      <label htmlFor="id" className="form-label">User-Id</label>
      <input 
      type="text" 
      className="form-control" 
      id="id" 
      ref={userIdElement}
      autoComplete="off"
      placeholder="Enter your User-Id" />
    </div>

    <div className="mb-3">
      <label htmlFor="title" className="form-label">Enter Title</label>
      <input 
      type="text" 
      className="form-control" 
      id="title" 
      ref={postTitleElement}
      autoComplete="off"
      placeholder="How are you feeling today..." />

    </div>
    
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Content</label>
      <textarea 
      type="text" 
      className="form-control" 
      id="body" 
      ref={postBodyElement}
      autoComplete="off"
      placeholder="Tell us about more" 
      rows={3} />
    </div>

    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Reactions</label>
      <input 
      type="text" 
      className="form-control" 
      id="reactions" 
      autoComplete="off"
      ref={reactionsElement}/>
    </div>

    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Tags</label>
      <input 
      type="text" 
      className="form-control" 
      id="tags" placeholder="please enter tags using space" 
      autoComplete="off"
      ref={tagsElement}/>
    </div>



    <button type="submit" className="btn btn-primary">Post</button>
  </form>

}
