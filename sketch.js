let w;

function setup() {
  createCanvas(720, 400);
  w = min(width, height);
}

function draw() {
  background('pink');

  // White polka-dot background
  noStroke();
  fill('white');
  let offsetX = mouseX % 40;
  let offsetY = mouseY % 40;
  for (let x = -40 + offsetX; x < width + 40; x += 40) {
    for (let y = -40 + offsetY; y < height + 40; y += 40) {
      circle(x, y, 20); 
    }
  }

  // Hair
  fill('#9C552D');
  rect(width / 2 - w / 4, height / 2, width / 2 + w / 4, height / 2);
  rect(width / 2, height / 2 - w / 4, width / 2, height / 2 + w / 4);

  // Neck and shoulders
  noStroke();
  fill('#FFE1AB');
  rect(width / 2 - w / 8, height / 2 + w / 8, w / 4, w / 3);
  rect(width / 2 - w / 2, height / 2 + w / 3, w, w / 4);

  // Head
  noStroke();
  fill('#FFE1AB');
  ellipse(width / 2, height / 2, w / 2);

  // Eyes
  noStroke();
  fill('black');
  ellipse(width / 2 - w / 8, height / 2 - w / 16, w / 16);
  ellipse(width / 2 + w / 8, height / 2 - w / 16, w / 16);

  // Nose
  noFill();
  stroke('#9C552D');
  strokeWeight(3);
  arc(width / 2, height / 2, w / 12, w / 16, QUARTER_PI, HALF_PI + QUARTER_PI);

  // Mouth
  noFill();
  stroke('#9C552D');
  strokeWeight(3);
  arc(width / 2, height / 2 + w / 9, w / 10, w / 10, QUARTER_PI, HALF_PI + QUARTER_PI);
 // Cheeks
  noStroke();
  fill('#FFB6C1');
  ellipse(width / 2 - w / 6, height / 2 + w / 16, w / 13);
  ellipse(width / 2 + w / 6, height / 2 + w / 16, w / 13);
}
