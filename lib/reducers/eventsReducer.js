import Immutable from 'immutable'
import { ActionTypes } from '../constants'
import _ from 'lodash'
import { createReducer } from 'redux-immutablejs'

import moment from 'moment'

const initialState = Immutable.fromJS({
  "-1csadc": {
    description: 'You are sold for $100 really',
    type: 'out',
    createdAt: moment().subtract(1, 'minute')
  },
  "-1csad3": {
    description: 'You looked at this',
    type: 'in',
    createdAt: moment().subtract(2, 'minute')
  },
  "-1csad2": {
    description: 'You downloaded this',
    type: 'in',
    createdAt: moment().subtract(5, 'minute')
  },
  "-1csad1": {
    description: 'You are sold again for $1 to CNN',
    type: 'out',
    createdAt: moment().subtract(15, 'minute')
  },
  "-1csad0": {
    description: 'You are sold again for $1 to CNN',
    type: 'out',
    createdAt: moment().subtract(3, 'days')
  },
})

const actionHandlers = {
  'ROUTE.ENTER': (state, action) => {
      return Immutable.fromJS(action.payload)
  }
}

export default createReducer(initialState, actionHandlers)
