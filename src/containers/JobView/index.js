import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { connect }          from 'react-redux'
import { withRouter }       from 'react-router'
import { styles }           from './styles.scss'

class JobView extends Component {
  render() {
    const { jobType } = this.props.job

    return (
      <div className={styles}>
        <div className="container">
          <h2>{jobType.title}</h2>
          <span>Description:</span>
          <div>{jobType.description}</div>
          <span>Compensation:</span>
          <div>{jobType.compensation}</div>
          <span>Time</span>
          <div>{jobType.time}</div>
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
