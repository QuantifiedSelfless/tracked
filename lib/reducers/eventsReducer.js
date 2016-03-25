import Immutable from 'immutable'
import { ActionTypes } from '../constants'
import _ from 'lodash'
import { createReducer } from 'redux-immutablejs'

import moment from 'moment'

const initialState = Immutable.fromJS({
  "-1": {
    description: 'You downloaded a bunch of articles',
    type: 'in',
    createdAt: moment().subtract(1, 'minute'),
    company: 'cnn'
  }
})

const actionHandlers = {
  'ROUTE.ENTER': (state, action) => {
      return Immutable.fromJS(action.payload)
  },
  'EVENTS.ADD': (state, action) => state.set(_.uniqueId(), Immutable.fromJS(action.payload))
}

export default createReducer(initialState, actionHandlers)
