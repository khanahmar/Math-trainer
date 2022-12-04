const ques = document.querySelector(".question");
const ans = document.querySelector(".ans");
const submit = document.querySelector(".submit");
const tell = document.querySelector(".desc");
const newQues = document.querySelector(".new");

let ops = "*/+-";
let opindex = Math.random() * 4;
let operator = ops.charAt(opindex);

let num1 = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);

ques.innerHTML = `What is the answer of ( ${num1} ${operator} ${num2} )`;
resultEv = eval(`${num1} ${operator} ${num2}`);
resultEv = Math.floor(resultEv);

newQues.addEventListener("click", (e) => {
  window.location.reload();
});

submit.addEventListener("click", (e) => {
  tell.classList.remove("desc-wrong");
  tell.classList.remove("desc-right");
  if (ans.value == resultEv) {
    tell.innerHTML = "Your answer is right";
    tell.classList.add("desc-right");
    ans.value = "";
  } else {
    tell.innerHTML = `Your answer is wrong the answer is ${resultEv}`;
    tell.classList.add("desc-wrong");
    ans.value = "";
  }
});
