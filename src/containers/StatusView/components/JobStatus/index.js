import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { withRouter }       from 'react-router-dom'
import { styles }           from './styles.scss'

class JobStatus extends Component {
  goToJobStatusView= () => {
    const { history } = this.props
    history.push('/status/1')
  }

  render() {
    const { jobTitle, status } = this.props
    return (
      <div className={styles}>
        <div className="job-status" onClick={this.goToJobStatusView}>
          <span className="job-title">{jobTitle}</span>
          <span className="job-statues right">{status}</span>
        </div>
      </div>
    )
  }
}

JobStatus.propTypes = {
  history: PropTypes.shape({}).isRequired,
  jobTitle: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}

export default withRouter(JobStatus)
