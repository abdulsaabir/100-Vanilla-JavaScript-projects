const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const dead = document.querySelector('.april');
const items = document.querySelectorAll('.deadline-format h4');
// 24 April 2020, 8:00am
let dates =new Date(2022,9,14,10,40,30)
let year= dates.getFullYear()
let hours= dates.getHours()
let minutes= dates.getMinutes()
let month =dates.getMonth()
let day = dates.getDay()
console.log(day)
window.addEventListener('DOMContentLoaded', () => {
  dead.textContent = `${weekdays[day]} ${months[month]} ${year} ${hours}:${minutes}am`
})