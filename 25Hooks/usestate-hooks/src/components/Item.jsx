import styles from "./Item.module.css"

export default function Item({item, bought, HandleOnClick})
{
    return <>
    <li className={`${styles.list} ${bought && styles.bgcolor}`} >
         {item} 
         <button value={item} className={`${styles.button} ${bought && styles.colorchange}`} onClick={HandleOnClick} >{((bought)?"Added":"Add")}</button> 
    </li>
    </>
}