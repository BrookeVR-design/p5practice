let myData;

async function setup() {
  createCanvas(1000, 400);
  myData = await loadJSON('data.json');
  console.log(myData);
}

function draw() {
  if (!myData) return;

  background(220);
  noStroke();

  for (let i = 0; i < myData.length; i++) {
    let meal = myData[i];
    let x = (i + 1) * 100;
    let y = height / 2;

    if (!meal.meal_type) {
      continue;
    }

    drawMealType(meal.meal_type, x, y);

    if (meal.preparation === 'cooked') {
      fill('#807DFF');
      circle(x, y, 30);
    } else if (meal.preparation === "didn't cook") {
      fill('#F08DDC');
      rect(x - 15, y - 15, 30, 30);
    } else if (meal.preparation === 'leftovers') {
      fill('#FFA16E');
      arc(x, y, 30, 30, 0, PI);
    } else if (meal.preparation === 'dining hall') {
      fill('#E8CF58');
      rect(x - 15, y - 15, 30, 30);
    } else if (meal.preparation === 'snack') {
      fill('#C4FFB3');
      triangle(x - 15, y - 15, x + 15, y - 15, x, y + 15);
    }

    if (meal.drink) {
      stroke(0);
      strokeWeight(2);
      line(x, y + 20, x, y + 55);
      drawDrink(meal.drink, x, y + 60);
    }
  }
}

function drawMealType(type, x, y) {
  const counts = {
    breakfast: 3,
    lunch: 4,
    dinner: 6,
    dessert: 7
  };

  const count = counts[type] || 3;
  const radius = 35;
  const w = 10;
  const h = 28;

  push();
  translate(x, y);
  stroke(0);
  strokeWeight(1);
  noFill();

  for (let i = 0; i < count; i++) {
    push();
    rotate((TWO_PI / count) * i + frameCount * 0.02);
    translate(0, -radius);
    rectMode(CENTER);
    rect(0, 0, w, h);
    pop();
  }

  pop();
}

function drawDrink(drink, x, y) {
  if (!drink) return;

  push();
  translate(x, y);
  stroke(0);
  strokeWeight(2);

  if (drink === 'water') {
    fill(255);
    circle(0, 0, 20);
  } else if (drink === 'diet coke') {
    fill(255);
    square(0, 0, 20);
  } else if (drink === 'chai latte') {
    fill(255);
    triangle(0, 0, 20, 20, 20, 0);
  }

  pop();
}

