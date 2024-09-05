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
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = dayNames[date.getDay()];

    return {
        dayNumber: dayNumber,
        dayName: dayName,
        monthNumber: monthNumber,
        monthName: monthName,
        year: year
    };
}

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

const currentDate = getCurrentDate();
const currentTime = getCurrentTime();
const timeLeft = timeToDayEnd();
const timeToMonthEnd = timeToMonthEndTotal();
const timeToYearEnd = timeToYearEndTotal();

const todayButton = `${currentDate.dayName.toUpperCase()} ${currentDate.dayNumber}.${currentDate.monthNumber}.${currentDate.year}`
const button1 = document.getElementById('todayButton');
button1.textContent = todayButton;

const monthButton = `${currentDate.monthName.toUpperCase()}`
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

const monthDaysText = `${timeToMonthEnd.days}`
const monthDays = document.getElementById('month-days');
monthDays.textContent = monthDaysText;

const monthHoursText = `${timeToMonthEnd.hours}`
const monthHours = document.getElementById('month-hours');
monthHours.textContent = monthHoursText;

const monthMinutesText = `${timeToMonthEnd.minutes}`
const monthMinutes = document.getElementById('month-minutes');
monthMinutes.textContent = monthMinutesText;

const monthSecondsText = `${timeToMonthEnd.seconds}`
const monthSeconds = document.getElementById('month-seconds');
monthSeconds.textContent = monthSecondsText;

const yearMonthsText = `${timeToYearEnd.months}`
const yearMonths = document.getElementById('year-months');
yearMonths.textContent = yearMonthsText;

const yearDaysText = `${timeToYearEnd.days}`
const yearDays = document.getElementById('year-days');
yearDays.textContent = yearDaysText;

const yearHoursText = `${timeToYearEnd.hours}`
const yearHours = document.getElementById('year-hours');
yearHours.textContent = yearHoursText;

const yearMinutesText = `${timeToYearEnd.minutes}`
const yearMinutes = document.getElementById('year-minutes');
yearMinutes.textContent = yearMinutesText;

const yearSecondsText = `${timeToYearEnd.seconds}`
const yearSeconds = document.getElementById('year-seconds');
yearSeconds.textContent = yearSecondsText;
