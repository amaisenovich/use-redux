import React from 'react'
import { useStore, Provider } from 'redux'
import { reducer } from 'reducers/root'
import { Counter } from 'pages/Counter'

const Root = () => {
  const store = useStore(reducer)
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export {
  Root
}
