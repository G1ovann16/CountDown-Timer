const daysEl = document.getElementById('days'); 
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('min');
const segEl = document.getElementById('seg');

const newYears = '1 Jan 2022';
// const newYears = '14 Aug 2021'; // Pesca
// const newYears = '16 march 2021'; //Sonita
//    const newYears = '16 May 2021';  // pollo

function countDown(){
    const newYearsDate= new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate)/ 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const mins = (Math.floor(totalSeconds / 60 % 24) % 60);
    const seg = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;  
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins; 
    segEl.innerHTML = seg; 
 
}

countDown();
setInterval(countDown, 1000)