import Immutable from 'immutable'
import { ActionTypes } from '../constants'
import _ from 'lodash'
import { createReducer } from 'redux-immutablejs'

import moment from 'moment'

const initialState = Immutable.fromJS({
  "a": {
    description: 'You are sold for $100 to CNN really',
    type: 'out',
    createdAt: moment().subtract(1, 'minute'),
    company: 'cnn'
  },
  "b": {
    description: 'You looked at this on Facebook',
    type: 'in',
    createdAt: moment().subtract(2, 'minute'),
    company: 'facebook'
  },
  "c": {
    description: 'You downloaded this from Facebook',
    type: 'in',
    createdAt: moment().subtract(5, 'minute'),
    company: 'facebook'
  },
  "d": {
    description: 'You are sold for $1 to CNN',
    type: 'out',
    createdAt: moment().subtract(15, 'minute'),
    company: 'cnn'
  },
  "e": {
    description: 'You are sold again for $1 to CNN',
    type: 'out',
    createdAt: moment().subtract(3, 'days'),
    company: 'cnn'
  },
  "f": {
    description: 'You looked at this on Facebook',
    type: 'in',
    createdAt: moment().subtract(2, 'minute'),
    company: 'facebook'
  },
  "g": {
    description: 'You downloaded this from Facebook',
    type: 'in',
    createdAt: moment().subtract(5, 'minute'),
    company: 'facebook'
  },
  "i": {
    description: 'You are sold for $1 to CNN',
    type: 'out',
    createdAt: moment().subtract(15, 'minute'),
    company: 'cnn'
  },
  "j": {
    description: 'You are sold again for $1 to CNN',
    type: 'out',
    createdAt: moment().subtract(3, 'days'),
    company: 'cnn'
  },
})

const actionHandlers = {
  'ROUTE.ENTER': (state, action) => {
      return Immutable.fromJS(action.payload)
  }
}

export default createReducer(initialState, actionHandlers)
