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
  }
}

export default createReducer(initialState, actionHandlers)
