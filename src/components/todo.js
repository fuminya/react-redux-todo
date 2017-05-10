import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    render() {
        // propとして渡って来たtextを表示するだけ
        return (
            <li style={{backgroundColor: this.props.drag ? 'red' : 'white'}}
            onDragStart={this.props.onDragStart}
            onDragEnd={this.props.onDragEnd}
            draggable="true">
                {this.props.text}
            </li>
        );
    }
}

Todo.PropTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;