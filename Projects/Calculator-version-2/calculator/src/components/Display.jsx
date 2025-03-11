import styles from "../components/Display.module.css"

function Display({displayVal})
{
    return <input type="text" value = {displayVal} className={styles.display} readOnly />
}

export default Display;