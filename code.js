var i = 0;
var largest = 0;
var total = 0;
var numCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var randNum = 0;
var rand = document.getElementById("random");
var count = document.getElementById("counter");
var snakeGameArea = document.getElementById("snakeGameArea");
var mazeArea = document.getElementById("mazeArea");
var score = document.getElementById("score");
var STWOscore = document.getElementById("STWOscore");
var highscore = document.getElementById("highscore");
var gameOverText = document.getElementById("gameOverText");
var barHeight = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var slide = document.getElementById("slide");
var barID = [document.getElementById("bar1"), document.getElementById("bar2"), document.getElementById("bar3"), document.getElementById("bar4"), document.getElementById("bar5"), document.getElementById("bar6"), document.getElementById("bar7"), document.getElementById("bar8"), document.getElementById("bar9"), document.getElementById("bar10")]; 

function randomNumber() {
	randNum = Math.floor(10 * Math.random());
	barID[randNum].style.visibility = "initial";
	rand.innerHTML = randNum + 1;
	numCount[randNum] += 1;
	barID[randNum].setAttribute("count", numCount[randNum]);
	total++;
	count.innerHTML = total;
	for (i=0; i < 10; i++) {
		if (numCount[i] > largest) {
			largest = numCount[i];
		}
	}
	for (i=0; i < 10; i++) {
		barHeight[i] = (numCount[i]/largest) * 100;
		barHeight[i] = Math.floor(barHeight[i]);
	}
	for (i=0; i < 10; i++) {
		barHeight[i] += '%';
		barID[i].style.height = barHeight[i];
	}
}
function reset() {
	largest = 0;
	total = 0;
	numCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	randNum = 0;
	barHeight = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	count.innerHTML = "0";
	rand.innerHTML = "0";
	for (i=0; i < 10; i++) {
		barID[i].style.height = "0%";
	}
}
var gameBoard = 
['#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
 '#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#','\n',
'#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'
];
var fruitSpace;
var NORTH = -50;
var WEST = -1;
var SOUTH = 50;
var EAST = 1;
var DELAY_BASE = 40;
var delay_SF = 1;
var vertical_SF = 1.25;
var delay = DELAY_BASE * delay_SF;
var direction = EAST;
var highscoreNum = 0;
var length = 0;
var SNAKE_START_POSITION = 208;
var snakeHead = SNAKE_START_POSITION;
var snakeBody = [];
var snakeBodyLast;
var boardString;
var HEAD = '@';
var TAIL = '+';
var FRUIT = 'X';
var firstTurn = 0;
var endGame = 0;
var playGame = 0;
var doublehit = 0;
var futureDirection;
var turnTimer;
var autoPlayBool = 0;
function autoPlay() {
	autoPlayBool = 1;
	startGame();
}
function manualPlay() {
	autoPlayBool = 0;
	startGame();
}
function startGame() {
	snakeGameArea.focus();
	pause = 0;
	delay_SF = 1 / slide.value;
	delay = DELAY_BASE * delay_SF;
	resetBoard();
	playGame = 1;
	clearInterval(turnTimer);
	turnTimer = setTimeout(turn, delay);
}
function gameOver() {
	endGame = 1;
	clearInterval(turnTimer);
	if (length > highscoreNum) {
		highscoreNum = length;
		highscore.innerHTML = highscoreNum;
	}
	gameOverText.style.visibility = "visible";
}

function resetBoard() {
	direction = EAST;
	futureDirection = 0;
	endGame = 0;
	firstTurn = 1;
	for (i = 0; i <= length; i++) {
		gameBoard[snakeBody[i]] = ' ';
	}
	snakeBody = [];
	gameBoard[snakeHead] = ' ';
	snakeHead = SNAKE_START_POSITION;
	length = 0;
	score.innerHTML = length;
	gameOverText.style.visibility = "hidden";
}
function turn() {
	doublehit = 0;
	//shift body parts forward
	for (i = length; i > 0; i--) {
		snakeBody[i] = snakeBody[i - 1];
	}
	snakeBody[0] = snakeHead;
	
	if (firstTurn) {
		firstTurn = 0;
		gameBoard[fruitSpace] = ' ';
		do {
			fruitSpace = Math.floor(700 * Math.random());
		} while	 ( gameBoard[fruitSpace] != ' ');
		gameBoard[fruitSpace] = FRUIT;
	}
	if ( (gameBoard[snakeHead + direction] == '#') || (gameBoard[snakeHead + direction] == TAIL) ) {
		gameOver();
	}
	else {
		snakeHead += direction;
	}
	if (gameBoard[snakeHead] == FRUIT) {
		length++;
		score.innerHTML = length;
		do {
			fruitSpace = Math.floor(700 * Math.random());
		} while	 (gameBoard[fruitSpace] != ' ');
		gameBoard[fruitSpace] = FRUIT;
	}
	snakeBodyLast = snakeBody[length];

	//copy snake body to game board
	gameBoard[snakeBody[0]] = TAIL;
	if (!endGame) {
		gameBoard[snakeBodyLast] = ' ';
	}
	gameBoard[snakeHead] = HEAD;

	boardString = gameBoard.join('');
	snakeGameArea.innerHTML = boardString;
	if (futureDirection) {
		direction = futureDirection;
	}
	if (autoPlayBool) {
		autoAI();
	}
	if (playGame && !endGame) {
		turnTimer = setTimeout(turn, delay);
	}
}
setTimeout(turn, 0);

function autoAI() {
	fruitRow = Math.floor(fruitSpace/50);
	snakeHeadRow = Math.floor(snakeHead/50);
	fruitColumn = fruitSpace % 50;
	snakeHeadColumn = snakeHead % 50;
	//var a = performance.now();
	direction = astar(fruitSpace);
	//var b = performance.now();
	//alert('It took ' + (b - a) + ' ms.'); //timing function for astar length
	if (direction == 0) {
		//if failed to find path to fruit, aim for tail.
		direction = astar(snakeBodyLast);
		if (direction == 0) {
			//if failed to find path to fruit or tail, do a tight snake-slither pattern
			if ((gameBoard[snakeHead + NORTH] != TAIL) && (gameBoard[snakeHead + NORTH] != '#') && (direction != SOUTH) && (gameBoard[snakeHead + NORTH + NORTH] != ' ')) {
				direction = NORTH;
			}
			else if ((gameBoard[snakeHead + SOUTH] != TAIL) && (gameBoard[snakeHead + SOUTH] != '#') && (direction != NORTH)) {
				direction = SOUTH;
			}
			else if ((gameBoard[snakeHead + EAST] != TAIL) && (gameBoard[snakeHead + EAST] != '#') && (direction != WEST)) {
				direction = EAST;
			}
			else if ((gameBoard[snakeHead + WEST] != TAIL) && (gameBoard[snakeHead + WEST] != '#') && (direction != EAST)) {
				direction = WEST;
			}
			else
				direction = NORTH;
		}
	}
}
function astar(target) {
	var cardinals = [NORTH, SOUTH, EAST, WEST];
	var reverseDirections = [];
	var neighbor;
	var gScore, bestGScore;
	var G = [];
	var H = [];
	var F = [];
	var i, j;
	var parent = [];
	var openList = [];
	var o = 0; //o is size of openList
	var current;
	var currentIndex;
	var closed = [];
	var beenVisited = [];
	current = snakeHead; //initialize start node
	G[current] = 0;
	openList[0] = current;
	o++;
	F[current] = 0;
	while (openList.length > 0) {
		F[current] = F[openList[0]];
		for (i = 0; i < o; i++) {
			if (F[openList[i]] <= F[current]) {
				current = openList[i];
				currentIndex = i;
			}
		}
		current = openList[currentIndex];
		if (current == target) {
			i = 0;
			while (parent[current]) {
				reverseDirections[i++] = current - parent[current];
				current = parent[current];
			}
			return reverseDirections[i-1];
		}
		closed[current] = 1; // add node to closed list
		openList.splice(currentIndex, 1); // remove node from open list
		o--;
		if ((o > 750) || (o < 0)) {
			alert("The snake could not find a path, and decided to bug out!");
			break;
		}
		for (j = 0; j < 4; j++) {
			neighbor = current + cardinals[j];
			if (closed[neighbor] == 1) {
				continue;
			}
			else if ((gameBoard[neighbor] == TAIL) || (gameBoard[neighbor] == '#')) {
				closed[neighbor] = 1;
			}
			else {
				gScore = G[current] + weight(neighbor);
				bestGScore = false;
				if (!beenVisited[neighbor]) {
					beenVisited[neighbor] = true;
					bestGScore = true;
					//H score is manhatten distance from target
					H[neighbor] = Math.abs(Math.floor(target/50) - Math.floor(neighbor/50)) + Math.abs(Math.floor(target%50) - Math.floor(neighbor % 50));
					openList.push(neighbor);
					o++;
				}
				else if (gScore < G[neighbor]) {
					bestGScore = true;
				}
				if (bestGScore) {
					parent[neighbor] = current;
					G[neighbor] = gScore;
					F[neighbor] = G[neighbor] + H[neighbor];
				}
			}
		}
	}
	return 0;
}

document.addEventListener('keyup', spacebarPressPreventButtionClick);
function spacebarPressPreventButtionClick(event) {
	//prevents the spacebar from acting as a click on a button
	if (event.keyCode == 32) {
		event.preventDefault();
	}
}

function weight(space) {
	//To simplify the calculations required, the weighted map is only calculated
	//if the snake has a path to the fruit.	 Otherwise, it will try to chase it's tail,
	//and a weighted map is not needed.	 Direction will only be 0 if the snake failed to find
	//a path to the fruit.
	if (direction != 0) {
		//weights the map as if it is bowl shaped
		//the two formulas are very similar, but the second one causes the snake
		//to prefer a zig-zag motion of travel, so the first one is better.
		return ((Math.abs((space % 50) - 25))/23) + ((Math.abs(Math.floor(space/50) - 7)) / 6) + 1;
		//return ((Math.abs(7 - Math.floor(space/50))) + (Math.abs(25 - (space % 50))))/32 + 1;
	}
	else 
		return 1;
}
var input = "right";
var pause = 0;
var previousInput;
document.addEventListener('keydown', keyListen);
function keyListen(event) {
	//if spacebar press
	if (event.keyCode == 32) {
		event.preventDefault(); //prevents page scroll down
		spacebarPress();
	}
	//if W or up arrow press
	if(event.keyCode == 87 || event.keyCode == 38) {
		event.preventDefault();
		upWPress();
	}
	//if A or left arrow press
	else if(event.keyCode == 65 || event.keyCode == 37) {
		event.preventDefault();
		leftAPress();
	}
	//if S or down arrow press
	else if(event.keyCode == 83 || event.keyCode == 40) {
		event.preventDefault();
		downSPress();
	}
	//if D or right arrow press
	else if(event.keyCode == 68 || event.keyCode == 39) {
		event.preventDefault();
		rightDPress();
	}
}
function spacebarPress() {
    if (STWOWrapper.getAttribute("activeProject") == 1) {
        if (input == "pause") {
            resumeFromPause();
        }
        else if (gameRunning) {
            previousInput = input;
            input = "pause";
        }
        else {
            STWOPlay();
        }
    }
    if (snakeWrapper.getAttribute("activeProject") == 1) {
	    if ((playGame == 0) && (pause == 0)) {
		    pause = 0;
		    startGame();
	    }
	    else if ((playGame == 1)  && (pause == 0) && (endGame == 0)){
		    clearInterval(turnTimer);
		    pause = 1;
	    }
	    else if (pause == 1) {
		    pause = 0;
		    delay_SF = 1 / (slide.value);
		    delay = DELAY_BASE * delay_SF;
		    playGame = 1;
		    clearInterval(turnTimer);
		    turnTimer = setTimeout(turn, delay);
	    }
	    else if ((endGame == 1)) {
		    pause = 0;
		    resetBoard();
		    startGame();
	    }
	}
}
function upWPress() {
    if (STWOWrapper.getAttribute("activeProject") == 1) {
        if ((input != "down") && (input != "pause") && (STWOautoPlayBool != 1)) {
            input = "up";
        }
    }
    if (snakeWrapper.getAttribute("activeProject") == 1) {
        if ((autoPlayBool == 0) && (pause == 0)) {
            if (direction != SOUTH) {
	            if (doublehit == 1) {
		            futureDirection = NORTH;
	            }
	            else {
		            futureDirection = 0;
		            doublehit++;
		            direction = NORTH;
	            }
	            delay = DELAY_BASE * delay_SF * vertical_SF;
            }
        }
    }
}
function rightDPress() {
    if (STWOWrapper.getAttribute("activeProject") == 1) {
        if ((input != "left") && (input != "pause") && (STWOautoPlayBool != 1)) {
            input = "right";
        }
    }
    if (snakeWrapper.getAttribute("activeProject") == 1) {
	    if ((autoPlayBool == 0) && (pause == 0)) {
		    if (direction != WEST) {
			    if (doublehit == 1) {
				    futureDirection = EAST;
			    }
			    else {
				    futureDirection = 0;
				    doublehit++;
				    direction = EAST;
			    }
			    delay = DELAY_BASE * delay_SF;
		    }
	    }
	}
}
function leftAPress() {
    if (STWOWrapper.getAttribute("activeProject") == 1) {
        if ((input != "right") && (input != "pause") && (STWOautoPlayBool != 1)) {
            input = "left";
        }
    }
    if (snakeWrapper.getAttribute("activeProject") == 1) {
	    if ((autoPlayBool == 0) && (pause == 0)) {
	        if (direction != EAST) {
	            if (doublehit == 1) {
		            futureDirection = WEST;
	            }
	            else {
		            futureDirection = 0;
		            doublehit++;
		            direction = WEST;
	            }
	            delay = DELAY_BASE * delay_SF;
	        }
        }
    }
}
function downSPress() {
    if (STWOWrapper.getAttribute("activeProject") == 1) {
        if ((input != "up") && (input != "pause") && (STWOautoPlayBool != 1)) {
            input = "down";
        }
    }
    if (snakeWrapper.getAttribute("activeProject") == 1) {
	    if ((autoPlayBool == 0) && (pause == 0)) {
		    if (direction != NORTH) {
			    if (doublehit == 1) {
				    futureDirection = SOUTH;
			    }
			    else {
				    futureDirection = 0;
				    doublehit++;
				    direction = SOUTH;
			    }
			    delay = DELAY_BASE * delay_SF * vertical_SF;
		    }
	    }
	}
}
var noProjectsShowing = 1;
var transitionDelay = 0;
var functionInProgress = 0;
var wrappers = [document.getElementById("graphWrapper"), document.getElementById("snakeWrapper"),  document.getElementById("STWOWrapper"), document.getElementById("mazeWrapper")];
var graphWrapper = wrappers[0];
var snakeWrapper = wrappers[1];
var STWOWrapper = wrappers[2];
var mazeWrapper = wrappers[3];
function toggle_show(id) {
    var extraDelay;
	if (!functionInProgress) {
		functionInProgress = 1;
		transitionDelay = 0;
		var projectClicked = document.getElementById(id);
		projectClicked.setAttribute("activeProject", 1);
		var height;
		var z;
		
		//minimize any projects showing except the project whose button was clicked
		for (i = 0; i < wrappers.length; i++) {
			if (wrappers[i] != projectClicked) {
			    wrappers[i].setAttribute("activeProject", 0);
				if (wrappers[i].style.opacity == '1') {
					noProjectsShowing = 0;
				    height = wrappers[i].getAttribute("actualHeight");
				    wrappers[i].style.transitionDuration = height/1000 + .2 + "s";
				    height = height + "px";
				    wrappers[i].style.opacity = '0';
				    wrappers[i].style.maxHeight = '0px';
				    transitionDelay += (parseInt(wrappers[i].getAttribute("actualHeight")) + 150);
				}
			}
		}
		
		if (noProjectsShowing) {
			noProjectsShowing = 0;
			height = projectClicked.getAttribute("actualHeight");
			projectClicked.style.transitionDuration = height/1000 + .2 + "s";
			height = height + "px";
			projectClicked.style.opacity = '1';
			projectClicked.style.maxHeight = height;
			transitionDelay += (parseInt(projectClicked.getAttribute("actualHeight")) + 150);
		}
		
		else if (projectClicked.style.opacity == '1') {
			noProjectsShowing = 1;
			height = projectClicked.getAttribute("actualHeight");
			projectClicked.style.transitionDuration = height/1000 + .2 + "s";
			height = height + "px";
			projectClicked.style.opacity = '0';
			projectClicked.style.maxHeight = '0px';
			transitionDelay += (parseInt(projectClicked.getAttribute("actualHeight")) + 150);
		}

		else {
			setTimeout(function() {
				noProjectsShowing = 0;
				height = projectClicked.getAttribute("actualHeight");
				projectClicked.style.transitionDuration = height/1000 + .2 + "s";
				height = height + "px";
				projectClicked.style.opacity = '1';
				projectClicked.style.maxHeight = height;
			}, transitionDelay *.9);
			transitionDelay += (parseInt(projectClicked.getAttribute("actualHeight")) + 150);
		}
		setTimeout( function() {functionInProgress = 0;}, transitionDelay);
	}
}


var canvas = document.getElementById("STWOgameArea");
var context = canvas.getContext("2d");
var WIDTH = canvas.width;
var HEIGHT = canvas.height;
context.rect(0, 0, WIDTH, HEIGHT);

var STWOgameOverText = document.getElementById("STWOgameOverText");
var STWOhighscore = document.getElementById("STWOhighscore");

var STARTING_X_COORD = WIDTH / 5;
var STARTING_Y_COORD = HEIGHT / 5;

var snake_x = STARTING_X_COORD;
var snake_y = STARTING_Y_COORD;
var fruit_x;
var fruit_y;
var tail_x = [];
var tail_y = [];
var FRUIT_RADIUS = 6;
var SNAKE_RADIUS = 6;
var TAIL_RADIUS = 5.25;
var STWOtailLength = 0;
var grd = context.createRadialGradient(WIDTH/2, HEIGHT/2, 0, WIDTH/2, HEIGHT/2, 400);
    grd.addColorStop(0, '#8ED6FF');
    grd.addColorStop(1, '#003BA2');
    
var snakegrd = context.createLinearGradient(-SNAKE_RADIUS * 1.5, 0, SNAKE_RADIUS * 2, 0);
    snakegrd.addColorStop(0, '#008000');
    snakegrd.addColorStop(1, '#90EE90');
    
var STWOside = document.getElementById("STWOslide");
var GAME_SPEED_RATE = 5;
var pixelsPerFrame = GAME_SPEED_RATE * STWOslide.value;

var STWOautoPlayBool = 0;
var STWOgameOverBool = 0;
var frame = 0;
var STWOscoreNum = 0;
var STWOhighscoreNum = 0;
var gameRunning = 0;
var generalTailSectionsGap = 1.1;
var headAndFirstTailSectionGap = 2; // MUST be whole number
var frameDelay = setFrameDelay();
var gameInput;
var STWOcallNextFrame;

var allInputs = [];
var allInputsMaxSize = setAllInputsMaxSize();

function setAllInputsMaxSize() {
    return  frameDelay * (headAndFirstTailSectionGap + STWOtailLength + 2);
}

function STWOframe() {
    gameInput = STWOgetInput();
    STWOstoreInput(gameInput);
    if ( checkFruitCollision() ) {
        STWOscoreNum++;
        STWOscore.innerHTML = STWOscoreNum;
        generateNewFruit();
        generateTailSection();
        STWOtailLength++;
        allInputsMaxSize = setAllInputsMaxSize();
        for (i = 0; i < frameDelay; i++) {
            allInputs.unshift(allInputs[i]);
        }
    }
    if ( checkSelfCollision(snake_x, snake_y) ) {
        STWOgameOver();
    }
    else if ( checkWallCollision(snake_x, snake_y) ) {
        STWOgameOver();
    }
    else {
        if (gameInput != "pause") {
            moveSTWO(gameInput);
            moveSTWOtail();
            frame++;
            drawGame();
        }
        nextFrame();
    }
}

function STWOgetInput() {
    var STWOinput;
    if (STWOautoPlayBool == 0) {
        STWOinput = input;
    }
    else if (STWOautoPlayBool == 1) {
        STWOinput = STWOautoAI();
    }
    return STWOinput;
}

function STWOstoreInput(STWOinput) {
    if (STWOinput != "pause") {
        allInputs.shift();
        allInputs[allInputsMaxSize] = STWOinput;
    }
    return;
}
function STWOautoAI() {
    var snake_x_center = snake_x + SNAKE_RADIUS;
    var snake_y_center = snake_y + SNAKE_RADIUS;
    var STWOAIinput = input;
    var rightClear = !detectNearbyTail(snake_x, snake_y, "right");
    var leftClear = !detectNearbyTail(snake_x, snake_y, "left");
    var downClear = !detectNearbyTail(snake_x, snake_y, "down");
    var upClear = !detectNearbyTail(snake_x, snake_y, "up");

    if ( (snake_x_center < fruit_x) && 
            (Math.abs(snake_x_center - fruit_x) >= pixelsPerFrame) && 
            (STWOAIinput != "left") && 
            rightClear) {
        STWOAIinput = "right";
    }
    else if ( (snake_y_center < fruit_y) && 
            (Math.abs(snake_y_center - fruit_y) >= pixelsPerFrame) && 
            (STWOAIinput != "up") && 
            downClear) {
        STWOAIinput = "down";
    }
    else if ( (snake_x_center > fruit_x) && 
            (Math.abs(snake_x_center - fruit_x) > pixelsPerFrame) && 
            (STWOAIinput != "right") && 
            leftClear) {
        STWOAIinput = "left";
    }
    else if ( (snake_y_center > fruit_y) && 
            (Math.abs(snake_y_center - fruit_y) > pixelsPerFrame) && 
            (STWOAIinput != "down") && 
            upClear) {
        STWOAIinput = "up";
    }
    else if ( (rightClear)  && (STWOAIinput != "left") ) {
        STWOAIinput = "right";
    }
    else if ( (downClear)  && (STWOAIinput != "up") ) {
        STWOAIinput = "down";
    }
    else if ( (leftClear)  && (STWOAIinput != "right") ) {
        STWOAIinput = "left";
    }
    else if ( (upClear)  && (STWOAIinput != "down") ) {
        STWOAIinput = "up";
    }
    if (input != "pause") {
        input = STWOAIinput;
    }
    return STWOAIinput;
}
function nextFrame() {
    if (!STWOgameOverBool && (input != "pause")) {
        STWOcallNextFrame = requestAnimationFrame(STWOframe);
    }
}

function resumeFromPause() {
    input = previousInput;
    nextFrame();
}

function drawGame() {
    drawBackground();
    for (i = 0; i < STWOtailLength; i++) {
        drawSnakeTail(tail_x[i], tail_y[i]);
    }
    drawFruit(fruit_x, fruit_y);
    drawSnakeHead(snake_x, snake_y);
}

function drawBackground() {
    context.beginPath();
    context.rect(0, 0, WIDTH, HEIGHT);
    context.fillStyle = grd;
    context.fill();
}
function drawSnakeHead(x, y) {
        var xm = x + SNAKE_RADIUS;       // x-middle
        var ym = y + SNAKE_RADIUS;       // y-middle
        context.save();
        context.translate(xm, ym);
        if (gameInput == "right") {
            ;
        }
        else if (gameInput == "up") {
            context.rotate(-90*Math.PI/180);
        }
        else if (gameInput == "left") {
            context.rotate(180*Math.PI/180);
        }
        else if (gameInput == "down") {
            context.rotate(90*Math.PI/180);
        }
        context.beginPath();
        context.moveTo(-SNAKE_RADIUS * 2, 0);
        context.quadraticCurveTo(-SNAKE_RADIUS * 2, -SNAKE_RADIUS * 1.8, 0, -SNAKE_RADIUS);
        context.quadraticCurveTo(SNAKE_RADIUS * .8, -SNAKE_RADIUS * .8, SNAKE_RADIUS, 0);
        context.quadraticCurveTo(SNAKE_RADIUS * .8, SNAKE_RADIUS * .8, 0, SNAKE_RADIUS);
        context.quadraticCurveTo(-SNAKE_RADIUS * 2, SNAKE_RADIUS * 1.8, -SNAKE_RADIUS * 2, 0);
        context.strokeStyle = 'green';
        context.stroke();
        context.fillStyle = snakegrd;
        context.fill();
        context.beginPath();
        context.arc(-SNAKE_RADIUS * .7, -SNAKE_RADIUS * .8, SNAKE_RADIUS/2.5, 0, 2 * Math.PI);
        context.fillStyle = 'white';
        context.fill();
        context.beginPath();
        context.arc(-SNAKE_RADIUS * .55, -SNAKE_RADIUS * .8, SNAKE_RADIUS/4, 0, 2 * Math.PI);
        context.fillStyle = 'black';
        context.fill();
        context.beginPath();
        context.arc(-SNAKE_RADIUS * .7, SNAKE_RADIUS * 0.8, SNAKE_RADIUS/2.5, 0, 2 * Math.PI);
        context.fillStyle = 'white';
        context.fill();
        context.beginPath();
        context.arc(-SNAKE_RADIUS * .55, SNAKE_RADIUS * 0.8, SNAKE_RADIUS/4, 0, 2 * Math.PI);
        context.fillStyle = 'black';
        context.fill();
        context.beginPath();
        context.arc(SNAKE_RADIUS * .55, SNAKE_RADIUS * 0.3, SNAKE_RADIUS/6, 0, 2 * Math.PI);
        context.fillStyle = "#001D00";
        context.fill();
        context.beginPath();
        context.arc(SNAKE_RADIUS * .55, -SNAKE_RADIUS * 0.3, SNAKE_RADIUS/6, 0, 2 * Math.PI);
        context.fillStyle = "#001D00";
        context.fill();
        context.restore();
}

function drawSnakeTail(x, y) {
    context.beginPath();
    context.arc(x, y, TAIL_RADIUS, 0, 2 * Math.PI);
    context.fillStyle = 'lightgreen';
    context.fill();
    context.lineWidth = 0.5;
    context.strokeStyle = 'black';
    context.stroke();
}

function drawFruit(x, y) {
    context.beginPath();
    context.arc(x, y, FRUIT_RADIUS, 0, 2 * Math.PI);
    context.fillStyle = 'darkred';
    context.fill();
}

function STWOautoPlay() {
    if (gameRunning) {
        STWOgameOver();
    }
    STWOautoPlayBool = 1;
    STWOPlay();
}

function STWOmanualPlay() {
    if (gameRunning) {
        STWOgameOver();
    }
    STWOautoPlayBool = 0;
    STWOPlay();
}
function STWOPlay() {
    if (STWOgameOverBool) {
        STWOboardReset();
        gameRunning = 1;
        STWOframe();
    }
    else if (!gameRunning) {
        gameRunning = 1;
        generateNewFruit();
        STWOframe();
    }
    else {
        STWOgameOver();
        STWOboardReset();
        STWOframe();
    }
}

function STWOboardReset() {
    STWOgameOverBool = 0;
    input = "right";
    frame = 0;
    STWOscoreNum = 0;
    snake_x = STARTING_X_COORD;
    snake_y = STARTING_Y_COORD;
    generateNewFruit();
    STWOscoreNum = 0;
    STWOscore.innerHTML = STWOscoreNum;
    STWOgameOverText.style.visibility = "hidden";
    gameRunning = 0;
    setGameSpeed();
    frameDelay = setFrameDelay();
    STWOtailLength = 0;
    allInputsMaxSize = setAllInputsMaxSize();
    for (i = 0; i < allInputsMaxSize; i++) {
        allInputs[i] = "right";
    }
}

function setGameSpeed() {
    pixelsPerFrame = GAME_SPEED_RATE * STWOslide.value;
}

function STWOgameOver() {
    if (STWOscoreNum > STWOhighscoreNum) {
        STWOhighscoreNum = STWOscoreNum;
        STWOhighscore.innerHTML = STWOhighscoreNum;
    }
    STWOscoreNum = 0;
    STWOgameOverText.style.visibility = "visible";
    STWOgameOverBool = 1;
    gameRunning = 0;
    cancelAnimationFrame(STWOcallNextFrame);
    return;
}

function moveSTWO(STWOdirection) {
    if ( STWOdirection == "up" ) {
        snake_y -= pixelsPerFrame;
    }
    else if ( STWOdirection == "left" ) {
        snake_x -= pixelsPerFrame;
    }
    else if ( STWOdirection == "right" ) {
        snake_x += pixelsPerFrame;
    }
    else if ( STWOdirection == "down" ) {
        snake_y += pixelsPerFrame;
    }
}
 
function moveSTWOtail() {
    var frameMarker;
    for (i = 0; i < STWOtailLength; i++) {
        if (i == 0) {
            frameMarker = (allInputsMaxSize) - (frameDelay * (i + 1) * headAndFirstTailSectionGap);
        }
        else {
            frameMarker = (allInputsMaxSize) - (frameDelay * (i + headAndFirstTailSectionGap));
        }
        if (frameMarker >= 0) {
            if ( allInputs[frameMarker] == "up" ) {
                tail_y[i] -= pixelsPerFrame;
            }
            else if ( allInputs[frameMarker] == "left" ) {
                tail_x[i] -= pixelsPerFrame;
            }
            else if ( allInputs[frameMarker] == "right" ) {
                tail_x[i] += pixelsPerFrame;
            }
            else if ( allInputs[frameMarker] == "down" ) {
                tail_y[i] += pixelsPerFrame;
            }
        }
        else {
            tail_x[i] += pixelsPerFrame;
        }
    }
}

function checkFruitCollision() {
    var snake_x_center = snake_x + SNAKE_RADIUS;
    var snake_y_center = snake_y + SNAKE_RADIUS;
    var totDistance = FRUIT_RADIUS + SNAKE_RADIUS;
    if (Math.abs(snake_x_center - fruit_x) <= (totDistance)) {
        if (Math.abs(snake_y_center - fruit_y) <= (totDistance)) {
            return true;
        }
    }
    return false;
}

function checkSelfCollision(x, y) {
    var snake_x_center = x + SNAKE_RADIUS;
    var snake_y_center = y + SNAKE_RADIUS;
    var totDistance = TAIL_RADIUS + SNAKE_RADIUS;
    for (i = 0; i < STWOtailLength; i++) {
        if (Math.abs(snake_x_center - tail_x[i]) < (totDistance)) {
            if (Math.abs(snake_y_center - tail_y[i]) < (totDistance)) {
                return true;
            }
        }
    }
    return false;
}

function checkWallCollision(x, y) {
    var collision = 0;
    var snake_x_center = x + SNAKE_RADIUS;
    var snake_y_center = y + SNAKE_RADIUS;
    if (snake_x_center < (SNAKE_RADIUS) ||
        snake_x_center > (WIDTH - SNAKE_RADIUS) ||
        snake_y_center < (SNAKE_RADIUS) ||
        snake_y_center > (HEIGHT - SNAKE_RADIUS) )
        {
            collision = 1;
    }
    return collision;
}

function generateNewFruit() {
    var snake_x_center = snake_x + SNAKE_RADIUS;
    var snake_y_center = snake_y + SNAKE_RADIUS;
    do {
        fruit_x = Math.random() * WIDTH;
    } while ( ((fruit_x - FRUIT_RADIUS) < 0) ||
         ((fruit_x + FRUIT_RADIUS) > WIDTH)  ||
         (Math.abs(fruit_x - snake_x_center) < (SNAKE_RADIUS + FRUIT_RADIUS)) )
    do {
        fruit_y = Math.random() * HEIGHT;
    } while ( ((fruit_y - FRUIT_RADIUS) < 0) || 
        ((fruit_y + FRUIT_RADIUS) > HEIGHT)  ||
        (Math.abs(fruit_y - snake_y_center) < (SNAKE_RADIUS + FRUIT_RADIUS)) )
    
    return;
}

function generateTailSection() {
    var frameMarker = (allInputsMaxSize - 1) - (STWOtailLength * frameDelay);
    if (STWOtailLength == 0) {
        tail_x[STWOtailLength] = snake_x + SNAKE_RADIUS;
        tail_y[STWOtailLength] = snake_y + SNAKE_RADIUS;
        if (frameMarker >= 0) {
            for (i = 0; i < frameDelay * headAndFirstTailSectionGap; i++) {
                if ( allInputs[frameMarker - i] == "up" ) {
                    tail_y[STWOtailLength] += pixelsPerFrame;
                }
                else if ( allInputs[frameMarker - i] == "left" ) {
                    tail_x[STWOtailLength] += pixelsPerFrame;
                }
                else if ( allInputs[frameMarker - i] == "right" ) {
                    tail_x[STWOtailLength] -= pixelsPerFrame;
                }
                else if ( allInputs[frameMarker - i] == "down" ) {
                    tail_y[STWOtailLength] -= pixelsPerFrame;
                }
            }
        }
        else {
            for (i = 0; i < frameDelay * headAndFirstTailSectionGap; i++) {
                tail_x[STWOtailLength] -= pixelsPerFrame;
            }
        }
    }
    else {
        frameMarker -= (frameDelay * headAndFirstTailSectionGap -frameDelay);
        tail_x[STWOtailLength] = tail_x[STWOtailLength - 1];
        tail_y[STWOtailLength] = tail_y[STWOtailLength - 1];
        if (frameMarker >= 0) {
            for (i = 0; i < frameDelay; i++) {
                if ( allInputs[frameMarker - i] == "up" ) {
                    tail_y[STWOtailLength] += pixelsPerFrame;
                }
                else if ( allInputs[frameMarker - i] == "left" ) {
                    tail_x[STWOtailLength] += pixelsPerFrame;
                }
                else if ( allInputs[frameMarker - i] == "right" ) {
                    tail_x[STWOtailLength] -= pixelsPerFrame;
                }
                else if ( allInputs[frameMarker - i] == "down" ) {
                    tail_y[STWOtailLength] -= pixelsPerFrame;
                }
            }
        }
        else {
            for (i = 0; i < frameDelay; i++) {
                tail_x[STWOtailLength] -= pixelsPerFrame;
            }
        }
    }
}
function setFrameDelay() {
    return Math.ceil(((TAIL_RADIUS + SNAKE_RADIUS) * generalTailSectionsGap) / pixelsPerFrame);
}

function detectNearbyTail(x, y, stringDirection) {
    var collision = 0;
    var snake_x_temp = x + SNAKE_RADIUS;
    var snake_y_yemp = y + SNAKE_RADIUS;
    var totDistance = TAIL_RADIUS + SNAKE_RADIUS;
    for (z = 0; z < 3; z++) {
        if ( stringDirection == "up" ) {
            snake_y_yemp -= pixelsPerFrame;
        }
        else if ( stringDirection == "left" ) {
            snake_x_temp -= pixelsPerFrame;
        }
        else if ( stringDirection == "right" ) {
            snake_x_temp += pixelsPerFrame;
        }
        else if ( stringDirection == "down" ) {
            snake_y_yemp += pixelsPerFrame;
        }
        for (i = 0; i < STWOtailLength; i++) {
            if (Math.abs(snake_x_temp - tail_x[i]) < (totDistance)) {
                if (Math.abs(snake_y_yemp - tail_y[i]) < (totDistance)) {
                    collision = 1;
                }
            }
        }
    }
    return collision;
}


var mazeBoardOriginal = [
'■', '■', '■', '■', '■', '■', '■', '■', '■', '■', '\n',
'■', ' ', ' ', ' ', '■', '■', ' ', ' ', ' ', '■', '\n',
'■', ' ', '■', ' ', ' ', '■', ' ', '■', ' ', '■', '\n',
'■', ' ', '■', '■', ' ', ' ', ' ', '■', ' ', '■', '\n',
'■', ' ', ' ', '■', '■', '■', '■', ' ', ' ', '■', '\n',
'■', '■', ' ', ' ', ' ', ' ', '■', ' ', '■', '■', '\n',
'■', ' ', ' ', '■', '■', ' ', ' ', ' ', ' ', '■', '\n',
'■', ' ', '■', ' ', ' ', ' ', ' ', '■', '■', '■', '\n',
'■', ' ', ' ', ' ', '■', ' ', ' ', ' ', '@', '■', '\n',
'■', '■', '■', '■', '■', '■', '■', '■', '■', '■'
];
var mazeBoard = mazeBoardOriginal;
var mazeString = mazeBoard.join('');
var MAZEWIDTH = 11;
var mazeTarget = '@';
var mazeWall = '■';

var maze_cell = [];
maze_cell[0] = {
	row:1,
	col:1,
	dir:0
};

function printMazeArea() {
	mazeString = mazeBoard.join('');
	mazeArea.innerHTML = '\n' + mazeString;
}

var mazeSlider = document.getElementById("mazeSlider");
var mazeDelay = (1/mazeSlider.value) * 100;

function mazeBuild(n, callback) {
	mazeDelay = (1/mazeSlider.value) * 100;
	setTimeout( function() { var domain = mazeArrowDomain(n);
		setTimeout( function() { var i = 0;
			setTimeout( function() {
				(function nextStep() {
					if (i < domain.length && mazeValidSquare(n)) {
						mazeGetNextCell(n, domain[i])
						mazeDrawCurrentArrow(n);
						printMazeArea();
						mazeBuild(n+1, function(solved) {
							if (solved)
								callback(true);
							else {
								mazeEraseCurrentArrow(n);
								i++;
								setTimeout(nextStep, mazeDelay);
							}
						});
					}
					else {
						if (n == 0)
							mazeFinished();
						setTimeout(callback, mazeDelay, false);
					}
				})();
			}, mazeDelay);
		}, mazeDelay);
	}, mazeDelay);
}

function mazeArrowDomain(n) {
	var domain = [];
	//Right = 0;
	//Down = 1
	//Left = 2
	//Up = 3
	var i = 0;
	var indexRight = (maze_cell[n].row) * MAZEWIDTH + maze_cell[n].col+1;
	var indexDown = (maze_cell[n].row+1) * MAZEWIDTH + maze_cell[n].col;
	var indexLeft = (maze_cell[n].row) * MAZEWIDTH + maze_cell[n].col-1;
	var indexUp = (maze_cell[n].row-1) * MAZEWIDTH + maze_cell[n].col;
	
	if (mazeBoard[indexRight] == ' ' ||
	    mazeBoard[indexRight] == mazeTarget )
		domain.push(0);
	if (mazeBoard[indexDown] == ' ' ||
	    mazeBoard[indexDown] == mazeTarget )
		domain.push(1);
	if (mazeBoard[indexLeft] == ' ' ||
	    mazeBoard[indexLeft] == mazeTarget )
		domain.push(2);
	if (mazeBoard[indexUp] == ' ' ||
	    mazeBoard[indexUp] == mazeTarget )
		domain.push(3);
	return domain;
}

function mazeValidSquare(n) {
	var index = maze_cell[n].row * MAZEWIDTH + maze_cell[n].col;
	if (mazeBoard[index] == '■') {
		return false;
	}
	return true;
}
var mazeReset = 0;
function mazeSolved(n) {
	var index = mazeIndexOfPointedDirection(n);
	if (mazeBoard[index] == mazeTarget) {
		return true;
	}
	return false;
}
function mazeEraseCurrentArrow(n) {
	var index = maze_cell[n].row * MAZEWIDTH + maze_cell[n].col;
	mazeBoard[index] = ' ';
	printMazeArea();
}

//calculate the index of the space the arrow is pointing to
function mazeIndexOfPointedDirection(n) {
	var row = maze_cell[n].row;
	var col = maze_cell[n].col;
	if (maze_cell[n].dir == 'e'){
		col++;
	}
	else if (maze_cell[n].dir == 's'){
		row++;
	}
	else if (maze_cell[n].dir == 'w'){
		col--;
	}
	else if (maze_cell[n].dir == 'n'){
		row--;
	}
	return row * MAZEWIDTH + col;
}
function mazeDrawCurrentArrow(n) {
	var index = maze_cell[n].row * MAZEWIDTH + maze_cell[n].col;
	if (mazeBoard[index] != mazeTarget) {
		if (maze_cell[n].dir == 'e') {
			mazeBoard[index] = '&gt;'; // code for '>'
		}
		else if (maze_cell[n].dir == 's') {
			mazeBoard[index] = 'v';
		}
		else if (maze_cell[n].dir == 'w') {
			mazeBoard[index] = '&lt;'; // code for '<'
		}
		else if (maze_cell[n].dir == 'n') {
			mazeBoard[index] = '^';
		}
		
	}
}

function mazeGetNextCell(n, direction) {
	if (typeof maze_cell[n+1] == 'undefined')
		maze_cell.push({ row: maze_cell[n].row, col: maze_cell[n].col, dir: 0 });
	else {
		maze_cell[n+1].row = maze_cell[n].row;
		maze_cell[n+1].col = maze_cell[n].col;
		maze_cell[n+1].dir = 0;
	}
	
	if (direction == 0){
		maze_cell[n].dir = 'e';
		maze_cell[n+1].col++;
		return 1;
	}
	else if (direction == 1){
		maze_cell[n].dir = 's';
		maze_cell[n+1].row++;
		return 1;
	}
	else if (direction == 2){
		maze_cell[n].dir = 'w';
		maze_cell[n+1].col--;
		return 1;
	}
	else if (direction == 3){
		maze_cell[n].dir = 'n';
		maze_cell[n+1].row--;
		return 1;
	}
	return 0;
}

function mazeCellOk(n) {
	var i = 0;
	var index = maze_cell[n+1].row * MAZEWIDTH + maze_cell[n+1].col;
	if (mazeBoard[index] == mazeWall || mazeBoard[index] == mazeTarget)
		return 0;
	for (i = 0; i < n; i++) {
		if (maze_cell[n+1].row == maze_cell[i].row &&
		    maze_cell[n+1].col == maze_cell[i].col)
		    return 0;
	}
	return 1;
}
var mazeNotRunning = 1;
function mazeStart() {
	if (mazeNotRunning) {
		mazeDelay = (1/mazeSlider.value) * 100;
		document.getElementById("mazeButton").innerHTML = "In Progress";
		document.getElementById("mazeButton").disabled = true;
		mazeNotRunning = 0;
		mazeBuild(0);
	}
}

function resetMaze() {
	mazeNotRunning = 1;
	mazeBoard = mazeBoardOriginal;
	printMazeArea();
	document.getElementById("mazeButton").innerHTML = "Start";
	document.getElementById("mazeButton").disabled = false;
}
function mazeFinished() {
	resetMaze();
}
drawGame();
resetMaze();

