import Immutable from 'immutable'
import { ActionTypes } from '../constants'
import _ from 'lodash'
import { createReducer } from 'redux-immutablejs'

const initialState = Immutable.fromJS({})

const convert = (a) => {
  return {
    title: a['headline'],
    src: 'TechCrunch',
    img: a['img'],
    url: a['url']
  }
}

const actionHandlers = {
  'ARTICLES.LOADED': (state, action) => {
    return Immutable.fromJS(_.map(action.payload, convert))
  },
  'ARTICLE.SET.ACTIVE': (state, action) => {
    return state.setIn([action.payload.id, 'active'], action.payload.value)
  },
  'ARTICLE.MARK.AS.READ_LATER': (state, action) => {
    return state.setIn([action.payload, 'label'], 'READ_LATER')
  },
  'ARTICLE.MARK.AS.SKIPPED': (state, action) => {
    return state.setIn([action.payload, 'label'], 'SKIPPED')
  }
}

export default createReducer(initialState, actionHandlers)
