import { useReducer, useState } from 'react'
import './App.css'
import InputItems from "./components/InputItems"
import Display from './components/Display';


// Reducer( initial state , action/dispatcher) :- Pure Function
const listReducer = (currlist, action) => {
  let newList = currlist;
 
  if(action.type === "NEW_ITEM")
  {
      newList = [...currlist, action.payload.value];
  }

  return newList;
}

function App() {

  // const [list , setList] = useState([]);

  // UseReducer
  const [list , dispatcher ] = useReducer(listReducer,["Buy Fruits"]);

  // Add Function
  const onAdd = (value) => {

    const valueList = 
    {
      type:"NEW_ITEM",
      payload : { value }

    };

    // Disptacher
    dispatcher(valueList);
  }


  // By Using useState
  // const onAdd = (value) =>
  // {
  //   const newList = [...list,value];
  //   setList(newList);
  // }

  return (
    <>
        <InputItems handleOnAdd={onAdd} />
        <Display list={list} />
    </>
  )
}

export default App
