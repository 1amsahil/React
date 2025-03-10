import styles from "./InputComponent.module.css" 

function InputComponent ({HandleOnkeyDown})
{
    return <>
        <input 
        type="text" 
        placeholder="Enter Item" 
        className={styles.input}
        onKeyDown={HandleOnkeyDown} ></input>
    </>
}

export default InputComponent;