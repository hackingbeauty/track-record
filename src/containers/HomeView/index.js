import React, { Component }   from 'react'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import * as jobActionCreators from 'core/actions/actions-job'
import { jobTypes }           from 'configs/config-main'
import JobType                from './components/JobType'
import { styles }             from './styles.scss'

class HomeView extends Component {
  proceed=(type) => {
    const { actions } = this.props
    actions.job.addJob(type)
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


export default connect(null, mapDispatchToProps)(HomeView)
