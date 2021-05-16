const correct = document.querySelector(".correct");
const wrong = document.querySelector(".wrong");

const container = document.querySelector(".container");
const ques1 = document.getElementById("ques1");
const ques2 = document.getElementById("ques2");
const ques3 = document.getElementById("ques3");
const ques4 = document.getElementById("ques4");
const ques5 = document.getElementById("ques5");

const main_page = document.getElementById("main");



container.style.display ="none";

correct.onclick= () => {
correct.classList.add("correct");
points += 20;
}

wrong.onclick = () => {
wrong.classList.add("wrong");
points -= 10;
}
