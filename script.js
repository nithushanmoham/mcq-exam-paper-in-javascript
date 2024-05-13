function calculateMarks() {
    let totalQuestions = 10;
    let marks = 0;

    for (let i = 1; i <= totalQuestions; i++) {
        let selectedOption = document.querySelector('input[name="q' + i + '"]:checked');

        if (selectedOption) {
            if (selectedOption.value === getCorrectAnswer(i)) {
                marks++;
            }
        }
    }

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = "You scored " + marks + " out of " + totalQuestions;
}

function getCorrectAnswer(questionNumber) {
    switch (questionNumber) {
        case 1:
            return "30";
        case 2:
            return "4";
        case 3:
            return "Hyber Text Markup Language";
        case 4:
            return "Sinhala";
        case 5:
            return "Artificial Intelligence";
        case 6:
            return "15";
        case 7:
            return "Charles Babbage";
        case 8:
            return "PYTHON";
        case 9:
            return "Dennis Ritchie";
        case 10:
            return "Guide Van Rossum";

        default:
            return "";
    }
}
