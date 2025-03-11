import AddTask from "./components/AddTask";
import Container from "./components/Container"
import Items from "./components/Items";

function App()
{

  let data =
  [
    {task :"Learn DSA", date: "22-02-2025"},  
    {task :"Make Projects", date: "23-02-2025"},  
    {task :"Edit Resume", date: "24-02-2025"}  
  ]
  

  return <>
      <Container>

        <AddTask/>
        {data.map( (event) => <Items task = {event.task} date = {event.date} key={event.task} />  )}  
        
      </Container>
  </>
}

export default App;