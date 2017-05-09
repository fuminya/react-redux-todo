import { connect } from 'react-redux';
import TodoList from '../components/todolist';

const mapStateToProp = (state) => {
    return { todos: state.todos }
}

const VisibleTodoList = connect(
    mapStateToProp
)(TodoList);

export default VisibleTodoList;