import React, { Component }   from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter }         from 'react-router'
import * as jobActionCreators from 'core/actions/actions-job'
import * as uiActionCreators  from 'core/actions/actions-ui'
import AppBar                 from 'components/AppBar'
import { StandardModal }      from 'components/Modals'
import Slide                  from '@material-ui/core/Slide'
import Toolbar                from '@material-ui/core/Toolbar'
import IconButton             from '@material-ui/core/IconButton'
import ArrowBackIcon          from '@material-ui/icons/ArrowBack'
import Typography             from 'components/Typography'
import { jobTypes }           from 'configs/config-main'
import JobType                from './components/JobType'
import { styles }             from './styles.scss'
import Footer from '../App/components/Footer'

function TransitionComponent(props) {
  return <Slide direction="left" {...props} mountOnEnter unmountOnExit />
}

class StartView extends Component {
  componentDidMount() {
    const { actions } = this.props

    actions.ui.openModal({
      modalKey: 'start-job-modal'
    })
  }

  close= () => {
    const { history } = this.props
    history.push('/home')
  }

  proceed=(job) => {
    const { actions, history } = this.props
    actions.job.addJob(job)
    history.push('/job')
  }

  displayJobs= () => {
    return jobTypes.map((job, index) => {
      const key = `job-${index}`
      return <JobType key={key} job={job} onClick={this.proceed} />
    })
  }

  render() {
    const { ui } = this.props

    return (
      <StandardModal
        modalKey="start-job-modal"
        modalState={ui.modalState}
        onClose={this.close}
        TransitionComponent={TransitionComponent}
      >
        <div>
          <AppBar>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="back-arrow"
                onClick={this.close}
                className="arrow-icon"
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography variant="title" color="inherit">
                Start Getting Jobs
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={styles}>
            <div className="container">
              <h3>Select a job type:</h3>
              <ul>
                {this.displayJobs()}
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      </StandardModal>
    )
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      job: bindActionCreators(jobActionCreators, dispatch),
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  }
}

StartView.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  ui: PropTypes.shape({}).isRequired
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StartView))
