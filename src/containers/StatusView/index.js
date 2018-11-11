import React, { Component } from 'react'
import JobStatus            from './components/JobStatus'
import { styles }           from './styles.scss'

class StatusView extends Component {
  displayJobStatuses = () => {
    return (
      <li>
        <JobStatus status="Finished" jobTitle="Create Our Machine Learning Model" />
        <JobStatus status="In Progress" jobTitle="Develop Our React Dapp" />
      </li>
    )
  }

  render() {
    return (
      <div className={styles}>
        <ul>
          {this.displayJobStatuses()}
        </ul>
      </div>
    )
  }
}
export default StatusView
