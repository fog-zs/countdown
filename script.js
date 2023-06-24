document.addEventListener("DOMContentLoaded", function() {
    var count = 0;
    var comp = 0;
    var countdownInterval = null;
    var countdownContainer = document.getElementById("countdown");
    var titleInput = document.getElementById("title-input");
    var endtimeInput = document.getElementById("endtime-input");
    var titleText = document.getElementById("title-text");
    var currentTimeText = document.getElementById("current-time");
    var endtimeText = document.getElementById("endtime-text");

    function setCountdown() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }

        var title = titleInput.value;
        var endtime = endtimeInput.value;

        titleText.innerHTML = title;

        var set = new Date(endtime);
        countdownInterval = setInterval(getCountdown, 10, set);
    }

    function getCountdown(set) {
        count++;
        count % 30;
        var now = new Date();

        var countdown = set.getTime() - now.getTime();
        countdown += 10;

        if (countdown < 0) countdown = 0;

        var ms = Math.floor(countdown);
        var s = Math.floor(countdown / 1000);
        var m = Math.floor(countdown / 1000 / 60) % 60;
        var h = Math.floor(countdown / 1000 / 60 / 60) % 24;
        var d = Math.floor(countdown / 1000 / 60 / 60 / 24);
        var re = [d, h, m, s];

        if (comp != s) {
            comp = s;
            f = 1;
            changeOpacityA();
        }

        currentTimeText.innerHTML = now.toLocaleString();
        endtimeText.innerHTML = set.toLocaleString();
        countdownContainer.innerHTML = ('000000000' + s).slice(-9) + "秒" + ('00' + (ms % 1000 / 10).toFixed(0)).slice(-2);
    }

    var f = 1;

    function changeOpacityA() {
        if (f > 0) {
            f -= 0.005;
            setTimeout(changeOpacityA, 0);
        }
        var elements = document.getElementsByClassName('countdown-container');
        for (i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "rgb(" + 100 * f + ", 0, 0)";
        }
    }

    var button = document.querySelector("button");
    button.addEventListener("click", setCountdown);
});