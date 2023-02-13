let interval;

//1995-12-17T03:24:00
const eventDay = new Date('2023-02-18T10:00:00');

const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

let dayField = document.getElementById('day');
let hourField = document.getElementById('hour');
let minuteField = document.getElementById('minute');
let secondField = document.getElementById('second');

const countDown = () => {
	let today = new Date();
	let timeSpan = eventDay - today;

	if (timeSpan <= -today) {
		console.log("Unfortunately we have past the event day");
		clearInterval(interval);
	} else if (timeSpan <= 0) {
		console.log("Today is the event day");

		clearInterval(interval);

		return;
	} else {
		const days = Math.floor(timeSpan / day).toString();
		const hours = Math.floor((timeSpan % day) / hour).toString();
		const minutes = Math.floor((timeSpan % hour) / minute).toString();
		const seconds = Math.floor((timeSpan % minute) / second).toString();

		dayField.innerHTML = days < 10 ? 0 + days : days;
		hourField.innerHTML = hours < 10 ? 0 + hours : hours;
		minuteField.innerHTML = minutes < 10 ? 0 + minutes : minutes;
		secondField.innerHTML = seconds < 10 ? 0 + seconds : seconds;
	}
}

interval = setInterval(countDown, second);
