// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)

//prototypal function
let quizMethods = {
  isAnswerCorrect: function () {
    return correctAnswerIndex[index] == options[index];
  },
  getCorrectAnswer: function () {
    return correctAnswerIndex[index];
  },
};
function Question(title, options, index) {
  let quiz = Object.create(quizMethods);
  quiz.title = title;
  quiz.options = options;
  quiz.correctAnswerIndex = index;
  return quiz;
}
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

//Pseudoclassical Pattern

function Question(title, options, index) {
  //   let quiz = Object.create(quizMethods);
  this.title = title;
  this.options = options;
  this.correctAnswerIndex = index;
}
Question.prototype = {
  isAnswerCorrect: function () {
    return correctAnswerIndex[index] == options[index];
  },
  getCorrectAnswer: function () {
    return correctAnswerIndex[index];
  },
};

//class
class Question {
    constructor(title, options, index)
    //   let quiz = Object.create(quizMethods);
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = index;
    isAnswerCorrect() {
      return correctAnswerIndex[index] == options[index];
    }
    getCorrectAnswer() {
      return correctAnswerIndex[index];
    }
  }