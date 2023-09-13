// Question 2
//  Build a countdown timer that takes a target date and time as input and displays the remaining time in
//  days, hours, minutes and seconds until that target date and time is reached.

// Function to calculate the time remaining until the target date and time
function calculateTimeRemaining(targetDate) {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

// Function to update the countdown timer display
function updateCountdownDisplay() {
    const targetDate = new Date("2023-10-31T23:59:59").getTime();
    const timeRemaining = calculateTimeRemaining(targetDate);

    document.getElementById("days").textContent = timeRemaining.days;
    document.getElementById("hours").textContent = timeRemaining.hours;
    document.getElementById("minutes").textContent = timeRemaining.minutes;
    document.getElementById("seconds").textContent = timeRemaining.seconds;
}

// Update the countdown display every second
setInterval(updateCountdownDisplay, 1000);

// Initial display update
updateCountdownDisplay();
