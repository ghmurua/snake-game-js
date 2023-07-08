function onKeyDownHandler(event) {

    let kc = event.which || event.keyCode;

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

    document.querySelector('.keyInfo').innerHTML = `${kc} ${direction}`

    moving()
}

document.querySelector('.main').addEventListener("mouseup",(e)=>{
    document.querySelector('.keyCapturer').focus()
})