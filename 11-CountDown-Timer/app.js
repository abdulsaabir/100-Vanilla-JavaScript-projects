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
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const dead = document.querySelector('.april');
const items = document.querySelectorAll('.deadline-format h4');

let dates =new Date()
window.addEventListener('DOMContentLoaded', () => {
  dead.textContent = dates.getDay() + " " + dates.getMonth()
})
