import { useContext } from 'react'
import { Context } from 'redux/Provider'

const useState = (stateMapper) => {
  const store = useContext(Context)
  return stateMapper ? store.state : stateMapper(store.state)
}

export {
  useState
}
