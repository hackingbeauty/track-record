import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import Button               from 'components/Button'
import { styles }           from './styles.scss'

class JobType extends Component {
  selectJobType= () => {
    const { job, onClick } = this.props
    onClick(job)
  }

  render() {
    const { type } = this.props.job

    return (
      <div className={styles}>
        <Button
          color="primary"
          className="btn"
          onClick={this.selectJobType}
        >
          {type}
        </Button>
      </div>
    )
  }
}

JobType.propTypes = {
  onClick: PropTypes.func.isRequired,
  job: PropTypes.shape({
    type: PropTypes.string.isRequired
  }).isRequired
}

export default JobType
