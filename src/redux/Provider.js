import React, { createContext } from 'react'

const Context = createContext(undefined)

const Provider = ({
  store,
  children
}) => (
    <Context.Provider value={store}>
      {children}
    </Context.Provider>
  )

export {
  Provider,
  Context
}
