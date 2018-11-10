import React      from 'react'
import PropTypes  from 'prop-types'
import Button     from 'components/Button'
import { styles } from './styles.scss'

const JobType = (props) => {
  const { type } = props
  return (
    <div className={styles}>
      <Button
        color="primary"
        className="btn"
      >
        {type}
      </Button>
    </div>
  )
}

JobType.propTypes = {
  type: PropTypes.string.isRequired
}

export default JobType
