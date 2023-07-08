snake = [60,61,62,63,64,65]     // la posicion 0 va borrando la cola
long = snake.length-1
direction = 'R'

function newGame() {
    for (let i=1; i<=323; i++) {
        let box = document.createElement('DIV')
        box.setAttribute('class',`tile t${i}`)
        document.querySelector('.game').appendChild(box)
    }

    for (let j=1; j<=19; j++) {
        document.querySelector(`.t${j}`).classList.add('wall')
    }
    for (let j=305; j<=323; j++) {
        document.querySelector(`.t${j}`).classList.add('wall')
    }
    for (let j=38; j<=304; j+=19) {
        document.querySelector(`.t${j}`).classList.add('wall')
    }
    for (let j=20; j<=286; j+=19) {
        document.querySelector(`.t${j}`).classList.add('wall')
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
        if (direction === 'U') head = snake[long] - 19
        if (direction === 'R') head = snake[long] + 1
        if (direction === 'D') head = snake[long] + 19

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
    document.querySelector(`.t${body}`).classList.replace('snakeHead','snakeBody')
    end = snake[0]
    document.querySelector(`.t${end}`).classList.toggle('snakeBody')
    
    crash(head)
}

function crash(head) {
    const onWall = document.querySelector(`.t${head}`).classList.contains('wall')
    const onSnake = document.querySelector(`.t${head}`).classList.contains('snakeBody')
    if (onWall || onSnake) {
        console.log('chocando')
    }
}
