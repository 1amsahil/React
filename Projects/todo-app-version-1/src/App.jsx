import { useState } from "react";
import AddTask from "./components/AddTask";
import Container from "./components/Container"
import Items from "./components/Items";
import Welcome from "./components/Welcome";

function App()
{

  const [todoItems, setTodoItems] = useState([{task:"Learn DSA", date:"2025-02-01"},
    {task:"Development", date:"2025-03-01"},
    {task:"Edit Resume", date:"2025-04-01"},
  ]);

  function OnAdd(itemName, itemDate)
  {
    if(itemName && true )
    {
      setTodoItems((currVal) => [ ...currVal, {task:itemName, date:itemDate}]);
    }
    else
    {
      alert("Add a Task")
    }
  }

  function OnDelete(task)
  {
    let newTodoItems = todoItems.filter( (item) => item.task !== task );
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