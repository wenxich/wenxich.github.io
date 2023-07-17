// timezone
const timeDiv = document.getElementById("timezone");
let myTime;
function setTime() {
    myTime = new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York", hour: 'numeric', minute:'2-digit' });
    timeDiv.innerHTML = "(it's currently "+myTime+" for me)";
}
setInterval(function() {
    setTime();
}, 1000);

// filtering
filterSelection("all")
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("project-wrapper");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function w3RemoveClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

let btnContainer = document.getElementById("filters-wrapper"); // add active class to the current button
let btns = btnContainer.getElementsByClassName("filter");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// font change
let fontChanger;
let monospaceMode = true;
function changeFont() {
    monospaceMode = !monospaceMode;
    document.body.classList.toggle('sans-serif-font');
    fontChanger = document.getElementById("font-changer");
    if (monospaceMode) {
        fontChanger.innerHTML = "Switch to sans-serif mode."
    } else {
        fontChanger.innerHTML = "Switch back to monospace mode."
    }
}