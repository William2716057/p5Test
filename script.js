
let prevX = 0;
let prevY = 0;
function setup() {
    createCanvas(800, 600);
    background(0);
}

function draw() {
    //noStroke();
    //fill(255, 50);
    //circle(mouseX, mouseY, 10);
    noFill();
    stroke(255, 50);
    strokeWeight(2);
    line(prevX, prevY, mouseX, mouseY);
    prevX = mouseX;
    prevY = mouseY;
}

function mousePressed() {
    background(0);
}