import { useState } from "react";
import AddTask from "./components/AddTask";
import Container from "./components/Container"
import Items from "./components/Items";
import Welcome from "./components/Welcome";

function App()
{

  const [todoItems, setTodoItems] = useState([{task:"Learn DSA", date:"2025-02-01"}]);

  function OnAdd(itemName, itemDate)
  {
    if(todoItems.length !== 0)
    {
      let newTodoItems = [...todoItems, {task:itemName, date:itemDate}];
      setTodoItems(newTodoItems);
    }
    else
    {
      alert("Add a Task")
    }
  }

  function OnDelete(task)
  {
    let newTodoItems = todoItems.filter( (item) => item.itemName === task );
    console.log(newTodoItems);
    setTodoItems(newTodoItems);
  }


  return <>
      <Container>
        {todoItems.length == 0 && <Welcome/>}
        
        <AddTask HandleOnAdd={OnAdd} />
        
        { todoItems.map( (event) => <Items task = {event.task} date = {event.date} key = {event.task} HandleOnDelete={OnDelete}  />  )}  
        
      </Container>
  </>
}

export default App;