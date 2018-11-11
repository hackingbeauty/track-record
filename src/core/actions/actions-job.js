import constants from 'core/types'

export function addJob(job) {
  return {
    type: constants.ADD_JOB,
    job
  }
}
