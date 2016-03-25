import React, {Component, PropTypes} from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { Router, Route, Link, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store from './store'

injectTapEventPlugin()

// global.$ = global.jQuery = require('jquery')

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

import MainScreen from './components/MainScreen'

import ArticleList from './components/ArticleList'
class IndexRoute extends Component {
  render(){
    return <MainScreen/>
    // return <ArticleList/>
  }
}

import EventList from './components/EventList'
class EventsRoute extends Component {
  render(){
    return <EventList/>
  }
}

// @ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class App extends Component {

  render(){
    return <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={IndexRoute}></Route>
        <Route path="/tracked" component={EventsRoute}></Route>
      </Router>
    </Provider>
  }
}
