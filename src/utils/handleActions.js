const handleActions = (actionsMap, defaultState) => (state, action) => {
  if (state === undefined) {
    return defaultState
  }

  const [, handler] = actionsMap.find(([a]) => a.type === action.type)
  if (!handler) {
    return state
  }

  return handler(state, action)
}

export {
  handleActions
}
