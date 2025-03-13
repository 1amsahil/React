import { useContext } from "react";
import styles from "./Items.module.css"
import { MdDeleteForever } from "react-icons/md";
import { ToDoItems } from "../store/todo-item-store";

function Items({task, date})
{
    const {OnDelete} = useContext(ToDoItems);

    function HandleOnDelete()
    {
        OnDelete(task);
    }

    return <>
        <div className={styles.items}>

            <span className={styles.task}>
                {task} 
            </span>
            <span className={styles.date}>
                {date} 
            </span>

            <button className={styles.deleteBtn} onClick={HandleOnDelete} > <MdDeleteForever/> Delete</button>
        </div>

    </>
}

export default Items;