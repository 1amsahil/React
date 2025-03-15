import styles from "./SkillList.module.css"

export default function SkillList({skillname, percentage})
{
    return <div className={styles["list-container"]} >
        <h3>{skillname}</h3>

        <div className={styles["progress-bar-container"]} >
               <div className={styles["progress-bar"]} ></div>
        </div>
        
        <p>{percentage}</p>
    </div>
}