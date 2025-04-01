import React from 'react'
import { useDispatch } from 'react-redux'
import { counterActions } from '../store/counter';
import { privacyActions } from '../store/privacy';

export default function Controls() {

  const dispatch = useDispatch();
  const actions = counterActions;

  const handleOnIncrement = () =>
  {
    dispatch(counterActions.increment());
  }

  const handleOnDecrement = () =>
  {
    dispatch(counterActions.decrement());
  }

  const handleOnAddition = () =>
  {
    dispatch(counterActions.addition(10));
  }

  const handleOnPrivacy = () =>
  {
    dispatch(privacyActions.toggle());
  }

  return (
    <div>
        <button type="button" className="button" onClick={handleOnIncrement} >+1</button>
        <button type="button" className="button red" onClick={handleOnDecrement} >-1</button>
        <button type="button" className="button green" onClick={handleOnAddition} >+10</button>
        <button type="button" className="button " onClick={handleOnPrivacy} >Privacy Toggle</button>
    </div>
  )
}
