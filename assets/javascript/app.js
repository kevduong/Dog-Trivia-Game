var counter = 11;
var correct = 0;
var wrong = 0;
var currentPregunta = 0;

var questions =      
    [{
    prompt: "The average weight of a German Shepherd is:",
    choices: ["30-50lbs", "60-80lbs", "90-100lbs", "110-130lbs"],
    answer: 1,
    image: "assets/images/gsd.jpeg",
    },
    {
    prompt: "The Akita's origin is _____.",
    choices: ["South Korea", "Russia", "Australia", "Japan"],
    answer: 3,
    image: "assets/images/akita.jpeg",
   }]; 


$('#hello_world').hide();
$('#timer').hide();

/////////////////////   Setting the Timer //////////////////////////////
function run(){
    time = setInterval(decrement, 1100);
}

function decrement(){
console.log('hi');
    counter--;
    $('#timer').html('<h2> You have ' + counter + ' seconds left to answer</h2>');

    if (counter == 0){
        wrong++;
        tryAgain();
        stopTime();
        $('#question').hide();
    }
}

function stopTime(){
    clearInterval(time);
}
/////////////////////   Start    //////////////////////////////

$('#start-btn').on('click', function(){
    
    beginTrivia();
    
    $('#start-btn').hide();
    $('#hello_world').show();
    run();
    
});

function beginTrivia() {
    
    $('#timer').show();
    
    $('#question').html(questions[currentPregunta].prompt);
    $('#question').append('<li value=0>'+ questions[currentPregunta].choices[0] + '</li>');
    $('#question').append('<li value=1>'+ questions[currentPregunta].choices[1] + '</li>');
    $('#question').append('<li value=2>'+ questions[currentPregunta].choices[2] + '</li>');
    $('#question').append('<li value=3>'+ questions[currentPregunta].choices[3] + '</li>');
    
    //add stats
    
    $('li').on('click', function(){
        $('#question').hide();
        $('#timer').hide();
        stopTime();
        if (this.value == questions[currentPregunta].answer){
            correct++;
            goodJob();
        }
        else {
            wrong++;
            tryAgain();
        }
    });
};


/////////////////////   Correct    //////////////////////////////
function goodJob() {
    $('#answer').show();
    $('#doggy').show();
    $('#answer').html(questions[currentPregunta].answer + '<br><h3>That was PAWESOME. You must be a dog expert!</h3>');
    $('#doggy').html('<img width="400px" src="' +questions[currentPregunta].image+ '">');
    currentPregunta++;
    run();
    timeOut();

};


/////////////////////   Wrong    //////////////////////////////
function tryAgain() {
    $('#timer').hide();
    $('#answer').show();
    $('#doggy').show();
    $('#answer').html(questions[currentPregunta].answer +'<br><h3>That was ruff and pawful! Try harder!</h3>');
    $('#doggy').html('<img width="400px" src="' +questions[currentPregunta].image+ '">');
    currentPregunta++;
    run();
    timeOut();
};

function timeOut() {
    $('#timer').hide();
    setTimeout(nextQuestion, 2000)
    
};
/////////////////////   NxtQuestion    //////////////////////////////
function nextQuestion() {
    if (currentPregunta < questions.length){
        counter = 11;
        beginTrivia();
        $('#hello_world').show();
        $('#question').show();
        $('#answer').hide();
        $('#doggy').hide();
                           
    }
};

/////////////////////   Fin    //////////////////////////////
