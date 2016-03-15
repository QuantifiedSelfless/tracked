//
// Middlewares
//
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import timeout from 'redux-effects-timeout'
import { ActionTypes } from './constants'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import _ from 'lodash'
import { Iterable } from 'immutable'
const stateTransformer = (state) => {
  // state is plain object, but each property is Immutable
  return _.mapValues(state, (s) => {
      if (Iterable.isIterable(s)) return s.toJS()
      else return s
  })
}

const actionTransformer = (action) => {
  if (action.type === ActionTypes.FIREBASE.FETCH.SUCCESS){
    action.type = action.type + ` (${action.payload.path.join('/')})`
  }
  return action
}

const logger = createLogger({
  stateTransformer,
  actionTransformer,
  predicate: (getState, action) =>
    (action.type !== ActionTypes.PREVIEW.TIMEOUTID.SET
       && action.type !== ActionTypes.DOC.CONTENT.CHANGED
       && action.type !== ActionTypes.EDITOR.CONTENT.SET
       && action.type !== ActionTypes.EDITOR.BLUR
       && action.type !== ActionTypes.EDITOR.FOCUS
       && action.type !== ActionTypes.FIREBASE.DOC.FETCH
       && action.type !== ActionTypes.FIREBASE.USER.IMAGE_URL.FETCH
       && action.type !== ActionTypes.GALLERY.SCROLL_TOP.SET
       && action.type !== ActionTypes.GALLERY.TERMS.SET
       && action.type !== ActionTypes.EDITOR.CURSOR.MOVE
       && action.type !== ActionTypes.FIREBASE.CACHE.SET),
  collapsed: true
})

import { createStore, applyMiddleware } from 'redux'
import effects from 'redux-effects'


/**
 * Logs all actions and states after they are dispatched.
 */
//
//  function setInHelper(path, value, action){
//    return (dispatch, getState) => {
//      dispatch({type: action.type + '.REQUEST', payload: action.payload})
//      firebaseSetPromise(path, value)
//        .then(()=>{
//          dispatch({type: action.type + '.SUCCESS', payload: action.payload, firebase: {path, value}})
//        })
//        .catch((e)=>{
//          dispatch({type: action.type + '.FAILURE', payload: e})
//        })
//    }
//  }
//
// import firebase from './firebase'
// function firebaseSetPromise(path, value){
//   const fbPath = path.join('/')
//   return firebase.child(fbPath).set(value)
// }


// import { propsResolveThunk } from './middlewares'
//
// const MyLogger = store => next => action => {
//   if (action.then){
//     console.log('action', action.then, action.firebase)
//   }
//
//   if (action.firebase){
//     // console.log('firebase', action.firebase)
//     const result = next({type: action.type + '.REQUEST', payload: action.payload})
//     const {path, value} = action.firebase
//     firebaseSetPromise(path, value)
//       .then(()=>{
//         next({type:'FIREBASE.CACHE.SET', payload: {path, value}})
//         next({type: action.type + '.SUCCESS', payload: action.payload, firebase: {result: true, path, value}})
//         if (action.then){
//           next(action.then)
//         }
//       })
//       .catch((e)=>{
//         next({type: action.type + '.FAILURE', payload: e})
//       })
//     // }
//
//     return result
//
//   } else {
//     return next(action)
//   }
// }

const createStoreWithMiddleware = applyMiddleware(
  effects,
  timeout(),
  thunk, // lets us dispatch() functions
  logger,
)(createStore)

import reducer from './reducers'
let store = createStoreWithMiddleware(reducer)

// import {configure} from './configure-store'
// configure(store)

export default store
