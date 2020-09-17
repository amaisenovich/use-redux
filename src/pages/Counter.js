import React from 'react'
import { useState, useDispatch } from 'redux'
import { increase, decrease } from 'actions/counter'
import { counterSelector } from 'selectors/counter'

const Counter = () => {
  const { counter } = useState((state) => ({
    counter: counterSelector(state)
  }))


  const { up, down } = useDispatch((dispatch) => ({
    up: () => dispatch(increase()),
    down: () => dispatch(decrease())
  }))

  return (
    <>
      <p>You've clicked {counter} times!</p>
      <button onClick={up}>Up!</button> <button onClick={down}>Down!</button>
    </>
  )
}

export {
  Counter
}
