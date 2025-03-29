import React from 'react'
import { useDispatch } from 'react-redux'

export default function Controls() {

  const dispatch = useDispatch();

  const handleOnIncrement = () =>
  {
    dispatch({type : "INCREMENT"})
  }

  const handleOnDecrement = () =>
  {
    dispatch({type : "DECREMENT"})
  }

  const handleOnAddition = () =>
  {
    dispatch(
    {
      type : "ADDITION", 
      payload : {value : 10} , 
    })
  }

  return (
    <div>
        <button type="button" className="button" onClick={handleOnIncrement} >+1</button>
        <button type="button" className="button red" onClick={handleOnDecrement} >-1</button>
        <button type="button" className="button green" onClick={handleOnAddition} >+10</button>
    </div>
  )
}
