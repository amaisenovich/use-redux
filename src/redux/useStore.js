import { useReducer } from 'react'
import { createAction } from 'utils/createAction'

const init = createAction('@@init')

const useStore = (reducer, preloadedState) => {
  const initialState = preloadedState || reducer(undefined, init())
  const [state, dispatch] = useReducer(reducer, initialState)
  return {
    state,
    dispatch
  }
}

export {
  useStore
}
