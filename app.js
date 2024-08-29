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
