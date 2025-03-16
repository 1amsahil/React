import styles from "./Footer.module.css"

export default function Footer()
{ 
    const year = new Date().getFullYear();

    return <div className={styles["footer-container"]}>
        <p className={styles["footer-info"]}>
            &copy; {year}  Mohd Sahil <br/> 
            All rights reserved.
        </p>
    </div>
}