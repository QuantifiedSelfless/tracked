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

const convertMessage = (a) => {
  return {
    title: a['Suggestion'],
    src: a['company'],
    img: '/img/logos/designcraft.png',
    url: a['url']
  }
}

const actionHandlers = {
  'ARTICLES.LOADED': (state, action) => {
    return state.merge(_.mapValues(action.payload, convert))
  },
  'MESSAGES.LOADED': (state, action) => {
    return state.merge(_.mapValues(action.payload, convertMessage))
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
