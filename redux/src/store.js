import {legacy_createStore} from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = text => {
    return {
        type: ADD,
        text
    };
};

export const deleteToDo = id => {
    return {
        type: DELETE,
        id
    };
};

const reducer = (state = [], action) => { // 현재의 state는 비어있는 array
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case  DELETE:
            return state.filter(toDo => toDo !== action.id);
        default:
            return state;    
    }
}

const store = legacy_createStore(reducer);

// action creator을 만들고
// store.subscribe() function을 사용
// 우리의 Application을 다시 render하고 싶음
// react은 모든 부분을 render해주지 않음 -> 대신 변화가 있는 부분을 render해주면 됨
// 그래서 subscribe를 하기 위해서 "redux-react" 가 필요한 시점
// 왜냐하면 store의 변동사항에 대해 subscribe 하고 싶음
// 그래서 모든 부분이 다시 render 되기를 원함
export default store;

export const actionCreators = {
    addToDo,
    deleteToDo
};

/*store.getState()
// 현재의 state를 전달해줌*/