import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { withRouter }       from 'react-router-dom'
import Paper                from '@material-ui/core/Paper'
import { Tabs, Tab }        from '@material-ui/core'
import ListIcon             from '@material-ui/icons/FormatListNumbered'
import CheckIcon            from '@material-ui/icons/CloudUpload'
import { styles }           from './styles.scss'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTab: 0
    }
  }

  static getDerivedStateFromProps(nextProps) {
    const { location } = nextProps
    let currentTab

    switch (location.pathname) {
      case '/home':
        currentTab = 0
        break
      case '/status':
        currentTab = 1
        break
      default:
        currentTab = 0
        break
    }

    return { currentTab }
  }

  handleChange=(evt, tab) => {
    this.setState({ currentTab: tab })
    this.updateURL(tab)
  }

  updateURL(tab) {
    const { history } = this.props

    switch (tab) {
      case 0:
        history.push('/home')
        break
      case 1:
        history.push('/status')
        break
      default:
        break
    }
  }

  render() {
    const { currentTab } = this.state

    return (
      <div className={styles}>
        <Paper>
          <Tabs
            className="main-navigation"
            value={currentTab}
            onChange={this.handleChange}
            indicatorColor="primary"
            fullWidth
            centered
          >
            <Tab
              icon={<ListIcon />}
              label="New Jobs"
              className="tab"
            />
            <Tab
              icon={<CheckIcon />}
              label="Job Statuses"
              className="tab"
            />
          </Tabs>
        </Paper>
      </div>
    )
  }
}

Navigation.propTypes = {
  history: PropTypes.shape({}).isRequired
}

export default withRouter(Navigation)
