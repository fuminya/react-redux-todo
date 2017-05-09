import React, { PropTypes } from 'react';
import Todo from './todo';

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo) =>
                    <Todo
                        key={todo.id}
                        {...todo}
                    />
                )}
            </ul>
        );
    }
}

TodoList.PropTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default TodoList;