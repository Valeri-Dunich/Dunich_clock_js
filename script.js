const hoursHand = document.querySelector('.clock-h')
const minutesHand = document.querySelector('.clock-m')
const secondsHand = document.querySelector('.clock-s')
const newDate = document.querySelector('.date')


function clock() {
    let now = new Date()
    let h = now.getHours()
    let m = now.getMinutes()
    let s = now.getSeconds()

    let sAngle = s * 6
    let mAngle = m * 6 + s * 0.1
    let hAngle = h * 30 + m / 2

    secondsHand.style.transform = `rotate(${sAngle}deg)`
    minutesHand.style.transform = `rotate(${mAngle}deg)`
    hoursHand.style.transform = `rotate(${hAngle}deg)`

    setTimeout(clock, 500)
}

clock()

let mounthEng=[
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
]

function date() {
    let now = new Date()
    let m = now.getMonth()
    let d = now.getDay()
    newDate.textContent=`${mounthEng[m]},  ${d}`
}
date();





