function showTab(tabIndex) {
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    tabButtons[tabIndex].classList.add('active');
    
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    document.getElementById(`tab-content-${tabIndex}`).classList.add('active');
}

function getCurrentDate() {
    const date = new Date();

    const year = date.getFullYear();

    const monthNumber = date.getMonth() + 1;
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthNames[date.getMonth()];

    const dayNumber = date.getDate();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = dayNames[date.getDay()];

    return {
        dayNumber: dayNumber,
        dayName: dayName,
        monthNumber: monthNumber,
        monthName: monthName,
        year: year
    };
}

const currentDate = getCurrentDate();
console.log(`Day Number: ${currentDate.dayNumber}, Day Name: ${currentDate.dayName}, Month Number: ${currentDate.monthNumber}, Month Name: ${currentDate.monthName}, Year: ${currentDate.year}`);

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

const currentTime = getCurrentTime();
console.log(`Hours: ${currentTime.hours}, Minutes: ${currentTime.minutes}, Seconds: ${currentTime.seconds}`);

function timeToDayEnd() {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);
    
    let remainingTime = endOfDay - now;
    
    const totalHours = remainingTime / (1000 * 60 * 60);
    const totalMinutes = remainingTime / (1000 * 60);
    const totalSeconds = remainingTime / 1000;
    
    return {
        hours: Math.floor(totalHours),
        minutes: Math.floor(totalMinutes),
        seconds: Math.floor(totalSeconds)
    };
}

const timeLeft = timeToDayEnd();
console.log(`Time to day end: ${timeLeft.hours} total hours, ${timeLeft.minutes} total minutes, ${timeLeft.seconds} total seconds`);

function timeToMonthEndTotal() {
    const now = new Date();
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
    
    let remainingTime = endOfMonth - now;
    
    const totalDays = remainingTime / (1000 * 60 * 60 * 24);
    const totalHours = remainingTime / (1000 * 60 * 60);
    const totalMinutes = remainingTime / (1000 * 60);
    const totalSeconds = remainingTime / 1000;
    
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    return {
        days: Math.floor(totalDays),
        hours: Math.floor(totalHours),
        minutes: Math.floor(totalMinutes),
        seconds: Math.floor(totalSeconds),
        totalDaysInMonth: totalDaysInMonth
    };
}

const timeToMonthEnd = timeToMonthEndTotal();
console.log(`Time to month end: ${timeToMonthEnd.days} total days, ${timeToMonthEnd.hours} total hours, ${timeToMonthEnd.minutes} total minutes, ${timeToMonthEnd.seconds} total seconds, Total days in the month: ${timeToMonthEnd.totalDaysInMonth}`);

function timeToYearEndTotal() {
    const now = new Date();
    const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
    
    let remainingTime = endOfYear - now;
    
    const totalMonths = endOfYear.getMonth() - now.getMonth() + 
                        (endOfYear.getFullYear() - now.getFullYear()) * 12;
    const totalDays = remainingTime / (1000 * 60 * 60 * 24);
    const totalHours = remainingTime / (1000 * 60 * 60);
    const totalMinutes = remainingTime / (1000 * 60);
    const totalSeconds = remainingTime / 1000;
    
    return {
        months: totalMonths,
        days: Math.floor(totalDays),
        hours: Math.floor(totalHours),
        minutes: Math.floor(totalMinutes),
        seconds: Math.floor(totalSeconds)
    };
}

const timeToYearEnd = timeToYearEndTotal();
console.log(`Time to year end: ${timeToYearEnd.months} full months, ${timeToYearEnd.days} total days, ${timeToYearEnd.hours} total hours, ${timeToYearEnd.minutes} total minutes, ${timeToYearEnd.seconds} total seconds`);

const todayButton = `${currentDate.dayNumber}.${currentDate.monthNumber}.${currentDate.year}`
const button1 = document.getElementById('todayButton');
button1.textContent = todayButton;

const monthButton = `${currentDate.monthName}`
const button2 = document.getElementById('monthButton');
button2.textContent = monthButton;

const yearButton = `${currentDate.year}`
const button3 = document.getElementById('yearButton');
button3.textContent = yearButton;

const dayHoursText = `${timeLeft.hours}`
const dayHours = document.getElementById('day-hours');
dayHours.textContent = dayHoursText;

const dayMinutesText = `${timeLeft.minutes}`
const dayMinutes = document.getElementById('day-minutes');
dayMinutes.textContent = dayMinutesText;

const daySecondsText = `${timeLeft.seconds}`
const daySeconds = document.getElementById('day-seconds');
daySeconds.textContent = daySecondsText;
