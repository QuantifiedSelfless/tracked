export function articlesMarkReadLater(articleId){
  return { type: 'ARTICLES.MARK.READ_LATER', payload: articleId }
}
