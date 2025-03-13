import styles from "./ItemInput.module.css" 

function ItemInput({HandleOnChange})
{

    return <input 
    type="text" 
    placeholder="Enter Item here" 
    className ={styles.input}
    onChange={ HandleOnChange }
    ></input>
}

export default ItemInput;