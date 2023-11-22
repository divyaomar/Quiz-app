//step 1: Define quiz data
 const quizData = [
    {
        question: "What does HTML stands for?",
        options: [
            "Hypertext Markup Language",
            "Hyper transfer Markup language",
            "Hypertext Machine Language",
            "Hyperlink and text Markup Language"
        ],
        correct: 0,
    },
    {
        question: "What is the Javascript function used to select an HTML element by its id?",
        options: [
            "document.query",
            "getElementById",
            "selectElement",
            "findElementId"
        ],
        correct: 1,
    },
    {
        question: "In React js, which hook is used to perform side effects in a function components?",
        options: [
            "useEffect",
            "useState",
            "useContext",
            "useReducer"
        ],
        correct: 0,
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options: [
            "<ul>",
            "<li>",
            "<ol>",
            "<dl>"
        ],
        correct: 2,
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options: [
            "<ul>",
            "<li>",
            "<ol>",
            "<dl>"
        ],
        correct: 2,
    }
 ]
//  Step 2
const quiz = document.querySelector('#quiz');
const scores = document.querySelector('.score');
const answerElm = document.querySelectorAll(".answer");
// const questionElm = document.querySelector("#question");
// const option_1 = document.querySelector("#option_1");
// const option_2 = document.querySelector("#option_2");
// const option_3 = document.querySelector("#option_3");
// const option_4 = document.querySelector("#option_4");

const [questionElm, option_1, option_2, option_3, option_4] = document.querySelectorAll("#question, #option_1, #option_2, #option_3, #option_4");

const submitBtn = document.querySelector('#submit');
let currentQuiz = 0;
let score = 0;

// Step 3:
const loadQuiz = () =>{
    const { question, options} = quizData[currentQuiz];
    questionElm.innerText = `${currentQuiz + 1}: ${question}`;
    scores.innerText = `Score: ${score}/${quizData.length}`;
    options.forEach((curOption, index) => (window[`option_${index+1}`].innerText = curOption) 
    );
}

loadQuiz();
// step 4: Get Selected Answer(index) Function on Button click
const getSelectedOption = () => {
    // let ans_index;
    // answerElm.forEach((curOption, index) =>{
    //     if(curOption.checked){
    //         ans_index = index;
    //     }
    // });
    // return ans_index;
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
}
//deselected answers:
const deselectedAnswers = () => {
    return answerElm.forEach((curElem) => curElem.checked = false);
};

submitBtn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

if(selectedOptionIndex === quizData[currentQuiz].correct){
    score = score+1;
}

    currentQuiz++;

    if(currentQuiz < quizData.length){
        deselectedAnswers();
        loadQuiz();
    }else{
        quiz.innerHTML = `
        <div class="result">
        <h2> Your Score: ${score}/${quizData.length} Correct Answers</h2>
        <p>Congratulations on completing the quiz!</p>
        <button class="reload-button" onclick = "location.reload()">Play Again</button>
        </div>
        `;
    }

});






















