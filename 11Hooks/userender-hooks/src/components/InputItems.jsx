import { useRef } from "react"

export default function InputItems({handleOnAdd})
{
    const inputValue = useRef()

    const handleOnClick = (event) =>
    {
        event.preventDefault();

        handleOnAdd(inputValue.current.value);
        inputValue.current.value = ""
    }

    return<>
        <input type="text" placeholder="enter text" name="list" ref={inputValue} ></input>
        <button onClick = {handleOnClick} >Add</button>
    </>
}