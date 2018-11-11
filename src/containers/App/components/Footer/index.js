import React, { Component } from 'react'
import BottomNavigation     from 'components/BottomNavigation'
import { styles }           from './styles.scss'

class Footer extends Component {
  render() {
    return (
      <div className={styles}>
        <BottomNavigation>
          <div className="container">
            Active Account: jennifer1234
          </div>
        </BottomNavigation>
      </div>
    )
  }
}

export default Footer
