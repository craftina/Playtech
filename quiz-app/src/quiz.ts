import { Question } from "./models/Question";

export class Quiz {
    private questions: Question[];
    private currentQuestionIndex: number = 0;
    private score: number = 0;

    constructor(questions: Question[] = []) {
        this.questions = questions;
        this.attachEventListeners();
    }

    private attachEventListeners(): void {
        this.startButton?.addEventListener('click', this.startQuiz.bind(this));
        this.nextButton?.addEventListener('click', this.onNext.bind(this));
        this.endButton?.addEventListener('click', this.onEnd.bind(this));
    }

    private get startButton(): HTMLElement | null {
        return document.getElementById('start');
    }

    private get nextButton(): HTMLElement | null {
        return document.getElementById('next');

    }

    private get endButton(): HTMLElement | null {
        return document.getElementById('end');
    }

    private get questionContainer(): HTMLElement | null {
        return document.getElementById('question-container');
    }

    private get resultContainer(): HTMLElement | null {
        return document.getElementById('result');
    }

    private showElement(element: HTMLElement | null): void {
        if (element) {
            element.style.display = "block";
        }
    }

    private hideElement(element: HTMLElement | null): void {
        if (element) {
            element.style.display = "none";
        }
    }

    loadQuiz(): void {
        this.hideElement(this.nextButton);
        this.hideElement(this.endButton);
        this.hideElement(this.questionContainer);
        this.hideElement(this.resultContainer);
    }

    startQuiz(): void {
        this.hideElement(this.startButton);
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.loadQuestion();
    }

    onSubmit(ev: Event, currentQuestion: Question): void {
        ev.preventDefault();
        const formElement = ev.target as HTMLFormElement;
        const formData: FormData = new FormData(formElement);
        const selectedAnswer = parseInt(formData.get('answerIndex') as string, 10);

        if (isNaN(selectedAnswer)) {
            alert("Please select an answer!");
            return;
        }

        if (selectedAnswer >= 0) {
            const resultTextElement: HTMLElement = document.createElement("p");
            resultTextElement.classList.add("result-text");
            const isCorrect: Boolean = selectedAnswer === Number(currentQuestion.correctAnswer);
            const selectedAnswerDiv = formElement.querySelector(`#option${selectedAnswer}`)?.parentElement;
            const correctAnswerDiv = formElement.querySelector(`#option${currentQuestion.correctAnswer}`)?.parentElement;

            if (isCorrect) {
                this.score++;
                resultTextElement.innerText = "Your answer is correct!";
                resultTextElement.classList.add("correct-text");
                selectedAnswerDiv?.classList.add("correct-answer");

            } else {
                resultTextElement.innerText = "Your answer is incorrect!"
                resultTextElement.classList.add("wrong-text");
                selectedAnswerDiv?.classList.add("wrong-answer");
                correctAnswerDiv?.classList.add("correct-answer");
            }

            formElement.appendChild(resultTextElement);
            this.hideElement(formElement.querySelector("#submit"));

            if (this.currentQuestionIndex + 1 == this.questions.length) {
                this.showElement(this.endButton);
            } else {
                this.showElement(this.nextButton);
            }
        }
    }

    onNext(): void {
        if (this.currentQuestionIndex < this.questions.length - 1) {
            this.currentQuestionIndex++;
            this.loadQuestion();
        } else {
            return;
        }
        this.hideElement(this.nextButton);
    }

    onEnd(): void {
        if (this.resultContainer) {
            this.hideElement(this.questionContainer);
            this.hideElement(this.endButton);
            const resultHTML = `
                <h2>Your final score is</br>${this.score}/${this.questions.length}</h2>
                <button id="reset-button" type="button">Play again</button>
            `
            this.resultContainer.innerHTML = resultHTML;
            const resetButton = document.getElementById("reset-button");
            resetButton?.addEventListener('click', this.onReset.bind(this));
            this.showElement(this.resultContainer);
        }
    }

    onReset(): void {
        this.currentQuestionIndex = 0;
        this.score = 0;

        if (this.startButton) {
            this.hideElement(this.resultContainer);
            this.showElement(this.startButton);
        }
    }

    loadQuestion(): void {
        if (this.questionContainer) {
            if (!this.questions || this.questions.length === 0) {
                const textHTML = document.createElement("h2");
                textHTML.innerText = "No questions available!";
                document.getElementById('quiz-container')?.appendChild(textHTML);
                return;
            }

            if (this.currentQuestionIndex >= this.questions.length) {
                console.error(`Index out of bounds: currentQuestionIndex=${this.currentQuestionIndex}`);
                return;
            }

            const currentQuestion: Question = this.questions[this.currentQuestionIndex];
            const formElementHTML: HTMLFormElement | string = `
                <form id="question-form" method="get">
                    <h2 class="question-number">Question ${currentQuestion.id}/${this.questions.length}</h2>
                    <h3 class="question-text">${currentQuestion.question}</h3>
                    <div class='option-container'>
                        ${currentQuestion.options
                    .map((option: string, index: number) => `
                                <div class="option-div"  onclick="document.getElementById('option${index}').checked = true">
                                    <input type="radio" id="option${index}" class="option-input" name="answerIndex" value="${index}">
                                    <label for="option${index}">${option.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</label>
                                </div>`
                    ).join('')}
                    </div>
                    <button type="submit" id="submit" style="display: block;">Submit</button>
                </form>
            `;
            this.questionContainer.innerHTML = formElementHTML;
            const formElement: HTMLElement | null = document.getElementById("question-form");

            if (formElement) {
                formElement.addEventListener('submit', (ev) => this.onSubmit(ev, currentQuestion))
            }

            this.showElement(this.questionContainer);
        }
    }
}