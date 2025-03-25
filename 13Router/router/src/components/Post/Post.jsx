import { useContext } from "react";
import "./Post.css"
import { TiDelete } from "react-icons/ti";
import { ContextPostList } from "../../store/Post-list-store";

export default function Post({item}) {

  const {deletePost} = useContext(ContextPostList)

  return (
  <div className="card post-card" style={{width: "25rem"}}>

    <div className="card-body">

        <h5 className="card-title">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={ () => deletePost(item.id)}>
            <TiDelete />
          </span>
          {item.title}
        </h5>

        <p className="card-text">{item.body}</p>
        {
          item.tags.map( (tag) => <span className="badge text-bg-primary hashtag" key = {tag}> {tag} </span>)
        }

    </div>

    <div className="reactions">
        Total Reactions : {item.reactions.likes}
    </div>

</div>
  )

}