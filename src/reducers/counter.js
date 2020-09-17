import { handleActions } from 'utils/handleActions'
import { increase, decrease } from 'actions/counter'

const increaseHandler = (state) => state + 1

const decreaseHandler = (state) => state - 1

const defaultState = 0

const reducer = handleActions([
  [
    increase,
    increaseHandler
  ], [
    decrease,
    decreaseHandler
  ]
], defaultState)

export {
  reducer
}