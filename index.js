// accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// timezone
const timeDiv = document.getElementById("timezone");
function setTime() {
    timeDiv.innerHTML = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: 'numeric', minute:'2-digit' });
}
setInterval(function() {
    setTime();
}, 1000);