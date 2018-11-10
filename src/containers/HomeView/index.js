import React, { Component } from 'react'
import { jobTypes }         from 'configs/config-main'
import JobType              from './components/JobType'
import { styles }           from './styles.scss'

class HomeView extends Component {
  displayJobs= () => {
    return jobTypes.map((job, index) => {
      const key = `job-${index}`
      return <JobType key={key} {...job} />
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

export default HomeView
