import React, { Component }   from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter }         from 'react-router'
import * as jobActionCreators from 'core/actions/actions-job'
import { jobTypes }           from 'configs/config-main'
import JobType                from './components/JobType'
import { styles }             from './styles.scss'

class HomeView extends Component {
  proceed=(type) => {
    const { actions, history } = this.props
    actions.job.addJob(type)
    history.push('/job')
  }

  displayJobs= () => {
    return jobTypes.map((job, index) => {
      const key = `job-${index}`
      return <JobType key={key} {...job} onClick={this.proceed} />
    })
  }

  render() {
    return (
      <div className={styles}>
        <div className="container">
          <h2>Create Your Immutable Track Record</h2>
          <ul>
            {this.displayJobs()}
          </ul>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      job: bindActionCreators(jobActionCreators, dispatch)
    }
  }
}

HomeView.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired
}


export default withRouter(connect(null, mapDispatchToProps)(HomeView))
