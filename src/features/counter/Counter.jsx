import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment, selectCount, reset} from './counterSlice'
import { useState } from 'react'


function Counter() {
  const [incrementAmount, setIncrementAmount] = useState(1);
const count = useSelector(selectCount)
const dispatch = useDispatch()

function handleIncrementAmount(e) {
  setIncrementAmount(Number(e.target.value))
}

  return (
    <div>
        {count}
        <input type='number' min='1' value={incrementAmount} onChange={handleIncrementAmount}/>
        <br/>
        <br/>
        <button onClick={()=> dispatch(increment(incrementAmount))}>+</button>
        <button onAuxClick={()=> dispatch(decrement(incrementAmount))}>-</button>
        <br/><br/>
        <button onClick={()=> dispatch(reset(reset))}>Reset</button>
    </div>
  )
}

export default Counter