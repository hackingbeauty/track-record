import React, { Component }   from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter }         from 'react-router'
import * as uiActionCreators  from 'core/actions/actions-ui'
import AppBar                 from 'components/AppBar'
import { StandardModal }      from 'components/Modals'
import Button                 from 'components/Button'
import Slide                  from '@material-ui/core/Slide'
import Toolbar                from '@material-ui/core/Toolbar'
import IconButton             from '@material-ui/core/IconButton'
import ArrowBackIcon          from '@material-ui/icons/ArrowBack'
import Typography             from 'components/Typography'
import badge                  from 'assets/images/badge.png'
import { styles }             from './styles.scss'

function TransitionComponent(props) {
  return <Slide direction="left" {...props} mountOnEnter unmountOnExit />
}

class DetailsStatusView extends Component {
  componentDidMount() {
    const { actions } = this.props

    actions.ui.openModal({
      modalKey: 'details-status-modal'
    })
  }

  close= () => {
    const { history } = this.props
    history.push('/home')
  }


  render() {
    const { ui } = this.props

    return (
      <StandardModal
        modalKey="details-status-modal"
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
                Status: Finished
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={styles}>
            <div className="container">
              <div id="badge">
                <img src={badge} alt="badge" />
                <h2>Congrats!</h2>
              </div>
              <div id="status-details">
                <div className="section">
                  <span className="label">Project Payment:</span>
                  <div className="value right">$100</div>
                </div>
                <div className="section">
                  <span className="label">Project Time:</span>
                  <div className="value right">1 week</div>
                </div>
                <div className="section">
                  <span className="label">Tokens:</span>
                  <div className="value right">20</div>
                </div>
              </div>
              <Button
                className="btn"
                color="primary"
              >
              Get Paid
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

DetailsStatusView.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  ui: PropTypes.shape({}).isRequired
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DetailsStatusView))
