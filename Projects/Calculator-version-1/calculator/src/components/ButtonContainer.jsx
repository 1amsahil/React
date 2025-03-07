import styles from "../components/ButtonContainer.module.css";

export default function ButtonContainer() {

  const buttonNames = ['1','2','3','C','+','4','5','6','*','-','7','8','9','/','=','0'];

  return <div className={styles.buttonContainer}>          
          {buttonNames.map(btn => <button className={styles.button} key={btn} >{btn}</button> )}
        </div>

}
