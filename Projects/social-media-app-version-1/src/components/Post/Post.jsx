export default function Post(  {data}  ) {
  return (
  <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.body}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
</div>
  )

}