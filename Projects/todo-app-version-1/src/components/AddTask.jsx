import { useState } from "react"
import styles from "./AddTask.module.css"

function AddTask ({HandleOnAdd})
{
    const [taskName, setTaskName] = useState();
    const [dueDate, setDueDate] = useState();

    const OnTaskName = (event) =>
    {
        setTaskName(event.target.value);
    }
    
    const OnDueDate = (event) =>
    {
        setDueDate(event.target.value);    
    }

    const handleOnAddButton = () =>
    {
        HandleOnAdd(taskName,dueDate)
        setTaskName("");
        setDueDate("");
    }


    return<>
        <div className={styles.addTaskContainer}>

            <input type="text" placeholder = "Enter Task" value={taskName} className={styles.addTask} onChange={OnTaskName} ></input>
            <input type="date" value={dueDate} className={styles.addDate} onChange={OnDueDate} ></input>

            <button className={styles.addBtn} onClick={handleOnAddButton} >Add</button>

        </div>
    </>
}

export default AddTask 