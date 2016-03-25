import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import articles from './articlesReducer'
import events from './eventsReducer'
export default combineReducers({articles, events, routing: routerReducer})
