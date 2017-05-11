import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {
    render() {
        let element;
        // propとして渡って来たtextを表示するだけ
        return (
            <li style={{backgroundColor: this.props.drag ? 'red' : 'white'}}
            onDragStart={() => {this.props.onDragStart(this.props.id)}}
            onDragEnd={() => {
                this.props.onDragEnd(this.props.id);
                console.log(element);
            }}
            draggable="true"
            ref={(node) => {
                element = node;
            }}>
                {this.props.text}
            </li>
        );
    }
}

Todo.PropTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;