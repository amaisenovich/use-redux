const combineReducers = (reducersMap) => {
  return (state, action) => Object.keys(reducersMap).reduce((nextState, key) => {
    const reducer = reducersMap[key]
    const slice = state ? state[key] : undefined
    return {
      ...nextState,
      [key]: reducer(slice, action)
    }
  }, {})
}

export {
  combineReducers
}
