
// actionTodoというatcionCreatorを作成する
// actionCreatorは純粋な関数であり、actionを発行するのみ
// actionはactionTypeとデータで構成されるオブジェクト

// actionTypeはADD_TODO
// データはidとtext

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const dragStartTodo = (id) => {
  return {
    type: 'DRAGSTART_TODO',
    id
  }
}

export const dragEndTodo = (id) => {
  return {
    type: 'DRAGEND_TODO',
    id
  }
}
