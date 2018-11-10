import React      from 'react'
import PropTypes  from 'prop-types'
import { styles } from './styles.scss'

const JobType = (props) => {
  const { title } = props
  return (
    <div className={styles}>
      <span className="title">{title}</span>
    </div>
  )
}

JobType.propTypes = {
  title: PropTypes.string.isRequired
}

export default JobType
