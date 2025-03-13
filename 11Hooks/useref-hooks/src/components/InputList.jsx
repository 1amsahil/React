import { useRef } from "react";

export default function InputList()
{

    let textVal = useRef();
    let dateVal = useRef();

    let handleOnSubmit = (event) =>
    {
        event.preventDefault();
        console.log("Text :",textVal.current.value,"| Date :",dateVal.current.value);

        textVal.current.value = "";
        dateVal.current.value = "";
    }

    return <>
        <form onSubmit={handleOnSubmit} >

            <input type="text" placeholder="Enter Text"  ref={textVal}></input>
            <input type="date" ref={dateVal} ></input>

            <button type="submit">submit</button>
        </form>
    </>
}