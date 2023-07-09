const game = document.querySelector('.game')

snake = []
long = 0
direction = 'R'
walls = []
random = 0
points = 0

function newGame() {
    game.innerHTML = ''
    snake = [60,61,62,63]
    long = snake.length-1
    direction = 'R'
    points = 0

    for (let i=1; i<=323; i++) {
        let box = document.createElement('DIV')
        box.setAttribute('class',`tile t${i}`)
        game.appendChild(box)
    }

    for (let j=1; j<=19; j++) {
        document.querySelector(`.t${j}`).classList.add('wall')
    }
    for (let j=305; j<=323; j++) {
        document.querySelector(`.t${j}`).classList.add('wall')
    }
    for (let j=38; j<=304; j+=19) {
        document.querySelector(`.t${j}`).classList.add('wall')
        walls.push(j)
    }
    for (let j=20; j<=286; j+=19) {
        document.querySelector(`.t${j}`).classList.add('wall')
        walls.push(j)
    }

    initSnake()
    putFruit()
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
    eatFruit(head)
}

function crash(head) {
    const onWall = document.querySelector(`.t${head}`).classList.contains('wall')
    const onSnake = document.querySelector(`.t${head}`).classList.contains('snakeBody')
    if (onWall || onSnake) {
        console.log('chocando')
    }
}

function putFruit() {
    lastRandom = random
    random = Math.ceil(Math.random() * 282) + 21
    if (walls.indexOf(random) < 0 && 
        snake.indexOf(random) < 0 && 
        random != lastRandom)
    {
        document.querySelector(`.t${random}`).classList.toggle('apple')
    } else {
        putFruit()
    }
}

function eatFruit(head) {
    if (head === random) {
        points += 1
        document.querySelector('.pointsInfo').innerHTML = `${points}`
        console.log('manzana deglutida')
        document.querySelector(`.t${random}`).classList.toggle('apple')
        putFruit()
    }
}