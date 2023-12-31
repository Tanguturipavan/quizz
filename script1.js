/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "who is the cm of telangana?",
    "options": [
    {
    "a": "kcr;",
    "b": "ysr;",
    "c": "reventh;",
    "d": "none of the above;"
    }
    ],
    "answer": "reventh;",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "how many seats got for congress in 2024 elections?",
    "options": [
    {
    "a": "60;",
    "b": "64;",
    "c": "44;"
    }
    ],
    "answer": "64;",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "10/9*(74-5*6-3/2)?",
    "options": [
    {
    "a": "41.5;>",
    "b": "42.15;",
    "c": "42.5;"
    }
    ],
    "answer": "42.5;",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "telangana capital?",
    "options": [
    {
    "a": "hyderabad",
    "b": "rangareddy"
    }
    ],
    "answer": "hyderabad",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "html file can be saved as....?",
    "options": [
    {
    "a": ".c;",
    "b": ".xml;",
    "c": ".html;",
    "d": ".py;",
    }
    ],
    "answer": ".html;",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "How do you create a function in JavaScript?",
    "options": [
    {
    "a": "function myFunction()",
    "b": "function:myFunction()",
    "c": "function = myFunction()",
    }
    ],
    "answer": "function myFunction()",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "Which character is used in Python to make a single line comment?",
    "options": [
    {
    "a": "!",
    "b": "//",
    "c": "#",
    }
    ],
    "answer": "#",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": " Which of the following are C preprocessors?",
    "options": [
    {
    "a": "#endif",
    "b": "#define",
    "c": "#ifdif",
    "d": "all tne above",
    }
    ],
    "answer": "all the above",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": " How many columns are allowed in a bootstrap grid system?",
    "options": [
    {
    "a": "10",
    "b": "11",
    "c": "12",
    "d": "14"
    }
    ],
    "answer": "12",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",
    "options": [
    {
    "a": "if (i <> 5)",
    "b": "if i <> 5",
    "c": "if (i != 5)",
    "d": "if i =! 5 then",
    }
    ],
    "answer": "if (i != 5)",
    "score": 0,
    "status": ""
    }
    ]
    }
    
    
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });