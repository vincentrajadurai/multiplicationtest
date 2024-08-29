const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

let num1 = Math.ceil(Math.random()*10);
let num2 = Math.ceil(Math.random()*10);


questionEl.innerText = `${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}

formEl.addEventListener("submit" , ()=>{
    const userAns = +inputEl.value
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }else{
        score--;
        updateLocalStorage();
    }
})


function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

scoreEl.innerText = `Your Score is: ${score}`;