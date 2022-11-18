import {legacy_createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => { // action creator가 있음. 
  return { 
    type: ADD_TODO, // objects를 return 하고 있음
    text
  };
};

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
    //store.dispatch({type: DELETE_TODO, id});
  };
};

const reducer = (state = [], action) => { // action에 type: ADD_TODO에 보내주고 있음
  //console.log(action);
  switch(action.type) {
    case ADD_TODO:
      const newToDoObj = {text: action.text, id: Date.now(action.id)};
      return [newToDoObj, ...state]; // 새로운 array를 만듬 -> 과거의 state와 새로운 TODO를 갖고 있게 됨
      // 이전 array의 컨텐츠로, 그리고 새로운 object로 array를 만듬
    case DELETE_TODO:
      const cleaned = state.filter(toDo => toDo.id !== action.id);
      return cleaned;
      //return state.filter(toDo => toDo.id !== action.id); // todo.id 는 action.id와 같으면 안됨
      // 1. 현재 코드는 state에 object를 삭제하고 있지 않고, 새로운 state를 만들고 있음
      // 2. 삭제할 object를 빼고 filter를 사용함
      // 삭제할 todo의 id에 해당하지 않는 todo들을 detele 처리
      // HTML로 부터 받아오는 id는 String 형태
      // return state.filter()를 하는것
    default:
      return state;
  };
};

const store = legacy_createStore(reducer);

//const toDos = [];
// ToDo를 만들면 array에 ToDo에 넣어줘야 함
// ToDo에 직접 지우고 싶으면 array에서 직접 지워야 함

/*const createToDo = toDo => {
  const li = document.createElement("li");
  li.innerHTML = toDo;
  ul.appendChild(li);
};*/

// store를 수정할 수 있는 유일한 방법은 action을 보내는 방법

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => { 
  store.dispatch(addToDo(text)); // function은 오로지 action을 dispatch하기 위한 용도
};

const dispatchDeleteToDo = e => {
  //store.dispatch({type: ADD_TODO, text})
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    //btn.type = "button";
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value; // toDo 변수는 여기 이 input값에서 할당 됨
  input.value = "";
  //createToDo(toDo);
  //store.dispatch({type: ADD_TODO, text: toDo});
  dispatchAddToDo(toDo);
  //dispatchAddToDo(toDo);
};
// input에서 얻은 텍스트를 인자로 보냄
// list item을 만들어 주고 list의 text를 받은 여기의 텍스트로 변경해줌

form.addEventListener("submit", onSubmit);
// 사용자가 submit을 할때, 리스트를 만들고 리스트 아이템들을 리스트에 넣어주는 createToDo를 호출하는 대신에 이걸 dispatch 시켜줌