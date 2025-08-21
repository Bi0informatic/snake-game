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
    clearBoard();
    drawSnake();
};
function nextTick() {};
function clearBoard() {
    ctx.fillStyle = boardBackground; 
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};
function createFood() {};
function drawFood() {};
function moveSnake() {

};

function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = snakeColor;
        ctx.strokeStyle = snakeBorder;
        ctx.fillRect(snake[i].x, snake[i].y, unitSize, unitSize)
    }
};

function changeDirection(event) {
    switch (event.code) {
        case "ArrowLeft":
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case "ArrowUp":
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case "ArrowRight":
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case "ArrowDown":
            xVelocity = 0;
            yVelocity = unitSize;
            break;
        default:
            break;
    }
};
function checkGameOver() {};
function displayGameOver() {};
function restartGame() {};