import React from 'react';
import VisibleTodoList from '../containers/visibletodolist';

class App extends React.Component {
    render() {
        return (
            <div>
               <VisibleTodoList />
            </div>
        );
    }
}

export default App;