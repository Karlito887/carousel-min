let images = document.querySelectorAll('.slider img')
let miniBtn = document.querySelectorAll('.mini-btn')
let current = 0;
slider()
function slider() {
    for (let i = 0; i < images.length; i++) {
        images[i].classList.add('opacity0')
        miniBtn[i].classList.remove('filled-mini-btn')
    }
    miniBtn[current].classList.add('filled-mini-btn')
    images[current].classList.remove('opacity0')
}

// document.querySelector('.slider').onclick = slider;

let left = document.querySelector('.leftSlide')
let right = document.querySelector('.rightSlide')

left.addEventListener('click', function () {
    if (current -1 == -1) {
        current = images.length -1
    }
    else current--
    slider()
})
right.addEventListener('click', function () {
    if (current +1 == images.length) {
        current = 0
    }
    else current++
    slider()
})

// керування слайдером за допомогою нижніх кнопок
document.querySelector('.mini-btn-slider').addEventListener('click', function(event){
    let miniDiv = event.target
    for(i = 0; i < miniBtn.length; i++){
        if(miniDiv == miniBtn[i]){
            current = i
            slider()
        }
    }  
})

function playSl() {
    if (current == images.length) {
        current = 0
    }
    slider()
    current++

}
let play = document.querySelector('.playSlider')
let pause = document.querySelector('.pauseSlider')

let myInterval
let playCurrent = 0
let firstPlay = 0
play.addEventListener('click', function () {
    if(firstPlay == 0){
        current++
        firstPlay++
    }
    if(playCurrent == 0){
        myInterval = setInterval(playSl, 3000)
        play.style.display = 'none'
        pause.style.display = 'block'
        playCurrent++
    }
})

pause.onclick = function(){
    if(playCurrent == 1){
        clearInterval(myInterval)
        playCurrent--
        pause.style.display = 'none'
        play.style.display = 'block'
    }
}
