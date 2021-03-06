import get from './get'

export function articlesLoad(type, userid){

  const url = userid === 'amelia' ? `/data/amelia-articles.json` : `/data/guest-articles.json`

  return (dispatch) => {
    get(url)
    .done(json=> {
      dispatch({ type: 'ARTICLES.LOADED', payload: json })
    })
    .error(err =>{
      console.log('error', err)
    })
  }
}

export function messagesLoad(userid){

  const url = userid === 'amelia' ? `/data/amelia-messages.json` :
    `http://quantifiedselfbackend.local:6060/tracked_processor/tracking?rfid=${userid}`

  return (dispatch) => {
    get(url)
    .done(json=> {
      const messages = json.data.messages
      dispatch({ type: 'MESSAGES.LOADED', payload: messages })
    })
    .error(err =>{
      console.log('error', err)
    })
  }
}

export function eventsLoad(userid){

  const url = userid === 'amelia' ? `/data/amelia-events.json` :
    `/data/guest-events.json`

  return (dispatch) => {
    get(url)
    .done((json)=>{
      dispatch({ type: 'EVENTS.LOADED', payload: json })
    })
    .error((err)=>{
      console.log('error',err)
    })
  }
}

export function articleSetActive(articleId, value){
  return { type: 'ARTICLE.SET.ACTIVE', payload: {id: articleId, value} }
}

export function articlesMarkAsUnread(articleId){
  return { type: 'ARTICLE.MARK.AS.UNREAD', payload: articleId }
}




export function articlesMarkAsReadLater(articleId){
  return (dispatch, getState) => {
      dispatch({ type: 'ARTICLE.MARK.AS.READ_LATER', payload: articleId })

      const article = getState().articles.get(articleId)

      let description
      if (article.get('type') === 'message'){
        description = 'Your cookie was updated with 15 trackers'
      } else {
        description = `You said you wanted to read: ${article.get('title')}`
      }

      const event = {
        description,
        type: 'out',
        company: 'designcraft',
        createdAt: Date.now()
      }

      dispatch({ type: 'EVENTS.ADD', payload: event })

      const simulateInformationSell = () => {

        const money = ((10 + 5 * Math.random()) / 100000).toFixed(8)

        const event = {
          description: `Your information is sold for ${money} cents.`,
          type: 'out',
          company: 'designcraft',
          createdAt: Date.now()
        }
        dispatch({ type: 'EVENTS.ADD', payload: event })

      }

      simulateInformationSell()

  }

}

export function articlesMarkAsSkipped(articleId){
  return { type: 'ARTICLE.MARK.AS.SKIPPED', payload: articleId }
}
