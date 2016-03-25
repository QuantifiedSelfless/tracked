import React, {Component, PropTypes} from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { Router, Route, Link, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
// import {V, P, PageRoute} from './routes'
import store from './store'

// import GalleryRoute from './routes/GalleryRoute'
// import CollectionRoute from './routes/CollectionRoute'
// import CollectionGalleryRoute from './routes/CollectionGalleryRoute'
// import DocRoute from './routes/DocRoute'
// import EmbedRoute from './routes/EmbedRoute'

injectTapEventPlugin()

global.$ = global.jQuery = require('jquery')

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

import ArticleList from './components/ArticleList'
class IndexRoute extends Component {
  render(){
    return <ArticleList/>
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
        <Route path="/events" component={EventsRoute}></Route>
      </Router>
    </Provider>
  }
}
