let opacity = 255

// circles
let circleNumSlider
let circleGapSlider
let fromColorPicker
let toColorPicker
let triangleModeCheckbox

// lines 1
let lines1NumSlider
let lines1LenSlider
let lines1DistSlider
let lines1SpinSlider
let lines1ColorPicker
let lines1StrokeWeightSlider
let showLines1Checkbox

// lines 2
let lines2NumSlider
let lines2LenSlider
let lines2DistSlider
let lines2SpinSlider
let lines2ColorPicker
let lines2StrokeWeightSlider

function setup() {
  createCanvas(400, 400);
  strokeWeight(30)
  strokeCap(ROUND)

  // circles
  createP('Circles')
  triangleModeCheckbox = createCheckbox('Triangles', false)
  createElement('label', 'num')
  circleNumSlider = createSlider(1, 10, 1)
  createElement('label', 'gap')
  circleGapSlider = createSlider(50, 150, 10)
  fromColorPicker = createColorPicker("#00BA10")
  toColorPicker = createColorPicker("#9F50FF")

  // lines 1
  createP('Lines 1')
  createElement('label', 'num')
  lines1NumSlider = createSlider(1, 12, 5)
  createElement('label', 'len')
  lines1LenSlider = createSlider(30, 150, 60)
  createElement('label', 'dist')
  lines1DistSlider = createSlider(0, 150, 100)
  createElement('label', 'spin')
  lines1SpinSlider = createSlider(0, 360, 90, 5)
  lines1ColorPicker = createColorPicker("#FFFFFF")

  createElement('label', 'thickness')
  lines1StrokeWeightSlider = createSlider(10, 60, 30)
  showLines1Checkbox = createCheckbox('show', true);

  // lines 2
  createP('Lines 2')
  createElement('label', 'num')
  lines2NumSlider = createSlider(1, 12, 5)
  createElement('label', 'len')
  lines2LenSlider = createSlider(30, 150, 60)
  createElement('label', 'dist')
  lines2DistSlider = createSlider(0, 150, 100)
  createElement('label', 'spin')
  lines2SpinSlider = createSlider(0, 360, 0, 5)
  lines2ColorPicker = createColorPicker("#969696")
  createElement('label', 'thickness')
  lines2StrokeWeightSlider = createSlider(10, 60, 30)

  let jpgButton = createButton('Export JPG')
  jpgButton.mousePressed(function() {
    saveCanvas('myCanvas', 'jpg');
  })
}

function draw() {
  background('#41D7EA');

  push();
  noStroke();
  fill('#00B34A');
  rect(0, height - 60, width, 60);
  pop();

  translate(width / 2, height / 2)

  if (showLines1Checkbox.checked()) {
    drawLines()
  }

  drawLines2()
  drawCircles()
}

function drawCircles() {
  let num = circleNumSlider.value()
  let gap = circleGapSlider.value()
  let from = color(fromColorPicker.value())
  let to = color(toColorPicker.value())

  for (let i = 0; i < num; i++) {
    push()
    noFill()
    strokeWeight(10)
    stroke(lerpColor(from, to, i / num))

    if (triangleModeCheckbox.checked()) {
      let size = (i + 1) * gap
      triangle(
        0, -size / 2,
        -size / 2, size / 2,
        size / 2, size / 2
      )
    } else {
      circle(0, 0, (i + 1) * gap)
    }

    pop()
  }
}

function drawLines() {
  let num = lines1NumSlider.value()
  let len = lines1LenSlider.value()
  let c = color(lines1ColorPicker.value())
  c.setAlpha(opacity)

  for (let i = 0; i < num; i++) {
    push()
    strokeWeight(lines1StrokeWeightSlider.value())
    stroke(c)
    rotate(i / num * TWO_PI)
    translate(lines1DistSlider.value(), 2)
    rotate(radians(lines1SpinSlider.value()))
    line(-len / 2, 0, len / 2, 0)
    pop()
  }
}

function drawLines2() {
  let num = lines2NumSlider.value()
  let len = lines2LenSlider.value()
  let c = color(lines2ColorPicker.value())
  c.setAlpha(opacity)

  for (let i = 0; i < num; i++) {
    push()
    stroke(c)
    strokeWeight(lines2StrokeWeightSlider.value())
    rotate(i / num * TWO_PI)
    translate(lines2DistSlider.value(), 0)
    rotate(-radians(lines2SpinSlider.value()))
    line(-len / 2, 0, len / 2, 0)
    pop()
  }
}