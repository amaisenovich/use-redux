const createAction = (type, payloadFormatter = undefined) => {
  const actionCreator = (...payload) => ({
    type,
    payload: payloadFormatter ? payloadFormatter(payload) : payload
  })

  actionCreator.type = type

  return actionCreator
}

export {
  createAction
}
