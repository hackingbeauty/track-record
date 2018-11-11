import React, { Component }   from 'react'
import { MuiThemeProvider }   from '@material-ui/core/styles'
import {
  HashRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import theme      from 'configs/theme/config-theme'
import HomeView   from 'containers/HomeView'
import StartView  from 'containers/StartView'
import JobView    from 'containers/JobView'
import StatusView from 'containers/StatusView'
import Header     from './components/Header'
import Footer     from './components/Footer'

import './styles.scss' // global styles

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <div>
            <Header />
            <Footer />
            <div className="app-shell">
              <Switch>
                <Route path="/start" component={StartView} />
                <Route path="/home" component={HomeView} />
                <Route path="/job" component={JobView} />
                <Route path="/status" component={StatusView} />
                <Redirect from="/" to="/start" />
              </Switch>
            </div>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    )
  }
}

export default App
