import styles from "./Items.module.css"

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

            <button className={styles.deleteBtn} onClick={() => HandleOnDelete(task)} >Delete</button>
        </div>

    </>
}

export default Items;