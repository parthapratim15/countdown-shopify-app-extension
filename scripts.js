var second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
const pickDateAttribue = document.getElementById("timer-display-id");
const inputedDate = pickDateAttribue.getAttribute("data-dateid");
var countDown = new Date(inputedDate).getTime(),
    x = setInterval(function () {
        var now = new Date().getTime(),
            distance = countDown - now;
        (document.querySelector(".js-timer-days").innerText = Math.floor(
            distance / day
        )),
            (document.querySelector(".js-timer-hours").innerText = Math.floor(
                (distance % day) / hour
            )),
            (document.querySelector(".js-timer-minutes").innerText = Math.floor(
                (distance % hour) / minute
            )),
            (document.querySelector(".js-timer-seconds").innerText = Math.floor(
                (distance % minute) / second
            ));
    }, second);
