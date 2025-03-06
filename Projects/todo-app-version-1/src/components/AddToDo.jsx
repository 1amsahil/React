function AddToDo ()
{
    return <div className="row">  
    <div className="col-5">
      <input type="text" placeholder="Enter Text" />
    </div>
    <div className="col-4">
      <input type="date" />
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-success">Add</button>
    </div>
  </div>
}

export default AddToDo