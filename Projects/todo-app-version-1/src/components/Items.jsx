import styles from "./Items.module.css"
import { MdDeleteForever } from "react-icons/md";

function Items({task, date, HandleOnDelete})
{
    return <>
        <div className={styles.items}  >
            <span className={styles.task}>
                {task} 
            </span>
            <span className={styles.date}>
                {date} 
            </span>

            <button className={styles.deleteBtn} onClick={() => HandleOnDelete(task)} > <MdDeleteForever/> Delete</button>
        </div>

    </>
}

export default Items;