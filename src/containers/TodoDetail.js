import { connect } from 'react-redux';
import Detail from '../components/Detail';

const mapStateToProps = (state) => ({
    todo: state.selectedTodo
})

export default connect(mapStateToProps, null)(Detail)