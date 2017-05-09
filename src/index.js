import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import todos from './reducers'
import { addTodo } from './actions'
import App from './components/app';

// storeはアプリケーションで単一のもので、stateを保持
// storeを作成する
let store = createStore(todos);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);