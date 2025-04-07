// Set the date we're counting down to (September 1st, 2025)
const countdownDate = new Date("September 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const distance = countdownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  document.getElementById("days").innerText = days < 10 ? '0' + days : days;
  document.getElementById("hours").innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? '0' + seconds : seconds;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "The Auction is Live!";
  }
}, 1000);
