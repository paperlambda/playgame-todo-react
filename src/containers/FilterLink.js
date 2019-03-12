import { connect } from 'react-redux';

import { setFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filterOption
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleClick: () => dispatch(setFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link);