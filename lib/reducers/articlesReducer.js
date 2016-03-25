import Immutable from 'immutable'
import { ActionTypes } from '../constants'
import _ from 'lodash'
import { createReducer } from 'redux-immutablejs'

const initialState = Immutable.fromJS({
  "-1csadc": {
    title: 'Trump Mortgage',
    src: 'TechCrunch',
  },
  "-dccasd": {
    title: "Sony to pay $750 million for Michael Jackson's stake in publishing venture",
    src: 'TechCrunch',
  },
  "-casdcw": {
    title: "ISIS 'minister of war' killed in US airstrike in Syria, defense official says",
    src: 'Fox News',
  },
  "-c3sdcw": {
    title: "Explosion rips apart car in Berlin; driver killed as officials open probe",
    src: 'CNN',
  },
  "-cd3dec" : {
    title: "Russia withdraws from Syria: What's next?",
    src: 'CNN',
  },
  "-2csadc": {
    title: 'Trump Mortgage',
    src: 'TechCrunch',
  },
  "-2ccasd": {
    title: "Sony to pay $750 million for Michael Jackson's stake in publishing venture",
    src: 'TechCrunch',
  },
  "-2asdcw": {
    title: "ISIS 'minister of war' killed in US airstrike in Syria, defense official says",
    src: 'Fox News',
  },
  "-23sdcw": {
    title: "Explosion rips apart car in Berlin; driver killed as officials open probe",
    src: 'CNN',
  },
  "-2d3dec" : {
    title: "Russia withdraws from Syria: What's next?",
    src: 'CNN',
  },
  "-3csadc": {
    title: 'Trump Mortgage',
    src: 'TechCrunch',
  },
  "-3ccasd": {
    title: "Sony to pay $750 million for Michael Jackson's stake in publishing venture",
    src: 'TechCrunch',
  },
  "-3asdcw": {
    title: "ISIS 'minister of war' killed in US airstrike in Syria, defense official says",
    src: 'Fox News',
  },
  "-33sdcw": {
    title: "Explosion rips apart car in Berlin; driver killed as officials open probe",
    src: 'CNN',
  },
  "-3d3dec" : {
    title: "Russia withdraws from Syria: What's next?",
    src: 'CNN',
  },
  "-4csadc": {
    title: 'Trump Mortgage',
    src: 'TechCrunch',
  },
  "-4ccasd": {
    title: "Sony to pay $750 million for Michael Jackson's stake in publishing venture",
    src: 'TechCrunch',
  },
  "-4asdcw": {
    title: "ISIS 'minister of war' killed in US airstrike in Syria, defense official says",
    src: 'Fox News',
  },
  "-43sdcw": {
    title: "Explosion rips apart car in Berlin; driver killed as officials open probe",
    src: 'CNN',
  },
  "-4d3dec" : {
    title: "Russia withdraws from Syria: What's next?",
    src: 'CNN',
  },
})

const actionHandlers = {
  'ROUTE.ENTER': (state, action) => {
      return Immutable.fromJS(action.payload)
  }
}

export default createReducer(initialState, actionHandlers)
