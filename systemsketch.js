
let cell = 30
let circle = ['○', '●']
let triangle = ['△', '▽']
let shapes = circle.concat(triangle)
let light, dark

async function setup() {
  createCanvas(600, 600)
  light = color('#0cdc9e')   // make the colors once, not every frame
  dark = color('#e392ae')
}

function draw() {
  background('#1A1A1A')
 

  let scaleValue = map(mouseX, 0, width, 0.03, 0.3, true)
  let cols = width / cell
  let rows = height / cell

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // which shape? move one shape along on every row, so the pattern runs diagonally
      let shapeRandom = shapes[(i + j) % shapes.length]

      let n = noise(i * scaleValue, j * scaleValue, frameCount * 0.01)
      let amt = map(n, 0.3, 0.7, 0, 1, true)

      push()
      translate(i * cell + cell / 2, j * cell + cell / 2)
      scale(amt)      // ...then scale() shrinks it: 0.07 = tiny, 1 = full size
      fill(lerpColor(dark, light, amt))
      text(shapeRandom, 0, 0)
      pop()
    }
  }
}