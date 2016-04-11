import React, {Component, PropTypes} from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { Router, Route, Link, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store from './store'
import { articlesLoad, eventsLoad, messagesLoad } from './actions'

injectTapEventPlugin()

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

import MainScreen from './components/MainScreen'

import ArticleList from './components/ArticleList'
class IndexRoute extends Component {
  render(){
    const userid = this.props.route.path
    store.dispatch(articlesLoad(userid))
    store.dispatch(eventsLoad(userid))
    store.dispatch(messagesLoad(userid))
    return <MainScreen/>
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
        <Route path="/amelia" component={IndexRoute}></Route>
        <Route path="/guest" component={IndexRoute}></Route>
        <Route path="/tracked" component={EventsRoute}></Route>
      </Router>
    </Provider>
  }
}
