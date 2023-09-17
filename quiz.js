/* All Question */
let questions = [
{
    que: "The Name of Pakistan Capital.",
    a: "Islamabad",
    b: "Lahore",
    c: "Karachi",
    correct: "a",
},
{
    que: "The Founder of Pakistan.",
    a: "Allama Iqbal",
    b: "Muhammad Ali Jinnah",
    c: "Liaqat Ali",
    correct: "b",
},
{
    que: "Independence Day of Pakistan",
    a: "18 August",
    b: "15 August",
    c: "14 August",
    correct: "c",
},
{
    "que": "What is the largest planet in our solar system?",
    "a": "Earth",
    "b": "Mars",
    "c": "Jupiter",
    "correct": "c"
},
{
    "que": "Which gas do plants absorb from the atmosphere during photosynthesis?",
    "a": "Oxygen",
    "b": "Carbon Dioxide",
    "c": "Nitrogen",
    "correct": "b"
},
{
    "que": "Who wrote the play 'Romeo and Juliet'?",
    "a": "William Shakespeare",
    "b": "Jane Austen",
    "c": "Charles Dickens",
    "correct": "a"
},
{
    "que": "What is the chemical symbol for gold?",
    "a": "Go",
    "b": "Au",
    "c": "Ag",
    "correct": "b"
},
{
    "que": "What is the tallest mountain in the world?",
    "a": "Mount Kilimanjaro",
    "b": "Mount Everest",
    "c": "Mount McKinley",
    "correct": "b"
},
{
    "que": "Which planet is known as the 'Red Planet'?",
    "a": "Mars",
    "b": "Venus",
    "c": "Jupiter",
    "correct": "a"
},
{
    "que": "What is the chemical symbol for water?",
    "a": "H2O",
    "b": "O2",
    "c": "CO2",
    "correct": "a"
},
{
    "que": "Who painted the Mona Lisa?",
    "a": "Pablo Picasso",
    "b": "Leonardo da Vinci",
    "c": "Vincent van Gogh",
    "correct": "b"
},
{
    "que": "What is the capital of Japan?",
    "a": "Tokyo",
    "b": "Seoul",
    "c": "Beijing",
    "correct": "a"
},
{
    "que": "Which gas makes up the majority of Earth's atmosphere?",
    "a": "Oxygen",
    "b": "Carbon Dioxide",
    "c": "Nitrogen",
    "correct": "c"
}
];
/* all variables */
const question_statement = document.querySelector(".question_statement");
const option_text = document.querySelectorAll(".option_text");
const next_btn = document.querySelector(".next");
const previous_btn = document.querySelector(".pre");
const submit_btn = document.querySelector(".submit");
let question_no = 0;
let right = 0;
let wrong = 0;
let total_question = questions.length;
/* question load function */
const loadQuestion = () => {
let question = questions[question_no];
question_statement.innerHTML = `${question_no + 1} : ${question.que}`;
option_text[0].innerText = question.a;
option_text[1].innerText = question.b;
option_text[2].innerText = question.c;
};
loadQuestion();
/* Question Next and Previous Function */
const question_change = (x) => {
question_no += x;
if (question_no === total_question) {
    question_no = question_no % total_question;
}
if (question_no < 0) {
    question_no = total_question - 1;
}
loadQuestion();
};
/* Next Question */
next_btn.addEventListener("click", () => {
question_change(1);
});
/* Previous Question */
previous_btn.addEventListener("click", () => {
question_change(-1);
});
/* Submit Question */
const question_submit = () => {
const options = document.querySelectorAll(".options");
let correct_ans = questions[question_no].correct;
let answer;
options.forEach((input) => {
    if (input.checked) {
    answer = input.value;
    /* Answer Check Function */
    if (answer === correct_ans) {
        right++;
    } else {
        wrong++;
    }
    let total_answer = right + wrong;
    /* Exam Complete Function */
    const done = () => {
        const quiz_area = document.querySelector(".quiz_area");
        quiz_area.innerHTML = `<div class="text-center p-5">
    <h5>Your Exam is completed.</h5> <br> <h6>Right Question = ${right} </h6>
    <h6>Total Question = ${total_question} </h6></div>`;
    };
    question_no++;
    if (total_answer == total_question) {
        return done();
    }
    /* Answer Reset function */
    const reset_answer = () => {
        options.forEach((input) => {
        input.checked = false;
        });
    };
    reset_answer();
    loadQuestion();
    }
});
};
submit_btn.addEventListener("click", question_submit);