let canvasSize = 400;

function setup() {
    createCanvas(canvasSize, canvasSize);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);

    let hr = hour() % 12;
    let min = minute();
    let sec = second();

    let hrAngle = map(hr, 0, 12, 0, 360);
    let minAngle = map(min, 0, 60, 0, 360);
    let secAngle = map(sec, 0, 60, 0, 360);

    drawClockNumbers(150, hr);
    drawShape(120, hrAngle, 6, color(255, 0, 0, 150));
    drawShape(150, minAngle, 4, color(0, 255, 0, 150));
    drawShape(140, secAngle, 3, color(0, 0, 255, 150));
}

function drawClockNumbers(radius, currentHour) {
    noStroke();
    textSize(16);
    textAlign(CENTER, CENTER);

    for (let i = 1; i <= 12; i++) {
        let angle = map(i, 1, 13, 0, 360);
        let x = cos(angle) * radius;
        let y = sin(angle) * radius;

        if (i === currentHour) {
            fill(255, 0, 0);
        } else {
            fill(255);
        }

        text(i, x, y);
    }
}

function drawShape(size, angle, sides, col) {
    push();
    rotate(angle);
    fill(col);
    noStroke();

    beginShape();
    for (let i = 0; i < sides; i++) {
        let x = cos(360 / sides * i) * size;
        let y = sin(360 / sides * i) * size;
        vertex(x, y);
    }
    endShape(CLOSE);

    pop();
}