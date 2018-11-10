import { combineReducers } from 'redux'
import uiReducer           from 'core/reducers/reducer-ui'
import jobReducer          from 'core/reducers/reducer-job'

const rootReducer = combineReducers({
  ui: uiReducer,
  job: jobReducer
})

export default rootReducer
