# Quiz Application

## Overview
The Quiz Application is a web-based app built with JavaScript, TypeScript and SASS. It allows users to answer multiple-choice questions, provides feedback on their responses, and displays their final score. The application dynamically loads questions from a JSON file and features a simple, intuitive user interface.

---

## Features
- **Dynamic Question Loading**: Fetches questions from a JSON file.
- **Interactive UI**: Displays questions one at a time and provides immediate feedback on answers.
- **Final Score Summary**: Shows the user's total score at the end of the quiz.
- **Error Handling**: Gracefully handles issues like missing or invalid JSON files.
- **Replay Option**: Users can replay the quiz after completing it.

---

## Technologies Used
- **TypeScript**: For type safety and code maintainability.
- **HTML/SASS**: For the user interface.
- **JavaScript (ES6+)**: For browser compatibility and application logic.
- **JSON**: For question data

---

## Installation and Setup

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox).
- A local development server (e.g., `live-server`) to handle JSON file fetching.

### Steps
1. **Clone the Repository:**
   - Open a terminal and run:
     ```bash
     git clone https://github.com/your-repo/quiz-app.git
     ```

2. **Navigate to the Project Directory:**
   - Change into the project folder:
     ```bash
     cd quiz-app
     ```

3. **Install Dependencies:**
   - Ensure [Node.js](https://nodejs.org/) and [npm](https://npmjs.com/) are installed. Then, install the project dependencies:
     ```bash
     npm install
     ```

4. **Install TypeScript:**
   - If you don't have TypeScript installed globally, run:
     ```bash
     npm install -g typescript
     ```

5. **Install SASS:**
   - To compile SASS files, you need to have `SASS` installed. Install it globally by running:
     ```bash
     npm install -g sass
     ```

6. **Compile TypeScript:**
   - Compile the TypeScript files into JavaScript:
     ```bash
     tsc
     ```

7. **Run the Application:**
   - Open the `index.html` file in a web browser to start the quiz.

