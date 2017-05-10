
// reducerは単なる関数
// 現在のstateとactionを受け取り、新しいstateを返す

// todoというreducerを作成
// actionTypeがADD_TODOのとき、{id:action.id,text:action.text}という新しいstateを返す

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
        return {
            id: action.id,
            text: action.text,
            drag: false
        }
    case 'DRAGSTART_TODO':
        if (state.id !== action.id){
            return state;
        }
        return Object.assign({}, state, {
            drag: true
        });
    case 'DRAGEND_TODO':
        if (state.id !== action.id){
            return state;
        }
        return Object.assign({}, state, {
            drag: false
        });
    default:
        return state;
  }
};

// 複数のtodoを保持するtodosを作成

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                // ...はスプレッド演算子
                ...state,
                todo(undefined, action)
            ];
        case 'DRAGSTART_TODO':
        case 'DRAGEND_TODO':
            return state.map((t)=>
                todo(t, action)
            );
        default:
            return state;
    }
}


export default todos;