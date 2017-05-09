import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import todo from './reducers'
import { addTodo } from './actions'
import App from './components/app';

// storeはアプリケーションで単一のもので、stateを保持
// storeを作成する
let store = createStore(todo);

/** ここから確認 **/
// action -> reducer -> storeの流れを確認する
// stateを更新
store.dispatch(addTodo('Hello World!'));
// reducerによって更新されたstateを確認
console.log(store.getState());
/** ここまで確認用 **/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);