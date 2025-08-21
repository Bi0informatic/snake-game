const gameCanvas = document.getElementById("game-canvas");
const context = gameCanvas.getContext("2d");
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

function gameStart() {};
function nextTick() {};
function clearBoard() {};
function createFood() {};
function drawFood() {};
function moveSnake() {};
function drawSnake() {};
function changeDirection() {};
function checkGameOver() {};
function displayGameOver() {};
function restartGame() {};