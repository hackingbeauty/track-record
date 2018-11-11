import constants from 'core/types'

const initialState = {
  job: {}
}

function jobReducer(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_JOB:
      return Object.assign({}, state, {
        job: action.job
      })

    default:
      return state
  }
}

export default jobReducer
