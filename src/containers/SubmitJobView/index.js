import React, { Component }   from 'react'
import PropTypes              from 'prop-types'
import { connect }            from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter }         from 'react-router'
import * as uiActionCreators  from 'core/actions/actions-ui'
import AppBar                 from 'components/AppBar'
import { StandardModal }      from 'components/Modals'
import Typography             from 'components/Typography'
import Button                 from 'components/Button'
import Slide                  from '@material-ui/core/Slide'
import Toolbar                from '@material-ui/core/Toolbar'
import IconButton             from '@material-ui/core/IconButton'
import ArrowBackIcon          from '@material-ui/icons/ArrowBack'
import TextField              from '@material-ui/core/TextField'
import InputLabel             from '@material-ui/core/InputLabel'
import MenuItem               from '@material-ui/core/MenuItem'
import FormControl            from '@material-ui/core/FormControl'
import Select                 from '@material-ui/core/Select'
import { styles }             from './styles.scss'

function TransitionComponent(props) {
  return <Slide direction="left" {...props} mountOnEnter unmountOnExit />
}

class SubmitJobView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: '',
      open: false
    }
  }
  componentDidMount() {
    const { actions } = this.props

    actions.ui.openModal({
      modalKey: 'accepted-job-modal'
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

  handleClose = () => {
    this.setState({ open: false })
  };

  handleOpen = () => {
    this.setState({ open: true })
  };

  close= () => {
    const { history } = this.props
    history.push('/job')
  }

  submitJob=() => {
    alert('submit job')
  }

  render() {
    const { ui } = this.props
    const { open, status } = this.state

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
                Submit Your Work
              </Typography>
            </Toolbar>
          </AppBar>
          <div className={styles}>
            <div className="container">
              <div id="job-status">
                <div className="section">
                  <div className="value">
                    <FormControl id="form">
                      <InputLabel htmlFor="demo-controlled-open-select">Status</InputLabel>
                      <Select
                        open={open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={status}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'status',
                          id: 'demo-controlled-open-select'
                        }}
                      >
                        <MenuItem value={10}>In Progress</MenuItem>
                        <MenuItem value={20}>Waiting</MenuItem>
                        <MenuItem value={30}>Finished</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="section">
                  <div className="value">
                    <TextField
                      fullWidth
                      id="enter-notes"
                      label="Enter notes"
                      margin="dense"
                      variant="outlined"
                    />
                  </div>
                </div>
              </div>
              <Button
                color="primary"
                id="accept-btn"
                onClick={this.submitJob}
              >
                  Submit Work
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

SubmitJobView.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  ui: PropTypes.shape({}).isRequired
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubmitJobView))
