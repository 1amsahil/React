import { useSelector } from "react-redux"

export const DisplayCounter = () => {
  
  const counter = useSelector( (store) => store.counter.counterVal)

  return (
    <div>
        <p className="">
        Current Counter Value : {counter}
        </p>
    </div>
  )
}
