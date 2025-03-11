import styles from "./Items.module.css"

function Items({task, date})
{
    return <>
        <div className={styles.items}  >
            <span className={styles.task}>
                {task} 
            </span>
            <span className={styles.date}>
                {date} 
            </span>

            <button className={styles.deleteBtn}>Delete</button>
        </div>

    </>
}

export default Items;