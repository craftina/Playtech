import { Question } from "./models/Question.js";
import { Quiz } from "./quiz.js";

async function getAllQuestions(): Promise<Question[]> {
    try {
        const response = await fetch('./data/questions.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        return data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(`Failed to load questions: ${error.message}`);
        } else {
            throw new Error("Failed to load questions: An unknown error occurred.");
        }
    }
}

async function onLoad(): Promise<void> {
    const questions = await getAllQuestions();
    const quiz = new Quiz(questions);
    quiz.loadQuiz();
};
window.addEventListener('load', onLoad);




