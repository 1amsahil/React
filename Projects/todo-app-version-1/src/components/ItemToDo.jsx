function ItemToDo({sub, date })
{
    return <div className="row todo-item">  
    <div className="col-5">
      {sub}
    </div>
    <div className="col-4">
      {date}
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-danger">Delete</button>
    </div>
  </div>
}

export default ItemToDo