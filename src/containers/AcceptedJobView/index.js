import React, { Component }   from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter }         from 'react-router'
import * as uiActionCreators  from 'core/actions/actions-ui'
import AppBar                 from 'components/AppBar'
import { StandardModal }      from 'components/Modals'
import Slide                  from '@material-ui/core/Slide'
import Toolbar                from '@material-ui/core/Toolbar'
import IconButton             from '@material-ui/core/IconButton'
import ArrowBackIcon          from '@material-ui/icons/ArrowBack'
import Typography             from 'components/Typography'
import { styles }             from './styles.scss'

function TransitionComponent(props) {
  return <Slide direction="left" {...props} mountOnEnter unmountOnExit />
}

class AcceptedJobView extends Component {
  componentDidMount() {
    const { actions } = this.props

    actions.ui.openModal({
      modalKey: 'accepted-job-modal'
    })
  }

  close= () => {
    const { history } = this.props
    history.push('/job')
  }

  render() {
    const { ui } = this.props

    return (
      <StandardModal
        modalKey="accepted-job-modal"
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
                Update Job Status
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={styles}>
            <div className="container">
              accepted job view here
            </div>
          </div>
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
      ui: bindActionCreators(uiActionCreators, dispatch)
    }
  }
}

AcceptedJobView.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  ui: PropTypes.shape({}).isRequired
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AcceptedJobView))
