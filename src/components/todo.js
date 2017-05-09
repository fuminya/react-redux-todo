import React, { PropTypes } from 'react';

class Todo extends React.Component {
    render() {
        // propとして渡って来たtextを表示するだけ
        return (
            <li>
                {this.props.text}
            </li>
        );
    }
}

Todo.PropTypes = {
  text: PropTypes.string.isRequired  
};

export default Todo;