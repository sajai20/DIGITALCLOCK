'use strict';

const day = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//let currentTimeEl = document.querySelector('.hms')
function updateTime() {
    let dateInfo = new Date();

    let hr;
    let min = dateInfo.getMinutes() < 10 ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes();
    let sec = dateInfo.getSeconds() < 10 ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds();
    let ampm = dateInfo.getHours() >= 12 ? "PM" : "AM";

    if (dateInfo.getHours() == 0) {
        hr = 12;
    }
    else if (dateInfo.getHours() > 12) {
        hr = dateInfo.getHours() - 12;
    }
    else {
        hr = dateInfo.getHours();
    }

    //current time

    const current_time = `${hr}:${min}:${sec}`;
    document.querySelector('.hms').textContent = current_time;
    document.querySelector('.ampm').textContent = ampm;

    document.querySelector('.date').textContent = `${day[dateInfo.getDay()]}, ${month[dateInfo.getMonth()]} ${dateInfo.getDate()}`;
}

updateTime();
setInterval(() => {
    updateTime();
}, 1000)