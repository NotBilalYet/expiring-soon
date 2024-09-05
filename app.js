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

function updateDateTime() {
    const currentDate = getCurrentDate();
    const currentTime = getCurrentTime();
    const timeLeft = timeToDayEnd();
    const timeToMonthEnd = timeToMonthEndTotal();
    const timeToYearEnd = timeToYearEndTotal();
    
    document.getElementById('todayButton').textContent = `${currentDate.dayName.toUpperCase()} ${currentDate.dayNumber}.${currentDate.monthNumber}.${currentDate.year}`;
    document.getElementById('monthButton').textContent = `${currentDate.monthName.toUpperCase()}`;
    document.getElementById('yearButton').textContent = `${currentDate.year}`;

    document.getElementById('day-hours').textContent = `${timeLeft.hours}`;
    document.getElementById('day-minutes').textContent = `${timeLeft.minutes}`;
    document.getElementById('day-seconds').textContent = `${timeLeft.seconds}`;
    
    document.getElementById('month-days').textContent = `${timeToMonthEnd.days}`;
    document.getElementById('month-hours').textContent = `${timeToMonthEnd.hours}`;
    document.getElementById('month-minutes').textContent = `${timeToMonthEnd.minutes}`;
    document.getElementById('month-seconds').textContent = `${timeToMonthEnd.seconds}`;
    
    document.getElementById('year-months').textContent = `${timeToYearEnd.months}`;
    document.getElementById('year-days').textContent = `${timeToYearEnd.days}`;
    document.getElementById('year-hours').textContent = `${timeToYearEnd.hours}`;
    document.getElementById('year-minutes').textContent = `${timeToYearEnd.minutes}`;
    document.getElementById('year-seconds').textContent = `${timeToYearEnd.seconds}`;
}

setInterval(updateDateTime, 1000);
