const setQuestion = () {
    const totalQue = quiz.length;
    for (let i = 0; i < totalQue; i++) {
        availableQue.push(quiz[i]);
    }
}

module.exports = setQuestion;