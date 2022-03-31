let questionCounter = 0;
let nextCount = 0;
let score = 0;
let currentQue;
let availableQue = [];
let availableOpt = [];
let correct;
const optContainer = document.querySelector(".options");
const queText = document.querySelector(".question");
const scored = document.querySelector(".score");
const button = document.querySelector("button");
const bubbble = document.querySelector("#bubble");

//importing functions as modules from modules folder
const setQuestion = require('./modules/setQuestion.js');
setQuestion();

const setNewQuestion = require('./modules/getNewQuestion.js');
setNewQuestion();

function getResult(element, ans) {
    const optionChose = element.id;
    if (optionChose == ans) {
        // styling green, score++, or 
        element.classList.add("correct");
        score++;
        scored.innerHTML = score + " out of 5";
    } else {
        // style red
        element.classList.add("wrong");
        // To show the correct answer along
        const optLen = optContainer.children.length;
        for (let i = 0; i < optLen; i++) {
            if (optContainer.children[i].id == ans) {
                optContainer.children[i].classList.add("correct");
            }
        }
    }
    restrictClick();
}

function restrictClick() {
    const optRegionLen = optContainer.children.length;
    for (let i = 0; i < optRegionLen; i++) {
        optContainer.children[i].classList.add("already-clicked");
    }
}

function next() {
    nextCount++;
    queText.style.opacity = "0";
    setTimeout(() => {
        queText.style.opacity = "100";

        if (questionCounter === 5) {
            menu();
            queText.style.opacity = "0";
            button.style.opacity = "0";
            setTimeout(() => {
                queText.innerHTML = "You've Finished The Game!";
                queText.style.opacity = "100";
                optContainer.innerHTML = "";
            }, 1000);
            setTimeout(() => {
                button.style.opacity = "100";
            }, 2000);
            button.innerHTML = "Restart";
            button.removeAttribute("onclick", "next()");
            button.setAttribute("onclick", "reload()");
        } else {
            getNewQuestion();
        }
    }, 1000);

}

function reload() {
    window.location.reload();
}

window.onload = function () {
    setQuestion();
    getNewQuestion();
}