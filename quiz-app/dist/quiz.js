export class Quiz {
    constructor(questions = []) {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.questions = questions;
        this.attachEventListeners();
    }
    attachEventListeners() {
        var _a, _b, _c;
        (_a = this.startButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.startQuiz.bind(this));
        (_b = this.nextButton) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.onNext.bind(this));
        (_c = this.endButton) === null || _c === void 0 ? void 0 : _c.addEventListener('click', this.onEnd.bind(this));
    }
    get startButton() {
        return document.getElementById('start');
    }
    get nextButton() {
        return document.getElementById('next');
    }
    get endButton() {
        return document.getElementById('end');
    }
    get questionContainer() {
        return document.getElementById('question-container');
    }
    get resultContainer() {
        return document.getElementById('result');
    }
    showElement(element) {
        if (element) {
            element.style.display = "block";
        }
    }
    hideElement(element) {
        if (element) {
            element.style.display = "none";
        }
    }
    loadQuiz() {
        this.hideElement(this.nextButton);
        this.hideElement(this.endButton);
        this.hideElement(this.questionContainer);
        this.hideElement(this.resultContainer);
    }
    startQuiz() {
        this.hideElement(this.startButton);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.loadQuestion();
    }
    onSubmit(ev, currentQuestion) {
        var _a, _b;
        ev.preventDefault();
        const formElement = ev.target;
        const formData = new FormData(formElement);
        const selectedAnswer = parseInt(formData.get('answerIndex'), 10);
        if (isNaN(selectedAnswer)) {
            alert("Please select an answer!");
            return;
        }
        if (selectedAnswer >= 0) {
            const resultTextElement = document.createElement("p");
            resultTextElement.classList.add("result-text");
            const isCorrect = selectedAnswer === Number(currentQuestion.correctAnswer);
            const selectedAnswerDiv = (_a = formElement.querySelector(`#option${selectedAnswer}`)) === null || _a === void 0 ? void 0 : _a.parentElement;
            const correctAnswerDiv = (_b = formElement.querySelector(`#option${currentQuestion.correctAnswer}`)) === null || _b === void 0 ? void 0 : _b.parentElement;
            if (isCorrect) {
                this.score++;
                resultTextElement.innerText = "Your answer is correct!";
                resultTextElement.classList.add("correct-text");
                selectedAnswerDiv === null || selectedAnswerDiv === void 0 ? void 0 : selectedAnswerDiv.classList.add("correct-answer");
            }
            else {
                resultTextElement.innerText = "Your answer is incorrect!";
                resultTextElement.classList.add("wrong-text");
                selectedAnswerDiv === null || selectedAnswerDiv === void 0 ? void 0 : selectedAnswerDiv.classList.add("wrong-answer");
                correctAnswerDiv === null || correctAnswerDiv === void 0 ? void 0 : correctAnswerDiv.classList.add("correct-answer");
            }
            formElement.appendChild(resultTextElement);
            this.hideElement(formElement.querySelector("#submit"));
            if (this.currentQuestionIndex + 1 == this.questions.length) {
                this.showElement(this.endButton);
            }
            else {
                this.showElement(this.nextButton);
            }
        }
    }
    onNext() {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
        }
        else {
            return;
        }
        this.hideElement(this.nextButton);
    }
    onEnd() {
        if (this.resultContainer) {
            this.hideElement(this.questionContainer);
            this.hideElement(this.endButton);
            const resultHTML = `
                <h2>Your final score is</br>${this.score}/${this.questions.length}</h2>
                <button id="reset-button" type="button">Play again</button>
            `;
            this.resultContainer.innerHTML = resultHTML;
            const resetButton = document.getElementById("reset-button");
            resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', this.onReset.bind(this));
            this.showElement(this.resultContainer);
        }
    }
    onReset() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        if (this.startButton) {
            this.hideElement(this.resultContainer);
            this.showElement(this.startButton);
        }
    }
    loadQuestion() {
        var _a;
        if (this.questionContainer) {
            if (!this.questions || this.questions.length === 0) {
                const textHTML = document.createElement("h2");
                textHTML.innerText = "No questions available!";
                (_a = document.getElementById('quiz-container')) === null || _a === void 0 ? void 0 : _a.appendChild(textHTML);
                return;
            }
            if (this.currentQuestionIndex >= this.questions.length) {
                console.error(`Index out of bounds: currentQuestionIndex=${this.currentQuestionIndex}`);
                return;
            }
            const currentQuestion = this.questions[this.currentQuestionIndex];
            const formElementHTML = `
                <form id="question-form" method="get">
                    <h2 class="question-number">Question ${currentQuestion.id}/${this.questions.length}</h2>
                    <h3 class="question-text">${currentQuestion.question}</h3>
                    <div class='option-container'>
                        ${currentQuestion.options
                .map((option, index) => `
                                <div class="option-div"  onclick="document.getElementById('option${index}').checked = true">
                                    <input type="radio" id="option${index}" class="option-input" name="answerIndex" value="${index}">
                                    <label for="option${index}">${option.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</label>
                                </div>`).join('')}
                    </div>
                    <button type="submit" id="submit" style="display: block;">Submit</button>
                </form>
            `;
            this.questionContainer.innerHTML = formElementHTML;
            const formElement = document.getElementById("question-form");
            if (formElement) {
                formElement.addEventListener('submit', (ev) => this.onSubmit(ev, currentQuestion));
            }
            this.showElement(this.questionContainer);
        }
    }
}
