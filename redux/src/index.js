const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  // 이 함수 updateText는 innertext = count
  number.innerText = count;
}

const handleAdd = () => {
  count = count + 1;
  updateText();
  // 
};

const handleMinus = () => {
  count = count - 1;
  updateText();
  // updateText() 를 위의 두개의 함수 안에 부를 수 있고 (handleAdd와 handleMinus)
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);