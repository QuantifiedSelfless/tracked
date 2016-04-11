function mapStateToProps(state){
  return {
    events: state.events
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
