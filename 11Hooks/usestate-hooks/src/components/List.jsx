import { useState } from "react"
import Item from "./Item"
import styles from "./List.module.css"

export default function List({itemList})
{

    let [activeList , setActiveList] = useState([]);

    // OnClick Handler 
    let OnClick = (item,event) =>
    {
        console.log("Product : ",item);

        let newActiveList = [...activeList,item];
        setActiveList(newActiveList);
    }

    return <>  
        <ul className={styles.ulist} >

            {itemList.map( item => 
            <Item item = {item} 
            key = {item}  
            bought = {activeList.includes(item)} 
            HandleOnClick = { (event) => OnClick(item,event)} 

            /> )}
        
        </ul>
    </>
}