snake = [36,37,38,39]     // la posicion 0 va borrando la cola
long = snake.length-1
direction = 'R'

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
    document.querySelector(`.t${snake[long]}`).classList.toggle('snakeHead')
    for (let i=long-1; i>0; i--) {
        document.querySelector(`.t${snake[i]}`).classList.toggle('snakeBody')
    }
}

function moving() {
    try {
        if (direction === 'L') head = snake[long] - 1
        if (direction === 'U') head = snake[long] - 17
        if (direction === 'R') head = snake[long] + 1
        if (direction === 'D') head = snake[long] + 17

        snake.push(head)
        snake.shift()

        showMovement()
    }
    catch {
        console.log('error: saliendose de los limites')
    }
}

function showMovement() {
    head = snake[long]
    document.querySelector(`.t${head}`).classList.toggle('snakeHead')
    body = snake[long-1]
    document.querySelector(`.t${body}`).classList.toggle('snakeHead')
    document.querySelector(`.t${body}`).classList.toggle('snakeBody')
    end = snake[0]
    document.querySelector(`.t${end}`).classList.toggle('snakeBody')
}
