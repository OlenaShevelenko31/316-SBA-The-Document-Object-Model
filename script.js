// >>>>>>>>>>>>>>>>>>>>>>>>>>>> Motivation element with qoutes <<<<<<<<<<<<<<<<<<<<<<<<<<
const button = document.getElementById ("btn");
const par = document.getElementById("quote");

const quotes =[
    "A bad day doesn’t equal a bad life.    ",
    "There are billions of cells in your body and all they care about is you.",
    "Just because you take breaks doesn’t mean you’re broken.– Curtis Tyrone Jones",
    "Your feelings are always valid, no matter what they are.",
    "Your past does not define you.",
    "You do not need the approval of others to feel happy.",
    "It’s a new day: kick ass, walk tall, and sparkle!",
    "“Beauty begins the moment you decide to be yourself.” -Coco Chanel",
    "“Believe you can and you’re halfway there.” -Theodore Roosevelt"
]
button.addEventListener('click', ()=>{
    let randomQuate = quotes [Math.floor(Math.random()* quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuate;
})
// >>>>>>>>>>>>>>>>>>>>>>>>>>>> TIMER starts <<<<<<<<<<<<<<<<<<<<<<<<<<

let timerID;
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");

startButton.addEventListener("click", function () {
    timer();
});

stopButton.addEventListener("click", function () {
    stopTimer();
});

const time = 30;
let totalTime = time * 60;

function timer() {
    startButton.setAttribute("disabled", true);

    function countdown() {
        const countdownElement = document.querySelector("#countdown");
        countdownElement.style.display = "block";
        let min = Math.floor(totalTime / 60);
        let sec = totalTime % 60;

        totalTime--;

        if (sec < 10) {
            sec = "0" + sec;
        }

        countdownElement.textContent = `${min}:${sec}`;

        if (totalTime < 0) {
            stopTimer();
            totalTime = 0;
            // window.alert()
            Swal.fire({
                title: 'Timer is over!',
                imageUrl: 'https://images.unsplash.com/photo-1501743411739-de52ea0ce6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                imageWidth: 600,
                imageHeight: 400,
                imageAlt: 'Victory!',
              })
    }
    }

    timerID = setInterval(countdown, 1000);

}

function stopTimer() {
    clearInterval(timerID);
    startButton.removeAttribute("disabled");
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>> TIMER ends <<<<<<<<<<<<<<<<<<<<<<<<<<


// >>>>>>>>>>>>>>>>>>>>>>>>>>>> To do list input element <<<<<<<<<<<<<<<<<<<<<<<<<<


const input = document.querySelector ('.input');
const btn = document.querySelector ('.btn');
const clearLiBtn = document.querySelector('.clearLiBtn')
const list = document.querySelector ('.list');

const selectedDay = document.getElementById("day");
const mondayList = document.querySelector(".monday.list");
const tuesdayList = document.querySelector(".tuesday.list");
const wednesdayList = document.querySelector(".wednesday.list");
const thursdayList = document.querySelector(".thursday.list");
const fridayList = document.querySelector(".friday.list");
const saturdayList = document.querySelector(".saturday.list");
const sundayList = document.querySelector(".sunday.list");


btn.addEventListener ('click', function(){
    const item = document.createElement ('li');



    item.innerText = input.value;
    if (input.value.length < 4) {
        alert("Too short ...");
        return false;
    }

    if (input.value.length === 0) {
        return false;
    }
    item.classList.add ('styleList');
    switch(selectedDay.value) {
        case 'monday':
            mondayList.appendChild(item);
            break;
        case 'tuesday':
            tuesdayList.appendChild(item);
            break;
        case 'wednesday':
            wednesdayList.appendChild(item);
            break;
        case 'thursday':
            thursdayList.appendChild(item);
            break;
        case 'friday':
            fridayList.appendChild(item);
            break;
        case 'saturday':
            saturdayList.appendChild(item);
            break;
        case 'sunday':
            sundayList.appendChild(item);
            break;
        default:
            break;
    }
    

    item.addEventListener ('click', function(){
        item.classList.add ('toDoCompated');
    })

    item.addEventListener('dblclick', function(){
        const parentList = item.parentElement; 
        parentList.removeChild(item);      

        // window.alert('To-Do item succescfully finished! Yay ');
        Swal.fire({
            title: 'You did it! Yay :)',
            imageUrl: 'https://images.unsplash.com/photo-1501743411739-de52ea0ce6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            imageWidth: 600,
            imageHeight: 400,
            imageAlt: 'Victory!',
          })
    }) 
})

function clearAllItems(event){
    let day = event.value;
    let ul

    console.log(day);
    switch(day){    
        case 'monday':
            ul = mondayList
            break;
        case 'tuesday':
            ul =  tuesdayList
            break;
        case 'wednesday':
            ul =  wednesdayList
            break;
        case 'thursday':
            ul =  thursdayList
            break;
        case 'friday':
            ul =  fridayList
            break;
        case 'saturday':
            ul =  saturdayList
            break;
        case 'sunday':
            ul =  sundayList
            break;
        default:
            break;
    }
    if(ul){
        while(ul.firstChild){
            ul.removeChild(ul.firstChild);
        }
    }
}