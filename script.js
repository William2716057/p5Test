
let prevX = 0;
let prevY = 0;
function setup() {
    createCanvas(800, 600);
    background(0);
}

function draw() {
    if (mouseIsPressed) {
        stroke(255, 50);
        strokeWeight(20);
        line(prevX, prevY, mouseX, mouseY);
        prevX = mouseX;
        prevY = mouseY;
    }
}

function mousePressed() {
    prevX = mouseX;
    prevY = mouseY;
}