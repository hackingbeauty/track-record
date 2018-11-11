import constants from 'core/types'

const initialState = {
  jobType: {}
}

function jobReducer(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_JOB:
      return Object.assign({}, state, {
        jobType: action.jobType
      })

    default:
      return state
  }
}

export default jobReducer
