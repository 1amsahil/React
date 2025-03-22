import "./WelcomeMessage.css"

export default function WelcomeMessage({onGetPost}) {
  return (
    <div className="welcome-message" >
        
        <h1>There are no posts</h1>

        <button 
        type="button" 
        onClick={onGetPost}
        className="btn btn-primary get-btn" >Get Posts From Server</button>

    </div>
  )
}
