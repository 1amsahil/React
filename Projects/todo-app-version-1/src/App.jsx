import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import ItemToDo from "./components/ItemToDo";
import './App.css'

function App()
{
  return <center className="todo-container">

      <AppName/>
        
      <div className="container border container-items">
        <AddToDo/>
        <div className="e-border">
          <ItemToDo sub={"Buy Milk"} date={"04/10/2024"} />
          <ItemToDo sub={"Go To College"} date={"04/10/2024"} />
        </div>
      </div>
  </center>
}

export default App;