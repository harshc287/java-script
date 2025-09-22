//form Validation
function register() {

    userNameInputValue = document.querySelector("#userName").value;
    emailInputValue = document.querySelector('#email').value;
    passwordInputValue = document.querySelector('#password').value;

    if (userNameInputValue.trim().length > 0) {
        document.querySelector("#userMsg").innerHTML = `<div class="alert alert-primary" role="alert">
                                                                    Well Done
                                                                </div>`
    } else {
        document.querySelector("#userMsg").innerHTML = `<div class="alert alert-primary text-center" role="alert">
                                                                     
                                                                     Plese enter your valid name
                                                                </div>`
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (emailPattern.test(emailInputValue)) {
        document.querySelector("#emailuserMsg").innerHTML = `<div class="alert alert-primary" role="alert">
                                                                    email address added successfully
                                                                </div>`
    } else {
        document.querySelector("#emailuserMsg").innerHTML = `<div class="alert alert-primary text-center" role="alert"> 
                                                                     email address is not in pattern
                                                                </div>`
    }

    if (passwordInputValue.trim().length >= 6) {
        document.querySelector("#passwordalert").innerHTML = `<div class="alert alert-primary" role="alert">
                                                                    Well Done
                                                                </div>`
    } else {
        document.querySelector("#passwordalert").innerHTML = `<div class="alert alert-primary text-center" role="alert">
                                                                     
                                                                     Plese enter your valid Password
                                                                </div>`
    }
}
//theme change

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector("#changeTheme").addEventListener('click', () => {
//         console.log(document.body.classList)
//         if (document.body.classList.contains('bg-light')){
//             document.body.classList.remove('bg-light', 'text-dark')
//             document.querySelector('body').classList.add('bg-dark', 'text-primary')
//         }
//         else {
//             document.body.classList.remove('bg-dark', 'text-primary')

//             document.querySelector('body').classList.add('bg-light', 'text-dark')
//         }

//     })
// })

//ToDo list 
let tasks = []
function renderTask() {
    const taskList = document.querySelector("#taskList")

    taskList.innerHTML = tasks.map((task, index) => {
        return `<li class="list-group-item m-2 ">${task} 
          <button class="btn btn-info ms-4" onclick="removeTask(${index})">Delete</button>
          </li>`;
    }).join()
}

//completed function
taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
})
//add
function addTask() {
    input = document.querySelector("#floatingInput")
    taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    tasks.push(taskText)
    input.value = ''
    renderTask()
}
//remove
function removeTask(index) {
    tasks.splice(index, 1)
    renderTask();
}
//clear list
function clearList() {
    tasks = [];
    renderTask();
}


//image slider
document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'https://i.pinimg.com/736x/47/f0/f8/47f0f88cb3f08b08989df5e602065bdc.jpg',
        'https://i.pinimg.com/736x/d6/f9/aa/d6f9aa1079ee4199759923ab8d5360de.jpg',
        'https://i.pinimg.com/736x/e8/c4/2d/e8c42d1c9c3186261c7834dfdfef67bc.jpg'
    ];

    let currentIndex = 0;

    const imageElement = document.querySelector("#sliderImage");
    const prevBtn = document.querySelector("#prev");
    const nextBtn = document.querySelector("#next");
    const sliderContainer = document.querySelector("#sliderContainer");

    function showImage(index) {
        if (index < 0 || index >= images.length) return;

        imageElement.classList.add('fade-out')
        setTimeout(() => {
            imageElement.src = images[index]
            imageElement.classList.remove('fade-out')
        }, 200)
    }

    function nextImage() {
        clearInterval(timer);
        currentIndex = (currentIndex + 1) % images.length
        showImage(currentIndex);
        timer = setInterval(nextImage, 3000);
    }

    function prevImage() {
        clearInterval(timer);
        currentIndex = (currentIndex - 1 + images.length) % images.length
        showImage(currentIndex);
        timer = setInterval(nextImage, 3000);
    }

    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);

    let timer = setInterval(nextImage, 2000)

    sliderContainer.addEventListener('mouseenter', () => clearInterval(timer))
    sliderContainer.addEventListener('mouseleave', () => {
        clearInterval(timer)
        timer = setInterval(nextImage, 2000);
    })

    showImage(currentIndex);
});
//clock timer

document.addEventListener('DOMContentLoaded', function () {
    const clockElement = document.querySelector('#clock')
    const dateElement = document.querySelector('#date')
    const formatToggle = document.querySelector('#formatToggle')
    const colorToggle = document.querySelector('#colorToggle')

    let is24HourFormat = true;
    let colorIndex = 0;
    const colorThemes = [
        'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)',
        'linear-gradient(135deg, #0ba360 0%, #3cba92 100%)',
        'linear-gradient(135deg, #e4936aff 0%, #d76868ff 50%, #e7c06cff 100%)'
    ]

    function updateClock() {

        const now = new Date()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        let seconds = now.getSeconds()
        let amPm = ''

        if (is24HourFormat) {
            amPm = hours >= 12 ? 'PM' : 'AM'
            hours = hours % 12 || 12
        } else {
            amPm = ''
        }
        hours = hours.toString().padStart(2, '0')
        minutes = minutes.toString().padStart(2, '0')
        seconds = seconds.toString().padStart(2, '0');

        clockElement.textContent = `${hours}:${minutes}:${seconds}${amPm}`;

        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
    updateClock();
    setInterval(updateClock, 1000)

    formatToggle.addEventListener('click', function () {
        is24HourFormat = !is24HourFormat;
        updateClock()
    })
    colorToggle.addEventListener('click', function () {
        colorIndex = (colorIndex + 1) % colorThemes.length
        document.body.style.background = colorThemes[colorIndex]
        setInterval(() => {

        })
    })


})

//quiz mini app

const questions = [
    {
        question: ":contentReference[oaicite:2]{index=2} me data store karne ke liye kya use hota hai?",
        options: ["Variable", "Loop", "Function", "Event"],
        correct: 0
    },
    {
        question: ":contentReference[oaicite:3]{index=3} ka full form kya hai?",
        options: ["Hyper Text Makeup Language", "Hyper Text Markup Language", "HighText Machine Language", "None"],
        correct: 1
    },
    {
        question: ":contentReference[oaicite:4]{index=4} ka use kis ke liye hota hai?",
        options: ["Structure", "Styling", "Logic", "Data"],
        correct: 1
    }
];


const questionEl = document.querySelector("#question");
const optionButtons = document.querySelectorAll(".option");
const scoreEl = document.querySelector("#score");

let currentIndex = 0
let score = 0

function showQuestion() {
    let currentQ = questions[currentIndex]
    questionEl.textContent = currentQ.question
    console.log("question idher he ", currentQ)

    optionButtons.forEach((btn, i) => {
        btn.textContent = currentQ.options[i]
        console.log("option idher ", optionButtons);

    })
}
optionButtons.forEach((btn, i) => {
    console.log("adding click on button", i);
    btn.addEventListener("click", () => {
        let correctIndex = questions[currentIndex].correct
        console.log("button clicked", i);
        console.log(correctIndex)

        if (i === correctIndex) {
            score++
            scoreEl.textContent = "Score" + score
            console.log(scoreEl)
        }
        currentIndex++
        if (currentIndex < questions.length) {
            showQuestion()
        } else {
            questionEl.textContent = "🎉 Quiz Finished!";
            document.querySelector("#options").style.display = "none"
        }
    })

})
showQuestion()

//counter btn 

let count = 0
const counter = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');

function updateCounter(){
  counter.innerText = `Counter:${count}`;
}

decreaseBtn.addEventListener('click', ()=>{
  count--
  updateCounter()
})

increaseBtn.addEventListener('click', ()=>{
  count++
  updateCounter()
})

resetBtn.addEventListener('click', ()=>{
  count = 0
  updateCounter()
})


//popUP 
 const openBtn = document.getElementById('openModalBtn');
  const modal = new bootstrap.Modal(document.getElementById('myModal'));

  openBtn.addEventListener('click', () => {
    modal.show();  // <-- Ye modal popup karega
  });


