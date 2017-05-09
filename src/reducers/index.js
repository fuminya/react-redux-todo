
// reducerは単なる関数
// 現在のstateとactionを受け取り、新しいstateを返す

// todoというreducerを作成
// actionTypeがADD_TODOのとき、{id:action.id,text:action.text}という新しいstateを返す

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text
      }
    default:
      return state
  }
};
export default todo;