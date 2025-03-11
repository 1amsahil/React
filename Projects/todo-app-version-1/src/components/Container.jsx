import styles from "./Container.module.css"

export default function Container(props)
{
    return <>
        <div className={styles.container} >

            <h2 className={styles.heading}>TO DO App</h2>
            {props.children}
            
        </div>
    </>
}