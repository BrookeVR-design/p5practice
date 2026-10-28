let gridSize = 50;
let cols, rows;


function star(x, y, radius1, radius2, points) {
  const angle = TWO_PI / points;
  const halfAngle = angle / 2;

  beginShape();
  for (let a = -PI / 2; a < TWO_PI - PI / 2; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);

    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function setup() {
  createCanvas(800, 800);
  cols = floor(width / gridSize);
  rows = floor(height / gridSize);

}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);
  noFill();
  fill('pink');

  let offsetX = mouseX * 0.08;
  let offsetY = mouseY * 0.08;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * gridSize + gridSize / 2 + offsetX;
      let y = j * gridSize + gridSize / 2 + offsetY;

      if (random() < 0.5) {
        arc(x - gridSize / 2, y - gridSize / 2, gridSize, gridSize, 0, HALF_PI);
        arc(x + gridSize / 2, y + gridSize / 2, gridSize, gridSize, PI, PI + HALF_PI);
      } else {
        arc(x - gridSize / 2, y + gridSize / 2, gridSize, gridSize, -HALF_PI, 0);
        arc(x + gridSize / 2, y - gridSize / 2, gridSize, gridSize, HALF_PI, PI);
      }
    }
  }

  push();
  translate(mouseX, mouseY);
  rotate(frameCount * 0.05);
  noStroke();
  fill('#F3DFA2');
  star(0, 0, gridSize * 0.5, gridSize * 0.3, 10);
  pop();
}
