import { useContext } from "react"
import { ToDoItems } from "../store/todo-item-store"
import Items from "./Items"

export default function ItemList()
{
    const Context = useContext(ToDoItems);
    let todoItems = Context.todoItems;

    return <>
        { todoItems.map( (event) => 
        <Items task = {event.task} date = {event.date} key = {event.task} />
          )}  
        
    </>
}