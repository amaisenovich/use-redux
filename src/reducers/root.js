import { combineReducers } from 'redux'
import { reducer as counter } from 'reducers/counter'

const reducer = combineReducers({
  counter
})

export {
  reducer
}
