import { useContext } from "react";
import "./Post.css"
import { TiDelete } from "react-icons/ti";
import { ContextPostList } from "../../store/Post-list-store";

export default function Post(  {data}  ) {

  const {deletePost} = useContext(ContextPostList)

  return (
  <div className="card post-card" style={{width: "25rem"}}>
    <div className="card-body">

        <h5 className="card-title">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={ () => deletePost(data.id)}>
            <TiDelete />
          </span>
          {data.title}
        </h5>

        <p className="card-text">{data.body}</p>

        {
          data.tags.map((tag) => <span className="badge text-bg-primary hashtag" key={tag} > {tag} </span> )
        }

    </div>

    <div className="reactions">
        Total Reactions : {data.reactions}
    </div>

</div>
  )

}