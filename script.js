

const startBtn = document.getElementById('start')
startBtn.addEventListener('click', startQuiz)


const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
const submitBtn = document.getElementById("submit");
const optBtn = document.querySelectorAll('.option-btn')
var timeEl = document.getElementById('time')
let currentSlide = 0;
let score = 0
var timeLeft = 60

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
    setTime()
}

function setTime(){
    console.log("counting down ...")

    var timerInterval = setInterval(function(){
        timeLeft--;
        timeEl.textContent = "Time: " + timeLeft
        if (timeLeft == 0) {
            clearInterval(timerInterval)
            endQuiz();
        }else if (document.getElementById('end').classList.contains('active-slide')){
            clearInterval(timerInterval)
        }

    }, 1000); 
    
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
    for (let i=0; i<optBtn.length; i++){
        optBtn[i].removeAttribute("disabled", "")
    }
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

function storeScores(){
    console.log("[storeScores] has been reached ...")
    var user = document.getElementById('userInitials').value
    localStorage.setItem(user, score)
}

$('#submit').on('click', endQuiz)

function endQuiz(){
    for (let i=0; i<slides.length; i++){
        slides[i].classList.remove('active-slide');
    }

    var endSlide =  document.querySelector('#end')
    endSlide.classList.add('active-slide')

    
    endSlide.children[0].textContent += score

    endSlide.innerHTML += `<button id="add-user" class="btn" type="button">Add</button>`

    previousBtn.style.opacity = '0'
    nextBtn.style.opacity = '0'
    submitBtn.style.opacity = '0'
    

    //stop timer
    clearInterval(timerInterval)
}

$('.option-btn').on('click', function(event){
    
    for (let i=0; i<optBtn.length; i++){
        optBtn[i].setAttribute("disabled", "")
    }

    
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
        timeLeft -= 5
    }
    console.log(score)
})

$('#add-user').on('click', storeScores)

$('#high-score').on('click', function(){
    localStorage.getItem(user, score)
    console.log("pulling high scores")
    //document.querySelector('')
})
