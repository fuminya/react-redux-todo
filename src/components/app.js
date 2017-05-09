import React from 'react';
import VisibleTodoList from '../containers/visibletodolist';
import AddTodo from './addtodo';

class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
            </div>
        );
    }
}

export default App;