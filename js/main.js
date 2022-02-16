
window.onload = function () {

    let seconds = 00,
        tens = 00,
        appendTens = document.getElementById('tens'),
        appendSeconds = document.getElementById('seconds'),
        buttonStart = document.getElementById('button-start'),
        buttonStop = document.getElementById('button-stop'),
        buttonReset = document.getElementById('button-reset'),
        Interval

    buttonStart.onclick = function() {

        clearInterval(Interval)
        Interval = setInterval(startTimer, 10)
    }

    buttonStop.onclick = function() {
        clearInterval(Interval)
    }

    buttonReset.onclick = function() {
        clearInterval(Interval)
        tens = "00"
        seconds = "00"
        appendTens.innerHTML = tens
        appendSeconds.innerHTML = seconds
    }


    function startTimer() {
        tens++

        if(tens <= 9) {
            appendTens.innerHTML = "0" + tens
        }

        if(tens > 9) {
            appendTens.innerHTML = tens
        }

        if(tens > 99) {
            console.log('seconds')
            seconds++
            appendSeconds.innerHTML = "0" + seconds
            tens = 0
            appendTens.innerHTML = "0" + 0
        }

        if(seconds > 9) {
            appendSeconds.innerHTML = seconds
        }
    }

}