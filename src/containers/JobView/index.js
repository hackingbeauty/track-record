import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { connect }          from 'react-redux'
import { bindActionCreators } from 'redux'

import { withRouter }       from 'react-router'
import Button               from 'components/Button'
import * as uiActionCreators from 'core/actions/actions-ui'

import { StandardModal }    from 'components/Modals'
import AppBar               from 'components/AppBar'
import Slide                from '@material-ui/core/Slide'
import Toolbar              from '@material-ui/core/Toolbar'
import IconButton           from '@material-ui/core/IconButton'
import ArrowBackIcon        from '@material-ui/icons/ArrowBack'
import Typography           from 'components/Typography'
import { styles }           from './styles.scss'

function TransitionComponent(props) {
  return <Slide direction="left" {...props} mountOnEnter unmountOnExit />
}

class JobView extends Component {
  componentDidMount() {
    const { actions } = this.props

    actions.ui.openModal({
      modalKey: 'accept-job-modal'
    })
  }

  close= () => {
    const { history } = this.props
    history.push('/start')
  }

  render() {
    const { ui } = this.props
    const { jobType } = this.props.job

    return (
      <StandardModal
        modalKey="accept-job-modal"
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
                Here Is A Job For You
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={styles}>
            <div className="container">
              <h2>{jobType.title}</h2>
              <div id="job-info">
                <div className="section">
                  <span className="label">Description:</span>
                  <div className="value">{jobType.description}</div>
                </div>
                <div className="section">
                  <span className="label">Compensation:</span>
                  <div className="value right">{jobType.compensation}</div>
                </div>
                <div className="section">
                  <span className="label">Time:</span>
                  <div className="value right">{jobType.time}</div>
                </div>
              </div>
              <Button
                color="primary"
                id="accept-btn"
              >
                Accept Job
              </Button>
            </div>
          </div>
        </div>
      </StandardModal>
    )
  }
}

function mapStateToProps(state) {
  return {
    job: state.job,
    ui: state.ui
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  }
}

JobView.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  job: PropTypes.shape({
    jobType: PropTypes.shape({}).isRequired
  }).isRequired,
  ui: PropTypes.shape({}).isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobView))
