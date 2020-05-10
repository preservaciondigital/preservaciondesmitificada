var timerFunction = null;

function startAnimation() {
    if(timerFunction == null) {
        timerFunction = setInterval(animation, 20);
    }
}

function stopAnimation() {
    if(timerFunction != null){
        clearInterval(timerFunction);
        timerFunction = null;
    }
}

function animation() {
    var f1 = document.getElementById("c20652");
    var f2 = document.getElementById("r14721");
    f1.style.display = none;
    f2.style.display = none;

    var rect = document.getElementById("r16363");
    var x1 = rect.getAttribute("x");
    var newX = 2 + parseInt(x1);
    if(newX > 500) {
        newX = 20;
    }
    rect.setAttribute("x", newX);



}
