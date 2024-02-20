let digite = document.getElementById("digits");
function setTime(){
    let date = new Date();
    let currentTime = date.toLocaleTimeString()
    digite.innerHTML = currentTime;
}

setInterval(setTime,1000);