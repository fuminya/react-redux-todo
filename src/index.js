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

/** ここから確認 **/
// action -> reducer -> storeの流れを確認する
// stateを更新
store.dispatch(addTodo('Hello World!'));
store.dispatch(addTodo('hello world!'));
// reducerによって更新されたstateを確認
console.log(store.getState());
/** ここまで確認 **/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);