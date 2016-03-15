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

// import MyRawTheme from './theme';
// import ThemeManager from 'material-ui/lib/styles/theme-manager';
// import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

// const handleEnter = name => nextState => {
//   store.dispatch({type:'ROUTE.ENTER', payload: {name, params: nextState.params, location: nextState.location}})
// }

// import SwipeableViews from 'react-swipeable-views';
//
// class Item extends Component {
//   render(){
//     const styles = {
//         slide: {
//           padding: 15,
//           minHeight: 100,
//           color: '#fff',
//         },
//         slide1: {
//           background: '#FEA900',
//         },
//         slide2: {
//           background: '#B3DC4A',
//         },
//         slide3: {
//           background: '#6AC0FF',
//         },
//       };
//
//     return <SwipeableViews index={1}>
//     <div style={Object.assign({}, styles.slide, styles.slide1)}>
//       Skip
//     </div>
//     <div style={Object.assign({}, styles.slide, styles.slide2)}>
//       News Item
//     </div>
//     <div style={Object.assign({}, styles.slide, styles.slide3)}>
//       Read Later
//     </div>
//   </SwipeableViews>
//   }
// }

import ArticleList from './components/ArticleList'
class IndexRoute extends Component {
  render(){
    return <ArticleList/>
  }
}

// @ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class App extends Component {

  render(){
    return <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={IndexRoute}></Route>
      </Router>
    </Provider>
  }
}
