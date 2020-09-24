// create button for highscores

// create a timer

// initialize buttons

var startBtn = document.querySelector('#start')
startBtn.addEventListener('click', startQuiz)

var nextBtn = document.querySelector('#next')
nextBtn.addEventListener('click', showNextSlide)

var previousBtn = document.querySelector('#back')
previousBtn.addEventListener('click', showNextSlide)

function startQuiz(event){
    var hideSlide = document.querySelector('#welcome')
    hideSlide.style.opacity = "0"
    var showSlide = document.querySelector('#question-1')
    showSlide.style.opacity = "1"
}

function showPastSlide(){
    var hideSlide = document.querySelector('#question-1')
    hideSlide.style.opacity = "0"
    var showSlide = document.querySelector('#welcome')
    showSlide.style.opacity = "1"
}

function showNextSlide(){
    var hideSlide = document.querySelector('#welcome')
    hideSlide.style.opacity = "0"
    var showSlide = document.querySelector('#question-1')
    showSlide.style.opacity = "1"
}