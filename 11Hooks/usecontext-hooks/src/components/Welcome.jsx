import { useContext } from "react"
import { ToDoItems } from "../store/todo-item-store"
import styles from "./Welcome.module.css"


export default function Welcome()
{
    const Context = useContext(ToDoItems);
    let todoItems = Context.todoItems
    return <> { todoItems.length == 0 && <p className={styles.msg}>No Task, Enjoy Your Day!</p>}  </>
        
}