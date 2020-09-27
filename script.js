// create button for highscores

// create a timer

// initialize buttons


var startBtn = document.querySelector('#start')
startBtn.addEventListener('click', startQuiz)



function startQuiz(event){
    console.log( `[startQuiz] initialized` )
    var hideSlide = document.querySelector('#welcome')
    hideSlide.style.opacity = "0"
    var showSlide = document.querySelector('#question-1')
    showSlide.style.opacity = "1"

   //document.querySelector(".page-link").setAttribute("aria-disabled", false)
    //document.querySelector("aside").setAttribute("style", "opacity: 1;")
    showSlide(currentSlide)
}

// Code from https://www.sitepoint.com/simple-javascript-quiz/
// Pagination
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
const submitBtn = document.getElementById("submit");
let currentSlide = 0;

previousBtn.addEventListener('click', showPreviousSlide)
nextBtn.addEventListener('click', showNextSlide)

function showSlide(idx) {
    slides[currentSlide].classList.remove('active-slide');
    slides[idx].classList.add('active-slide');
    currentSlide = idx;
    if(currentSlide === 0){  
        previousBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'none';
    }
    else{
        previousBtn.style.display = 'inline-block';
        nextBtn.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-2){
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    }
    else{
        nextBtn.style.display = 'inline-block';
        submitBtn.style.display = 'none';
    }
}



function showNextSlide() {
showSlide(currentSlide + 1);
}

function showPreviousSlide() {
showSlide(currentSlide - 1);
}
