import styles from "./App.module.css"
import { useState } from "react";
import Container from "./components/Container"
import InputComponent from "./components/InputComponent"
import NoItem from "./components/NoItem";
import Item from "./components/Item";

function App() {

  // Use State Hooks

  //// let addItem = useState("Ghee");
  //// let newAddItem = addItem[0];
  //// let setNewItem = addItem[1];
  
  // Use State Hook (other initialisation)
  let [itemList, setNewItem] = useState(['Rice','Oil','Salt','Tea']);

  // OnKeyDown Handler
  const OnKeyDown = (event) =>
  {
    if(event.key === "Enter")
    {
      let newItemList = [...itemList, event.target.value];
      
      setNewItem(newItemList);
    }
    console.log(event);
  };

  // OnClick Handler 

  let OnClick = (event)=>
  {
      console.log(event.target.value);
  }

  return (
      <Container>
        <h2 className={styles.heading}>Grocery</h2>

        <InputComponent HandleOnkeyDown={OnKeyDown} />
        <NoItem list = {itemList} />
        <ul className={styles.ulist}>
          {itemList.map( item => <Item item={item} HandleOnClick={OnClick} key={item}  /> )}
        </ul>

      </Container>
  )
}

export default App
