let pause = false

function onKeyDownHandler(event) {

    let kc = event.which || event.keyCode;

    if (moved === false) {
        if(kc === 37 && direction != 'R'){
            direction = 'L'
        }
        else if(kc === 38 && direction != 'D'){
            direction = 'U'
        }
        else if(kc === 39 && direction != 'L'){
            direction = 'R'
        }
        else if(kc === 40 && direction != 'U'){
            direction = 'D'
        }
        moved = true
    }

    // ESC
    if (kc === 27 && crashed === false) {
        pause = !pause
        if (pause) clearInterval(clockInterval)
        else setClock()
    }
    // SPACE
    if (kc === 32 && crashed === true) {
        clearInterval(clockInterval)
        newGame()
    }
}

document.querySelector('.main').addEventListener("mouseup",(e)=>{
    document.querySelector('.keyCapturer').focus()
})
