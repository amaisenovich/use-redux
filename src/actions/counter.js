import { createAction } from 'utils/createAction'

const FEATURE_NAME = "COUNTER"

const increase = createAction(
  `${FEATURE_NAME}/INCREASE`
)

const decrease = createAction(
  `${FEATURE_NAME}/DECREASE`
)

export {
  increase,
  decrease
}
