import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import articles from './articlesReducer'
export default combineReducers({articles, routing: routerReducer})
