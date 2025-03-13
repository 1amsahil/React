import styles from "./NoItem.module.css"

export default function NoItem({list})
{
    return <div>
        { (list.length === 0 ?<h2 className = {styles.heading} >No Items Added</h2> : null) }
    </div>
         
}