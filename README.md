# Metaschool-auto-solver-test
A browser console script that automatically selects correct answers on Metaschool test pages.
Usage
Open the test page (e.g., https://metaschool.ru/pub/test/index.php?testId=21)

Open browser console (F12 → Console tab)

Copy and paste the script

Press Enter

Code
function extractCorrectAnswers() {
    const answers = {};
    document.querySelectorAll('input[type="hidden"][name^="inputCorrectAnswerId"]').forEach(input => {
        const problemNumber = input.name.match(/inputCorrectAnswerId(\d+)/)[1];
        const correctAnswerId = input.value;
        const radioInput = document.querySelector(`input[name="inputAnswerId${problemNumber}"][value="${correctAnswerId}"]`);
        if (radioInput) {
            answers[problemNumber] = {
                answerId: correctAnswerId,
                radioId: radioInput.id
            };
        }
    });
    return answers;
}

function autoSelectCorrectAnswers() {
    const correctAnswers = extractCorrectAnswers();
    Object.keys(correctAnswers).forEach(problemNumber => {
        const radioInput = document.getElementById(correctAnswers[problemNumber].radioId);
        if (radioInput && !radioInput.checked) {
            radioInput.checked = true;
        }
    });
    return Object.keys(correctAnswers).length;
}

function autoSubmitForm() {
    const submitButton = document.querySelector('button[onclick="Navigation.NextButtonClick()"]');
    if (submitButton) {
        submitButton.click();
        return true;
    }
    return false;
}

function autoCompleteTest() {
    autoSelectCorrectAnswers();
    setTimeout(() => {
        autoSubmitForm();
    }, 100);
}

autoCompleteTest();
Note
For educational purposes only.
