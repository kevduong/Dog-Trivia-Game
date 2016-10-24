
var correct = 0;
var wrong = 0;
var counter = 10;

var questions =      
    [{
    prompt1: "The average weight of a German Shepherd:",
    choices1: ["30-50lbs", "60-80lbs", "90-100lbs", "110-130lbs"],
    answer: 2,
    },
    {
    prompt: "The Akita's origin is _____.",
    choices: ["South Korea", "Russia", "Australia", "Japan"],
    answer: 3,
     
   }];    

$('.btn-default').on('click', countdownzz(), function(){
    
    beginTest();
    $('.btn-default').hide();
    
});

function beginTest() {
    
    $('.question').html(questions.prompt1);
    $('.answer0').html(questions.choices1[0]);
    $('.answer1').html(questions.choices1[1]);
    $('.answer2').html(questions.choices1[2]);
    $('.answer3').html(questions.choices1[3]);
    
};

function countdownzz() {
var countDown = setInterval(decrement, 1000);

function decrement() {
    
    counter--;
    $('#show-number').html('<h1>' + counter + '<h1>');
    
    if (counter === 0) {
        console.log("blah");
        wrong--;
        stop();
        //move to next question function
    }
}

function stop() {
    console.log("stop");
    clearInterval(counter);
    counter = 10;
}
};