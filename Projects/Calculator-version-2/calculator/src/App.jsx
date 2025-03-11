import styles from './App.module.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
import { useState } from 'react'

function App() {

  let [calVal, setCalVal] = useState("")

  let onButtonClick = (event) => {

    let inputVal = event.target.value;

    if(inputVal === "C"){

      setCalVal("");

    }

    else if(inputVal === "="){
      const result = eval (calVal);
      setCalVal(result);

      console.log(result);
    }

    else{

      const newVal = calVal + inputVal;
      setCalVal(newVal);

      console.log(newVal);
    }
  }

  return (
    <div className={styles.calculator}>

      <Display displayVal = {calVal} />
      <ButtonContainer handleOnBtnClick = {onButtonClick}/>

    </div>
  )
}

export default App
