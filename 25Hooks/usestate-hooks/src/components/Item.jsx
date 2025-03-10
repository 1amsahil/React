import styles from "./Item.module.css"

export default function Item({item, HandleOnClick})
{
    return <>
    <li className={styles.list} >
         {item} 
         <button value={item} className={styles.button} onClick={HandleOnClick} >add</button> 
    </li>
    </>
}