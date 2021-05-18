
const correct = document.querySelector(".correct");
const wrong = document.querySelector(".wrong");

const container = document.querySelector(".container");
//const ques1 = document.querySelector(".ques1").style.display = "none";
const ques2 = document.getElementsByClassName("ques2");
const ques3 = document.getElementsByClassName("ques3");
const ques4 = document.getElementsByClassName("ques4");
const ques5 = document.getElementsByClassName("ques5");


//const btn_ques1 = document.getElementsByClassName("btnques1");
const btn_ques2 = document.getElementsByClassName("btnques2");
const btn_ques3 = document.getElementsByClassName("btnques3");
const btn_ques4 = document.getElementsByClassName("btnques4");
const btn_ques5 = document.getElementsByClassName("btnques5");
const page = document.getElementsByClassName("page")
const main_page = document.getElementById("main");
const play = document.getElementById("Play");
const game = document.getElementsByClassName("game");



correct.onclick = function(){
  points += 20;
  console.log(points);
}

wrong.onclick = function(){
  points -= 10;
  console.log(points)
}

function start(){
  console.log("hello world");
  document.getElementById("page").style.display = "none";
  document.getElementById("game").style.display = "block";

document.querySelector(".btn_ques1").style.display = "block";


}
