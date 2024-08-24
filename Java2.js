function countdown() {
    // Get the elements
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");   


    // Set the target date and time (replace with your desired values)
     const targetDate = new Date("June 4, 2025 23:59:59");

    // Update the countdown every second
    setInterval(() => {
        const now = new Date();
        const timeDiff = targetDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes   
 = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);   


        // Update the elements
        daysElement.textContent = days;
        hoursElement.textContent = hours;
        minutesElement.textContent = minutes;
        secondsElement.textContent = seconds;
    }, 1000);   

}

// Start the countdown
countdown();