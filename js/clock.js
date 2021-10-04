const clock = document.querySelector("h2#clock");

function updateClock(){
    Hours = new Date().getHours().toString().padStart(2,"0");
    Min = new Date().getMinutes().toString().padStart(2,"0");
    Sec= new Date().getSeconds().toString().padStart(2,"0");
    clock.innerText = `${Hours}:${Min}:${Sec}`;
}
updateClock();
setInterval(updateClock,1000);

