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
    title: 'Cruz blames Trump and his henchmen for tabloid story',
    src: 'Fox News',
  },
  "-2ccasd": {
    title: "Sony to pay $750 million for Michael Jackson's stake in publishing venture",
    src: 'TechCrunch',
  },
  "-2asdcw": {
    title: "Why LeBron James' Cavaliers homecoming has taken a wrong turn",
    src: 'Fox News',
  },
  "-23sdcw": {
    title: "Easter Sunrise Service at Red Rocks canceled",
    src: 'CNN',
  },
  "-2d3dec" : {
    title: "Virtual reality is back with better graphics and processing power",
    src: 'CNN',
  },
  "-3csadc": {
    title: "American detained in North Korea says he's sorry for spying",
    src: 'TechCrunch',
  },
  "-3ccasd": {
    title: "Pakistan, Iran Aim to Enhance Trade, Border Security Ties",
    src: 'TechCrunch',
  },
  "-3asdcw": {
    title: "US says it hasn't changed position on Syria's Assad",
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
    title: "Amazon's Raspberry Pi guide lets coders use Alexa",
    src: 'TechCrunch',
  },
  "-4ccasd": {
    title: "Netflix Throttling Video Streams for (Most) Mobile Users",
    src: 'TechCrunch',
  },
  "-4asdcw": {
    title: "Cloud warriors led by Amazon, Microsoft battle for $300B in spoils",
    src: 'Fox News',
  },
  "-43sdcw": {
    title: "1.5M customers of Verizon anti-hacker unit hacked",
    src: 'CNN',
  },
  "-4d3dec" : {
    title: "Microsoft's gigantic, almost-forgotten $22000 Surface Hub touchscreen is now shipping",
    src: 'CNN',
  },
})

const actionHandlers = {
  'ROUTE.ENTER': (state, action) => {
      return Immutable.fromJS(action.payload)
  }
}

export default createReducer(initialState, actionHandlers)
