import Immutable from 'immutable'
import { ActionTypes } from '../constants'
import _ from 'lodash'
import { createReducer } from 'redux-immutablejs'

const initialState = Immutable.fromJS({})

import URL from 'url-parse'

const convertArticle = (a) => {

  const url = a['url']
  const hostname = _.attempt(() => {
    return URL(url).hostname
  }, url)

  return {
    key: Math.random(),
    type: 'article',
    title: a['headline'],
    src: 'TechCrunch',
    img: a['img'],
    url: hostname
  }
}

const convertMessage = (a) => {
  return {
    key: Math.random(),
    type: 'message',
    title: a,
    src: 'designcraft',
    img: '/img/logos/designcraft.png',
    url: null
  }
}



const actionHandlers = {
  'ARTICLES.LOADED': (state, action) => {
    return state.merge(_.mapValues(action.payload, convertArticle))
  },
  'MESSAGES.LOADED': (state, action) => {
    // add a random key to each message so that all the messages are randomly
    // mixed in with articles
    const converted = _.mapKeys(_.mapValues(action.payload, convertMessage), () => Math.random())
    return state.merge(converted)
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
