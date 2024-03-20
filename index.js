function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}
// Set the target date for the countdown
const targetDate = new Date('2024-03-26T23:59:59');

setInterval(function(){
    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;

    // Calculate the remaining days, hours, minutes, and seconds
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);


    // Update the countdown elements with the remaining time
    document.querySelector('.number-day div').innerHTML = formatNumber(days);
    document.querySelector('.number-hours div').innerHTML = formatNumber(hours);
    document.querySelector('.number-minutes div').innerHTML = formatNumber(minutes);
    document.querySelector('.number-seconds div').innerHTML = formatNumber(seconds);

  },1000) 
  