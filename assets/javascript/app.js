var counter = 10;
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
     
   }]; 


$('#hello_world').hide();
$('#timer').hide();

/////////////////////   Setting the Timer //////////////////////////////
function run(){
    time = setInterval(decrement, 1000);
}

function decrement(){
    counter--;
    $('#timer').html('<h2> You have ' + counter + ' seconds left to answer</h2>');

    if (counter == 0){
        wrong++;
        wrong();
        $('#question').hide();
    }
    
function stopTime() {
    counter = 10;
};

}


//function finalCountDown() {
//    counter--;
//    $('#timer').html('<h2> You have ' + counter + ' seconds left to answer</h2>');
//
//    // Condition
//    if (counter == 0){
//        wrong++;
//        wrong();
//        $('#question').hide();
//    }
//};
//  
//function stopTime() {
//    counter = 10;
//};
//
//function timeGO() {
//    counter = setInterval(finalCountDown, 900);
//}
//

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
    
    //stats
    
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
            wrong();
        }
    });
};


/////////////////////   Correct    //////////////////////////////
function goodJob() {
    $('#answer').show();
    $('#doggy').show();
    $('#answer').html('<h3>That was PAWESOME. You must be a dog expert!</h3>');
    $('#doggy').append('<img width="400px" src="' +questions[currentPregunta].image+ '">');
    currentPregunta++;
    timeOut();

};


/////////////////////   Wrong    //////////////////////////////
function wrong() {
    $('#answer').show();
    $('#doggy').show();
    $('#answer').html('<h3>That was ruff and pawful! Try harder!</h3>');
    $('#doggy').append('<img width="400px" src="' +questions[currentPregunta].image+ '">');
    currentPregunta++;
    timeOut();
};

function timeOut() {
    $('#timer').hide();
    setTimeout(nextQuestion, 2000)
};
/////////////////////   NxtQuestion    //////////////////////////////
function nextQuestion() {
    if (currentPregunta < questions.length){
        counter = 10;
        beginTrivia();
        $('#hello_world').show();
        $('#answer').hide();
        $('#doggy').hide();
                           
    }
};

/////////////////////   Fin    //////////////////////////////
