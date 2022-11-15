import {legacy_createStore} from "redux";
// Store는 data를 넣는 곳 -> state
// 리덕스는 data를 (관리하는데) 도와주는 역할을 하기 위해 만들어짐
// 데이터는 Store이라는 곳에 저장 되어야 (go on) 해야 됨

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


const countModifier = (count = 0, action) => {
  //... modify state
  // state를 argument(인자)로 가지게 됨
  console.log(action);
  if (action.type === "ADD") {
    //console.log("they are telling me to add one");
    return count + 1;
  } else if(action.type === "MINUS") {
    return count -1;
  } else {
    return 0;
  }
};
// data를 modify(찾고 수정하기)
// countModifier가 1을 리턴하면, 
// countModifier가 return하는 모든 것은, data가 됨

const countStore = legacy_createStore(countModifier);
// CreateStore는 reducer를 요구함
//console.log(countStore.getState());
// data의 store를 만들고 (create하고), message를 그 store에 보내면(전송하면) 됨

/*let count = 0;
number.innerText = count;

const updateText = () => {
  // 이 함수 updateText는 innertext = count
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updateText();
  // redux가 -1 +1을 count하는 걸 도와주기 위해 만들어진 것
};

const handleMinus = () => {
  count = count - 1;
  updateText();
  // updateText() 를 위의 두개의 함수 안에 부를 수 있고 (handleAdd와 handleMinus)
};*/

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

//console.log(countStore.getStete());
// reducer는 아주 중요

countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "MINUS"});
// store, dispatch, action을 말하면 리덕스가 countModifier를 부름

console.log(countStore.getState());