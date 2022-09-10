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
// 24 April 2020, 8:00am

let newdate = new Date()
let tempYear = newdate.getFullYear()
let tempMoth = newdate.getMonth()
let tempDay = newdate.getDate()
let dates = new Date(tempYear, tempMoth , tempDay + 9 , 40 , 74 , 59 , 1000)
let year= dates.getFullYear()
let hours= dates.getHours()
let minutes= dates.getMinutes()
let month =dates.getMonth()
let days= dates.getDay()

dead.textContent = weekdays[days]+" "+months[month]+" "+year+", "+hours+":"+minutes+"am"


let futureDate = dates.getTime()
function GetRemaingTime() {
let today = new Date().getTime()
let t = futureDate - today

let oneDay = 24 * 60 * 60 * 1000
let oneHour = 60 * 60 * 1000
let oneMinute = 60 * 1000
let oneSecond = 1000
let dayRemaing = Math.floor(t/oneDay)
let HoursRemaining = Math.floor((t % oneDay) / oneHour)
let MinutesRemaing = Math.floor((t % oneHour) / oneMinute)
let secondsRemainng = Math.floor((t % oneMinute)/ oneSecond)

let Values = [dayRemaing , HoursRemaining , MinutesRemaing , secondsRemainng]
function format(item) {
  if(item < 10)
  {
    return item = `0${item}`
  }
  return item
}

items.forEach((item, i )=> {
  item.innerHTML = format(Values[i])
})
if (t < 0)
{
  clearInterval(countdown)
  deadline.innerHTML = `<h3> CONGRATULATIONS ABDULSAABIR THE WINNER OF OUR GIVE AWAY <h3>`
}

}
let countdown = setInterval(GetRemaingTime, 1000)
GetRemaingTime()