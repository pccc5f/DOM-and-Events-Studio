// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    let check = window.confirm("Confirm that the shuttle is ready for takeoff.");
   if(check) {
    document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
    document.getElementById("shuttleBackground").style.background="blue";
    document.getElementById("spaceShuttleHeight").innerHTML = 10000
   } 

const land = document.getElementById("landing");
const takeoff = document.getElementById("takeoff");
const abort = document.getElementById("missionAbort");
const up = document.getElementById("up");
const down = document.getElementById("down");
const right = document.getElementById("right");
const left = document.getElementById("left");
land.addEventListener("click", function() {
    window.alert("The shuttle is landing. Landing gear engaged.");
    document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
    document.getElementById("shuttleBackground").style.background="green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
});
abort.addEventListener("click", function() {
    let confirm = window.confirm("Confirm that you want to abort the mission.");
    if(confirm) {
    document.getElementById("flightStatus").innerHTML = "Mission aborted.";
    document.getElementById("shuttleBackground").style.background="green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
    }
});
});