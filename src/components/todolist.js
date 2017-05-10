import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo) =>
                    <Todo
                        key={todo.id}
                        {...todo}
                        onDragStart={() => this.props.onTodoDragStart(todo.id)}
                        onDragEnd={() => this.props.onTodoDragEnd(todo.id)}
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