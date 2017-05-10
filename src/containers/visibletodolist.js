import { connect } from 'react-redux';
import TodoList from '../components/todolist';
import { dragStartTodo, dragEndTodo } from '../actions';

const mapStateToProp = (state) => {
    return { todos: state.todos }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoDragStart: (id) => {
            console.log('*** DRAG_START ***');
            dispatch(dragStartTodo(id));
        },
        onTodoDragEnd: (id) => {
            console.log('*** DRAG_END ***');
            dispatch(dragEndTodo(id));            
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProp,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;