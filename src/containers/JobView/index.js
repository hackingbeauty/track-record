import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { connect }          from 'react-redux'
import { withRouter }       from 'react-router'
import Button               from 'components/Button'
import { styles }           from './styles.scss'

class JobView extends Component {
  render() {
    const { jobType } = this.props.job

    return (
      <div className={styles}>
        <div className="container">
          <h2>{jobType.title}</h2>
          <div id="job-info">
            <div className="section">
              <span className="label">Description:</span>
              <div className="value">{jobType.description}</div>
            </div>
            <div className="section">
              <span className="label">Compensation:</span>
              <div className="valule">{jobType.compensation}</div>
            </div>
            <div className="section">
              <span className="label">Time:</span>
              <div className="value">{jobType.time}</div>
            </div>
          </div>
          <Button
            color="primary"
            id="accept-btn"
          >
            Accept Job
          </Button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    job: state.job
  }
}

JobView.propTypes = {
  job: PropTypes.shape({
    jobType: PropTypes.shape({}).isRequired
  }).isRequired
}

export default withRouter(connect(mapStateToProps)(JobView))
