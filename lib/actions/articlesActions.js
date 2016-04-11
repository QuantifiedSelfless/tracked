import $ from 'jquery'
export function articlesLoad(userid){

  return (dispatch) => {
    $.getJSON(`/data/${userid}-articles.json`)
    .done(json=> {
      dispatch({ type: 'ARTICLES.LOADED', payload: json })
    })
    .error(err =>{
      console.log('error', err)
    })
  }
}

export function eventsLoad(userid){

  return (dispatch) => {
    $.getJSON(`/data/${userid}-events.json`)
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
  return { type: 'ARTICLE.MARK.AS.SKIPPED', payload: articleId }
}
