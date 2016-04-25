import Immutable from 'immutable'
import { ActionTypes } from '../constants'
import _ from 'lodash'
import { createReducer } from 'redux-immutablejs'

import moment from 'moment'

const initialState = Immutable.OrderedMap()

const actionHandlers = {
  'ROUTE.ENTER': (state, action) => {
      return Immutable.fromJS(action.payload)
  },
  'EVENTS.ADD': (state, action) => state.set(_.uniqueId(), Immutable.fromJS(action.payload)),
  'EVENTS.LOADED': (state, action) => {
    return Immutable.OrderedMap(Immutable.fromJS(action.payload))
  }
}

export default createReducer(initialState, actionHandlers)
