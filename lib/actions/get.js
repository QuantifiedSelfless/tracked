import $ from 'jquery'

const DO_NOT_CONNECT_TO_BACKEND = false

// our own get() function, this allows us to mock quantifiedselfbackend.local
// for test user 'test12345'
export default function get(url){

  const isThisATestUser = url.match(/userid=test12345/)

  if (isThisATestUser) {

    // redirect to a static hosted mock data file
    return $.getJSON('/data/guest-messages.json')

  } else {
    return $.getJSON(url)
  }
}
