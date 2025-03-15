import styles from "./Heading.module.css"

export default function Heading({headingname})

{
    return <h2 className={styles['heading']}>{headingname}</h2>
}