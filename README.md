# 📚 Loop Learner: Hiragana Quiz App

Loop Learner is a lightweight, modular quiz system designed to help users master Japanese Hiragana through visual recognition and repetition. Built with React, it uses a JSON-driven structure to dynamically load character quizzes, making it easy to expand or customize.

---

## 🚀 Features

- 🧠 Interactive multiple-choice quizzes for each Hiragana character  
- 🖼️ Image-based questions with randomized answer sets  
- 📦 JSON-powered content system for easy updates and scalability  
- 💡 Clean UI optimized for learning and retention  
- 🔒 Fully local and private—no external dependencies or APIs

---

## 🛠️ Tech Stack

- React (Create React App)  
- JavaScript  
- CSS Modules  
- Static JSON for quiz data

---

## 📁 Project Structure
<pre>
loop-learner/
 ├── public/
  │ └── images/      # Hiragana character PNGs 
 ├── src/
  │ ├── components/  # Quiz UI components 
  │ ├── data/        # JSON quiz definitions 
  │ └── App.js       # Main app logic 
├── package.json 
└── README.md
</pre>

## Quiz Format (JSON)
{
  text: "What is this character?",
  image: "/images/hiragana_ka.png",
  answers: [
    { text: "KA", correct: true },
    { text: "KI", correct: false },
    { text: "KU", correct: false },
    { text: "KE", correct: false }
  ]
}


## 🧠 Future Plans

- Add Katakana and Kanji modules

- Integrate spaced repetition logic

- Build a visual dashboard for quiz tracking

- Optional export to GitHub Pages or desktop app

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 🐾 Credits
Created by Kuro Phantom
