import { useContext } from 'react'
import { Context } from 'redux/Provider'

const useDispatch = (dispatchMapper) => {
  const store = useContext(Context)
  return dispatchMapper ? dispatchMapper(store.dispatch) : store.dispatch
}

export {
  useDispatch
}
