import { articlesMarkAsUnread, articlesMarkAsReadLater, articlesMarkAsSkipped, articleSetActive } from '../actions'

function mapStateToProps(state, {articleId}){
  const article = state.articles.get(articleId)
  return {
    article,
    label: article.get('label'),
    isActive: state.articles.get(articleId).get('active')
  }
}

function mapDispatchToProps(dispatch, {articleId}) {
  const actionCreators = {
    markAsUnread: () => articlesMarkAsUnread(articleId),
    markAsReadLater: () => articlesMarkAsReadLater(articleId),
    markAsSkipped: () => articlesMarkAsSkipped(articleId),
    setActive: (value) => articleSetActive(articleId, value)
  }
  return bindActionCreators(actionCreators, dispatch)
}

// Common Boilerplate
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
export default _.partial(connect, mapStateToProps, mapDispatchToProps)
