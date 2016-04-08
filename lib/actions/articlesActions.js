import $ from 'jquery'
export function articlesLoad(){

  return (dispatch) => {
    $.getJSON('/data/amelia.json')
    .done(json=> {
      dispatch({ type: 'ARTICLES.LOADED', payload: json })
    })
    .error(err =>{
      console.log('error', err)
    })
  }
}

export function eventsLoad(){

  return (dispatch) => {
    $.getJSON("/data/amelia-events.json")
    .done((json)=>{
      dispatch({ type: 'EVENTS.LOADED', payload: json })
    })
    .error((err)=>{
      console.log('error',err)
    })
  }
}

export function articlesMarkAsUnread(articleId){
  return { type: 'ARTICLES.MARK.AS.UNREAD', payload: articleId }
}

export function articlesMarkAsReadLater(articleId){
  return (dispatch, getState) => {
      dispatch({ type: 'ARTICLES.MARK.AS.READ_LATER', payload: articleId })

      const article = getState().articles.get(articleId)
      const event = {
        description: `You wanted to read ${article.get('title')}`,
        type: 'out',
        company: article.get('src'),
        createdAt: Date.now()
      }

      dispatch({ type: 'EVENTS.ADD', payload: event })
  }

}

export function articlesMarkAsSkipped(articleId){
  return { type: 'ARTICLES.MARK.AS.SKIPPED', payload: articleId }
}
