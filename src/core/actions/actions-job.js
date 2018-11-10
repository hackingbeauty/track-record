import constants from 'core/types'

export function addJob(type) {
  return {
    type: constants.ADD_JOB,
    jobType: type
  }
}
