import {legacy_createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
  return {
    type: ADD_TODO, 
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

const reducer = (state = [], action) => {
  //console.log(action);
  switch(action.type) {
    case ADD_TODO:
      return [{text: action.text, id: Date.now()}, ...state]; // 새로운 array를 만듬 -> 과거의 state와 새로운 TODO를 갖고 있게 됨
      // 이전 array의 컨텐츠로, 그리고 새로운 object로 array를 만듬
    case DELETE_TODO:
      return [];
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
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = e => {
  //store.dispatch({type: ADD_TODO, text})
  const id = e.target.parentNode.id;
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