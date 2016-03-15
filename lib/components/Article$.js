// import { isDocLoading, isDocWritable,
//   activeDocTitleSelector,
//   activeDocOwnerIdSelector,
//   activeDocUrlSelector,
//   userUsernameSelector
//  } from '../../selectors'
import { articlesMarkAsUnread, articlesMarkAsReadLater, articlesMarkAsSkipped } from '../actions'

function mapStateToProps(state, {articleId}){
  return {
    article: state.articles.get(articleId)
  }
}

function mapDispatchToProps(dispatch, {articleId}) {
  const actionCreators = {
    markAsUnread: () => articlesMarkAsUnread(articleId),
    markAsReadLater: () => articlesMarkAsReadLater(articleId),
    markAsSkipped: () => articlesMarkAsSkipped(articleId)
  }
  return bindActionCreators(actionCreators, dispatch)
}

// Common Boilerplate
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
export default _.partial(connect, mapStateToProps, mapDispatchToProps)
