import { useState } from "react";
import AddTask from "./components/AddTask";
import Container from "./components/Container"
import Welcome from "./components/Welcome";
import { ToDoItems } from "./store/todo-item-store";
import ItemList from "./components/ItemList";

function App()
{

  const [todoItems, setTodoItems] = useState([{task:"Learn DSA", date:"2025-02-01"},
    {task:"Development", date:"2025-03-01"},
    {task:"Edit Resume", date:"2025-04-01"},
  ]);

  function OnAdd(itemName, itemDate)
  {
      if(itemName)
      {
        setTodoItems((currVal) => [ ...currVal, {task:itemName, date:itemDate}]);
      }
      else
      {
        alert("Add a Task")
      }
  };

  function OnDelete(task)
  { 
    let newTodoItems = todoItems.filter( (item) => item.task !== task );
    setTodoItems(newTodoItems);
  };

 
  return <>

    <ToDoItems.Provider value = { {todoItems, OnAdd, OnDelete} }>
    
      <Container>

        <AddTask />
        <Welcome /> 
        <ItemList />
        <AddTask />
 
      </Container>

    </ToDoItems.Provider>

  </>
}

export default App;