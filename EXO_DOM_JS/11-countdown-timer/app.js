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
  'December'
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const giveaway = document.querySelector('.giveaway')
const deadline =document.querySelector('.deadline')
const items  = document.querySelectorAll('.deadline-format h4')

let currentDate = new Date()
let specificDate = new Date(2040,01,01,12,14,00)
const year = specificDate.getFullYear()
const month = specificDate.getMonth()
const day = specificDate.getDay()
const day2 = specificDate.getDate()
const hour= specificDate.getHours()
const minute= specificDate.getMinutes()
const second= specificDate.getSeconds()

giveaway.textContent = `GiveAway ends on the ${weekdays[day]} ${day2} ${months[month]} ${year} ${hour}:${minute}`


const futureTime = specificDate.getTime()

function remainingTime(){
const today= new Date().getTime()
const diff= futureTime - today
const unJour= 24*60*60*1000
const uneHeure= 60*60*1000
const uneMinute= 60*1000

let lesJoursRest= Math.floor(diff / unJour)


let lesHeuresRest= Math.floor((diff % unJour) / uneHeure)


let lesMinRest= Math.floor((diff % uneHeure) / uneMinute)

let lesSecRest= Math.floor((diff % uneMinute) / 1000)

const value = [lesJoursRest, lesHeuresRest, lesMinRest, lesSecRest]

function format(item){
if(item < 10){return item = `0${item}`} 
return item
}

items.forEach(function (item, index){
item.innerHTML = format(value[index])
})
}
let countdown = setInterval(remainingTime, 1000)
remainingTime()