import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { styles }           from './styles.scss'

class JobStatus extends Component {
  render() {
    const { jobTitle, status } = this.props
    return (
      <div className={styles}>
        <div className="job-status">
          <span className="job-title">{jobTitle}</span>
          <span className="job-statues right">{status}</span>
        </div>
      </div>
    )
  }
}

JobStatus.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}

export default JobStatus
