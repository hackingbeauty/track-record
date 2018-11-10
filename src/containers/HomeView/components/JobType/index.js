import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import Button               from 'components/Button'
import { styles }           from './styles.scss'

class JobType extends Component {
  selectItem= () => {
    const { type, onClick } = this.props
    onClick(type)
  }

  render() {
    const { type } = this.props
    return (
      <div className={styles}>
        <Button
          color="primary"
          className="btn"
          onClick={this.selectItem}
        >
          {type}
        </Button>
      </div>
    )
  }
}

JobType.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
}

export default JobType
