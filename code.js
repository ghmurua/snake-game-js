snake = [37,38,39]
long = snake.length

function newGame() {
    for (let i=1; i<=255; i++) {
        let box = document.createElement('DIV')
        box.setAttribute('class',`tile t${i}`)
        document.querySelector('.game').appendChild(box)
    }
    initSnake()
}

newGame()

function initSnake() {
    for (let i=0; i<long-1; i++) {
        document.querySelector(`.t${snake[i]}`).classList.toggle('snakeBody')
    }
    document.querySelector(`.t${snake[long-1]}`).classList.toggle('snakeHead')
}

