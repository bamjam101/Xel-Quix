const getNewQuestion = () {
    const questionIndex = availableQue[Math.floor(Math.random() * availableQue.length)]
    currentQue = questionIndex;
    // Set the question on webpage using innerHTML
    queText.innerHTML = currentQue.q;
    // Set respective theme bubble
    bubbble.style.opacity = "0";

    setTimeout(() => {
        bubbble.setAttribute("src", currentQue.theme);
    }, 200);
    setTimeout(() => {
        bubbble.style.opacity = "30%";
    }, 1500);
    // index of current question, position in availableQue array
    const indexSlice = availableQue.indexOf(questionIndex);
    // slice out the asked question to avoid repetition
    availableQue.splice(indexSlice, 1);
    // optionCode
    const optionLen = currentQue.option.length;

    for (let i = 0; i < optionLen; i++) {
        availableOpt.push(i);
    }
    optContainer.innerHTML = '';
    // What is correct option?
    correct = currentQue.ans;
    // set the options randomly
    for (let i = 0; i < optionLen; i++) {
        const optIndex = availableOpt[Math.floor(Math.random() * availableOpt.length)];
        const optSlice = availableOpt.indexOf(optIndex);
        availableOpt.splice(optSlice, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQue.option[optIndex];
        option.id = optIndex;
        option.className = "box";
        // option.style.animationDelay = "0.2s";
        optContainer.appendChild(option);
        option.setAttribute("onclick", "getResult(this, correct)")
    }
    questionCounter++;
}

module.exports = getNewQuestion;