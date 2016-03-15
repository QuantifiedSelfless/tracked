export function articlesMarkAsUnread(articleId){
  return { type: 'ARTICLES.MARK.AS.UNREAD', payload: articleId }
}

export function articlesMarkAsReadLater(articleId){
  return { type: 'ARTICLES.MARK.AS.READ_LATER', payload: articleId }
}

export function articlesMarkAsSkipped(articleId){
  return { type: 'ARTICLES.MARK.AS.SKIPPED', payload: articleId }
}
