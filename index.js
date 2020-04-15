var allButtons=['green','red','yellow','blue'];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var gameStart=false;


$("#start-btn").on('click',function(event) {

	var startsound=new Audio('sounds/start.wav');
	startsound.play();
	$("#start-btn").fadeOut(100).fadeIn(100).fadeOut(100);
	$(".footer-elements").fadeOut(100).fadeIn(100).fadeOut(100);
	setTimeout(nextSequence, 1500)
	}
	);


$(".box").on('click', function(event) {
	var userChoosenColor=$(this).attr("id");
	userClickedPattern.push(userChoosenColor);
	playSound(userChoosenColor);
	animatePress(userChoosenColor);
	var lastindex=(userClickedPattern.length)-1;
	checkResult(lastindex);
	});

function nextSequence(){
	userClickedPattern=[];
	level++;
	$("h1").text('Level '+level);
	var randomNumber=Math.floor(Math.random()*4);
	var randomButton=allButtons[randomNumber];
	gamePattern.push(randomButton);
	$("#"+randomButton).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
	playSound(randomButton); 
}


function checkResult(currentLevel){
	if (gamePattern[currentLevel]==userClickedPattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length){
	        setTimeout(function () {
	          nextSequence();
	        }, 1000);
	    }
	}
	
	else{
		startOver();
		$("body").addClass('gameover');
		setTimeout(function(){$("body").removeClass('gameover')},300);
		$("h1").html('<h1>Game Over! Press <i class="far fa-dot-circle"></i></h1> ');
		$("#start-btn").fadeIn(100).fadeOut(100).fadeIn(100);
		$(".footer-elements").fadeIn(100).fadeOut(100).fadeIn(100);
		var over=new Audio('sounds/wrong.mp3');
		over.play();
	}
}
function startOver(){
	level=0;
	gamePattern=[];
	userClickedPattern=[];
}

		










function animatePress(color){
	$("#"+color).addClass('pressed');
	setTimeout(function(){
		$("#"+color).removeClass('pressed');
	},100)
}
function playSound(name){
	var audio=new Audio('sounds/'+name+'.mp3');
	audio.play();
}





