import styles from "./AddTask.module.css"

function AddTask ()
{
    return<>
        <div className={styles.addTaskContainer}>

            <input type="text" placeholder = "Enter Task" className={styles.addTask} ></input>
            <input type="date" className={styles.addDate} ></input>

            <button className={styles.addBtn} >Add</button>

        </div>
    </>
}

export default AddTask