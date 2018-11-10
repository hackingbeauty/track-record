import React, { Component } from 'react'
import { dummyJobs }        from 'configs/config-main'
import JobType              from './components/JobType'
import { styles }           from './styles.scss'

class HomeView extends Component {
  displayJobs= () => {
    return dummyJobs.map((job) => {
      return <JobType {...job} />
    })
  }

  render() {
    return (
      <div className={styles}>
        <div className="container">
          <h2>New Jobs</h2>
          <ul>
            {this.displayJobs()}
          </ul>
        </div>
      </div>
    )
  }
}

export default HomeView
