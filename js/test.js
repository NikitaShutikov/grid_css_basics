const answers = [
    [2,3,3,3,2],
    [1,2,1,1,3],
    [2,2,1,2,2],
    [2,3,2,1,3],
    [2,3,3,2,1],
    [2,1,2,2,2],
    ]

function checkAnswers(testNum) {

    var question_list_name = `test${testNum}`;
    var score = 0;
    for(let i=1; i<=5; i++){
            var selectedAnswer = document.querySelector(`#${question_list_name}_${i} input[type="radio"]:checked`);
            if(selectedAnswer){
            score += selectedAnswer.value == answers[testNum][i-1];
            }

    }
    var mark = 0;
    if (score < 3) {
        mark = 2;
    } else if (score >= 3 && score <= 4) {
        mark = 3;
    } else if (score >= 4 && score < 5) {
        mark = 4;
    } else if (score === 5) {
        mark = 5;
    }
    displayResultMessage(`Ваш результат: ${score} из 5. Оценка: ${mark}`, score == 5, testNum);
}

function displayResultMessage(message, isSuccess, testNum) {
    var resultAlert = document.getElementById(`resultAlert_${testNum}`);
    resultAlert.textContent = message;
    resultAlert.className = 'alert';
    if (isSuccess) {
        resultAlert.classList.add('alert-success');
    } else {
        resultAlert.classList.add('alert-danger');
    }

    resultAlert.style.display = 'block';
}