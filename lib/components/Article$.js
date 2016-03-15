// import { isDocLoading, isDocWritable,
//   activeDocTitleSelector,
//   activeDocOwnerIdSelector,
//   activeDocUrlSelector,
//   userUsernameSelector
//  } from '../../selectors'
// import { editorOpen, editorClose } from '../../actions/editorActions'

function mapStateToProps(state, {articleId}){
  return {
    article: state.articles.get(articleId)
  }
}

const actionCreators = {
}

// Common Boilerplate
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}
export default _.partial(connect, mapStateToProps, mapDispatchToProps)
