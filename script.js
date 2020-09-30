// create button for highscores

// create a timer

// initialize buttons

const startBtn = document.getElementById('start')
startBtn.addEventListener('click', startQuiz)

// Code from https://www.sitepoint.com/simple-javascript-quiz/
// Pagination
const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
const submitBtn = document.getElementById("submit");
let currentSlide = 0;
let score = 0

previousBtn.addEventListener('click', showPreviousSlide)
nextBtn.addEventListener('click', showNextSlide)


function startQuiz(){
    console.log( `[startQuiz] initialized` )
    
    document.getElementById('welcome').classList.remove('active-slide')
    currentSlide += 1
    
    previousBtn.style.opacity = '1'
    nextBtn.style.opacity = '1'
    submitBtn.style.opacity = '1'
    
    showSlide(currentSlide);
}

function showSlide(idx) {
    console.log(`[showSlide] reached ... ${currentSlide}`)
    slides[currentSlide].classList.remove('active-slide');
    slides[idx].classList.add('active-slide');
    currentSlide = idx;

    if(currentSlide == 0){  
        
        console.log(`current slide is ${currentSlide}`)
    }
    else{
        previousBtn.style.display = 'inline-block';
        nextBtn.style.display = 'inline-block';
    }
    if(currentSlide == slides.length-2){
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
        console.log('last slide reached')
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

function storeScores(){
    
}

$('#submit').on('click', function(){
    
    var endSlide =  document.querySelector('#end')
    document.querySelector('#question-5').classList.remove('active-slide')
    endSlide.classList.add('active-slide')

    endSlide.children[0].textContent += score

    endSlide.innerHTML += `<button id="add-user" class="btn" type="button">Add</button>`

    previousBtn.style.opacity = '0'
    nextBtn.style.opacity = '0'
    submitBtn.style.opacity = '0'
    

    //stop timer
})

$('#add-user').on('click', storeScores)

$('.option-btn').on('click', function(event){
   
    var checkStatus = event.target.classList
    var ansStatus = document.querySelector('.answer-status')
    if ( checkStatus.contains('correct') ) {
        score += 1
        ansStatus.style.color = "green"
        ansStatus.textContent = "Correct!"
    } else {
        ansStatus.style.color = "red"
        ansStatus.textContent = "Wrong!"
        // remove 5 secs from timer
    }
    console.log(score)
})

//showSlide(currentSlide);
