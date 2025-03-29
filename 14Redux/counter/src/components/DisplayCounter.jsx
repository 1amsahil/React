import { useSelector } from "react-redux"

export const DisplayCounter = () => {
  
  const counter = useSelector( (store) => store.counter)

  return (
    <div>
        <p className="">
            counter current value : {counter}
        </p>
    </div>
  )
}
