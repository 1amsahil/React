
import { Form, redirect } from "react-router-dom";
import "./CreatePost.css"


export default function CreatePost() {

  // const {addPost} = useContext();

  return <Form method="POST" className="post-form" >

    <div className="mb-3">
      <label htmlFor="id" className="form-label">User-Id</label>
      <input 
      type="text" 
      className="form-control" 
      id="id" 
      name = "userId"
      placeholder="Enter your User-Id" />
    </div>

    <div className="mb-3">
      <label htmlFor="title" className="form-label">Enter Title</label>
      <input 
      type="text" 
      className="form-control" 
      id="title" 
      name = "title"
      placeholder="How are you feeling today..." />
    </div>
    
    <div className="mb-3">
      <label htmlFor="body" className="form-label">Content</label>
      <textarea 
      type="text" 
      className="form-control" 
      id="body" 
      name = "body"
      placeholder="Tell us about more" 
      rows={3} />
    </div>

    <div className="mb-3">
      <label htmlFor="reactions" className="form-label">Reactions</label>
      <input 
      type="text" 
      className="form-control" 
      id="reactions" 
      name = "reactions"/>
    </div>

    <div className="mb-3">
      <label htmlFor="tags" className="form-label">Tags</label>
      <input 
      type="text" 
      className="form-control" 
      id="tags" placeholder="please enter tags using space" 
      name = "tags"/>
    </div>

    <button type="submit" className="btn btn-primary">Post</button>
  </Form>
}

export const createPostAction = async (data) => {

  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");   

  console.log(postData);

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers : {'Content-Type': 'application/json' },
    body: JSON.stringify( postData )  
  })

  .then((res) => res.json())
  .then(post => { console.log(post) });

  return redirect("/")

}
