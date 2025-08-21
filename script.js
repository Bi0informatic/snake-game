const gameCanvas = document.getElementById("game-canvas");
const ctx = gameCanvas.getContext("2d");
const scoreText = document.getElementById("score-text");
const restartButton = document.getElementById("restart-button");
const gameWidth = gameCanvas.width;
const gameHeight = gameCanvas.height;
const boardBackground = "#b7a148"
const snakeColor = "#485eb7"
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let score = 0;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let snake = [
    {x:unitSize * 4, y:0},
    {x:unitSize * 3, y:0},
    {x:unitSize * 2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0},
];

window.addEventListener("keydown", changeDirection);
restartButton.addEventListener("click", restartGame);

gameStart();

function gameStart() {
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};
function nextTick() {
    if (running) {
        setTimeout (() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 75)
    } else {
        displayGameOver();
    }
};
function clearBoard() {
    ctx.fillStyle = boardBackground; 
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function createFood() {
    function randomFood(min, max) {
        const randNum = Math.round((Math.random() * (max - min) + min) / unitSize) * unitSize;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameHeight - unitSize);
};
function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};
function moveSnake() {
    const head = { 
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
    }
    snake.unshift(head);

    if (snake[0].x == foodX && snake[0].y == foodY) {
        score += 1;
        scoreText.textContent = score;
        createFood();
    } else {
        snake.pop();
    }
};

function drawSnake() {
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;

    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, unitSize, unitSize);
        ctx.strokeRect(snake[i].x, snake[i].y, unitSize, unitSize);
    }
};

function changeDirection(event) {
    switch (event.code) {
        case "ArrowLeft" :
            if (!xVelocity) {
                xVelocity = -unitSize;
                yVelocity = 0;
            }
            break;
        case "ArrowUp":
            if (!yVelocity) {
                xVelocity = 0;
                yVelocity = -unitSize;
            }
            break;
        case "ArrowRight":
            if (!xVelocity) {
                xVelocity = unitSize;
                yVelocity = 0;
            }
            break;
        case "ArrowDown":
            if (!yVelocity) {
                xVelocity = 0;
                yVelocity = unitSize;
            }
            break;
        default:
            break;
    }
};
function checkGameOver() {
    switch (true) {
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            running = false;
            break;
        default:
            break;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            running = false;
        }
    }
};
function displayGameOver() {
    ctx.font = "50px Times New Roman";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!", gameWidth/2, gameHeight/2);
    running = false;
};
function restartGame() {
    snake = [
        {x:unitSize * 4, y:0},
        {x:unitSize * 3, y:0},
        {x:unitSize * 2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0},
    ];
    xVelocity = unitSize;
    yVelocity = 0;
    score = 0;
    gameStart();
};