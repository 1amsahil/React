import styles from "./List.module.css"

export default function List( {itemname} )
{
    const buyButton = (e, itemname) =>
    {
        console.log(e);
        console.log(itemname,"is being Purchased")
    }

    return <>
        <li className={styles.list} >{itemname} <button className={styles.button} onClick = { (e)=>buyButton(e, itemname)}> Buy </button> </li>
        </>
}