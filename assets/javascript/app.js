var counter = 15;
var correct = 0;
var wrong = 0;
var currentPregunta = 0;

var questions =      
    [{
    prompt: "The average weight of a German Shepherd is:",
    choices: ["30-50lbs", "60-80lbs", "90-100lbs", "110-130lbs"],
    answer: 1,
    fact: "The average weight is 60-80lbs!",
    image: "assets/images/gsd.jpeg",
    },
    {
    prompt: "The Akita's origin is _____.",
    choices: ["South Korea", "Russia", "Australia", "Japan"],
    answer: 3,
    fact: "Samurais bred Akitas for hunting bears in Japan.",
    image: "assets/images/akita.jpeg",
    },
    {prompt: "Which dog has a purple tongue?",
    choices: ["Labrador", "Kelpie", "Chow chow", "Newfoundland"],
    answer: 2,
    fact: "The chow chow's purple tongue is a mystery! Other species with purple tongues include polar bears and giraffes.",
    image: "assets/images/chowchow.jpg",
    },
    {prompt: "According to Harvard, dogs dream about:",
    choices: ["Food", "Their owner", "Other dogs", "Cats"],
    answer: 1,
    fact: "Because of extreme attachments, studies show that dogs typically dream about their owners.",
    image: "assets/images/sleeping.jpg",
    },
    {prompt: "Corgi is Welsh for",
    choices: ["Dwarf dog", "Short legs", "Big booty", "Bobble head"],
    answer: 0,
    fact: "It literally means a dwarf dog!",
    image: "assets/images/corgi.png",  
   }]; 


$('#hello_world').hide();
$('#countDown').hide();
$('#doggy').hide();

/////////////////////   Setting the Timer //////////////////////////////
$(document).ready(function() { 
    
function timer(){
		counter--; 
		$('#countDown').html('<p>You have :' + counter + ' seconds to answer</p>');
		if (counter < 10){
			$('#countDown').html('<p>You have :0' + counter + ' seconds to answer</p>');
		}
		if (counter == 0){
			wrong++;
			tryAgain();
			$('#question').hide();
		}
	};
	function timerStop(){
		counter = 15;
	}
	function timerStart(){
		setInterval(timer, 1000);
	};
/////////////////////   Start    //////////////////////////////

$('#start-btn').on('click', function(){
    
    beginTrivia();
    
    $('#start-btn').hide();
    $('#hello_world').show();
    $('#stats').hide();
    timerStart();
    
});

function beginTrivia() {
    
    $('#countDown').html('<p>You have :15 seconds to answer</p>');
    $('#countDown').show();
    $('#hello_world').show();
    
    $('#question').html(questions[currentPregunta].prompt);
    $('#question').append('<li value=0>'+ questions[currentPregunta].choices[0] + '</li>');
    $('#question').append('<li value=1>'+ questions[currentPregunta].choices[1] + '</li>');
    $('#question').append('<li value=2>'+ questions[currentPregunta].choices[2] + '</li>');
    $('#question').append('<li value=3>'+ questions[currentPregunta].choices[3] + '</li>');
    
    $('#stats').html('Correct Answers: ' + correct + '<br>' + 'Wrong Answers: ' + wrong);
    
    $('li').on('click', function(){
        $('#question').hide();
        $('#countDown').hide();
        timerStop();
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
    $('#stats').show();
    $('#answer').html('<br><h2>That was PAWESOME. You must be a dog expert!</h2>');
    $('#doggy').html('<h3>' +questions[currentPregunta].fact+ '</h3>'+'<br>'+'<img width="400px" src="' +questions[currentPregunta].image+ '">');
    $('#stats').html('Correct Answers: ' + correct + '<br>' + 'Wrong Answers: ' + wrong);
    
    currentPregunta++;
    timeOut();

};


/////////////////////   Wrong    //////////////////////////////
function tryAgain() {
    $('#countDown').hide();
    $('#answer').show();
    $('#doggy').show();
    $('#stats').show();
    $('#answer').html('<br><h2>That was ruff and pawful! Try harder!</h2>');
    $('#doggy').html('<h3>' +questions[currentPregunta].fact+ '</h3>'+'<br>'+'<img width="400px" src="' +questions[currentPregunta].image+ '">');
    $('#stats').html('Correct Answers: ' + correct + '<br>' + 'Wrong Answers: ' + wrong);
    
    currentPregunta++;
    timeOut();
};

function timeOut() {
    $('#countDown').hide();
    setTimeout(nextQuestion, 5000)
    
};
/////////////////////   NxtQuestion    //////////////////////////////
function nextQuestion() {
    if (currentPregunta < questions.length){
        counter = 15;
        beginTrivia();
        $('#hello_world').show();
        $('#question').show();
        $('#answer').hide();
        $('#doggy').hide();                  
    }
        else {
            fin();
        }
};

/////////////////////   Fin    //////////////////////////////
function reset() {
    currentPregunta = 0;
    correct = 0;
    wrong = 0;
    counter = 15;
    
    $('#hello_world').hide();
    $('#start-btn').show();
    $('#doggy').hide();
    $('#start-btn').on('click', function(){
        beginTrivia();
        $('#hello_world').show();
        $('#start-btn').hide();
        $('#stats').hide();
        timerStart();
    });
};
function fin(){
    $('#questions').hide();
    $('#answers').hide();
    $('#doggy').hide();
    $('#stats').show();
    $('start-btn').hide();
    $('#stats').html('<h2>Game over! You deserve a treat.  Remember to...</h2>'+'<br><img src="https://65.media.tumblr.com/f950895941c4eb6d13d5b3f0ee7ea818/tumblr_o5cbfgrPG31qaj04yo1_1280.png"/>');
    setTimeout(reset, 4000);
    };
});