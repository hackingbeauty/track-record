import React, { Component }   from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter }         from 'react-router'
import Button                 from 'components/Button'
import * as uiActionCreators  from 'core/actions/actions-ui'
import { StandardModal }      from 'components/Modals'
import AppBar                 from 'components/AppBar'
import Slide                  from '@material-ui/core/Slide'
import Toolbar                from '@material-ui/core/Toolbar'
import IconButton             from '@material-ui/core/IconButton'
import ArrowBackIcon          from '@material-ui/icons/ArrowBack'
import Typography             from 'components/Typography'
import { styles }             from './styles.scss'

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

  proceed=() => {
    const { history } = this.props
    history.push('/submit')
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
                  <span className="label time">Time:</span>
                  <div className="value right">{jobType.time}</div>
                </div>
                <div className="section">
                  <span className="label">KPI:</span>
                  <div className="value right">{jobType.kpi}</div>
                </div>
                <div className="section">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAclBMVEX///8AAADf39/j4+Pr6+vn5+f8/PxaWlr5+flRUVFVVVVKSkpNTU1eXl5hYWEXFxfV1dWvr691dXXv7+/KysoaGhosLCwJCQlFRUWJiYm7u7ttbW0hISEyMjJ+fn5mZmY8PDylpaXCwsKPj4+bm5smJibHBYCBAAAEYklEQVR4nO3ca1vaMBiH8bRArToHgme3Ocf2/b/iCurs6TkkMc2/7rnfQnvld0lo2kqdsyxLUb0oy0WVexTxPayLputfuccRW310FMW33AOJbVG8tss9ksjKN8gy90giMwhaBkHLIGgZBC2DoGUQtAyClkHQMghaBkHLIGgZBC2DoGUQtAyClkHQMghaBkHLIGgZBC2DoGUQtAyClkHQMghaBkHLIGgZBC2DoGUQtAyClkHQmhlkc0W9MiPIZn+6Ln5Qr84EUv4+eflV2wP5DnzI8vnp29so6d+0gUPqh+33otV38p3IkM3+7rbo9ki+GRWyfL5YF8MuyQ0QIf3PUyt6lHCQzf68/3l674beDgqyu2x9P41FTxEcSHV1/5NF8FMEBLIbn9qDmEECQDaKP8VLzBTJDim3/KzoxEyR7JDdjd7BTZHsELf6o4dwDw/IDnEL9WeLXmg5BIgrr5WQLbuX/BC1hDwXOe4EAOI2qoNIUXP7gIDoJD/ZXWBAVBLydP0YCEQj4R+mgwKRJbfsFMGBiJI7fnMciCS557cGgggS8hrjS0gQVrIWHgEGBalOaciZsC0SpDphPlm/hY2BIKyjKIWtcSC8Q3wiGwyEdxRfpe1RIIKjeJZ2AALpOkYuNYrDw4B0HWfl4OyXPcs9BgHpOSq36F+RYM9yjyFABg7nVr2rROxZ7jEAyIijLxGW8IfyQ0Ydzi3bt0iEJfyh7BDC4dyuJRGW8IdyQ0hHI3m/ti0s4Q9lhjCOlkRawh/KC2EdztV3Ly9cKHaVFSI4Gsn58RVxfeLyQkRHIznTji0eUpfSqQKRwtG86UK6xPhaLKTeNiu826eAZ2qrHM3bHoVLjK9FQt6m44186O3VczDb3280+4uDvE7GpjtPid6hLAry7vAdy4c7oiBth99oPt4RA+k6fMaTwBEB6Tv0I0rhCIcMHdoxJXEEQ8YculGlcYRCxh1FcSqOK5EjEEI5ZEkqRxik6/jaGRsvSeYIgnQdT1WllqRzhEB6f4+qPz5aktARABk6tJKUDn/ImEMnSerwhow7NJK0Dl9I/WXcIUsSOzwhtEOSHE5ZUzr8IJyDl3Qd8vHfPx8I7+Ak6R0+EMlBSyZweEBkByWZwqGHaBzjkkkcaojOMSaZxqGFaB1DyUQOJUTvGEg81vhRqSA+Du7ef0KHCuLnoCUpHRqIr6M/vydxKCD+jnFJWocMCXGMSRI7REiYYyhJ7ZAgoY7JjoP/4iHhjq4kvYOHxDja38K+d4FC4iBxjkYSfF8uIAZSd/4L9yLkfmfwnVL/aEi849Bqqvv3JORjHNNFQebmICEnM3NQkIe5OSjI09wcFOTL3BwU5HFuDgpyNTcH+a21nZmDPiDur4tivZ+Ng1miVGU5H0bu/zL9wAyClkHQMghaBkHLIGgZBC2DoPX5IJvV/FqOQWbZef1JIK1fVc8ccmkQsD4hpM49lLhaj1DY5h5LTJ373rurpnIxx1ZxiwHL+l/6CxTOPhRD5YKWAAAAAElFTkSuQmCC" alt="mobile graph" />
                </div>
              </div>
              <Button
                color="primary"
                id="accept-btn"
                onClick={this.proceed}
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
