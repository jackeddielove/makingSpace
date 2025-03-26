//mouse coordinates are (0,0) at top left, (width, height) at bottom right;
//world coordinates are (0,0) in the center, (8, 4.5) at top right, etc. (when unit is defined as width/16 and aspect ratio is 16:9)
//screen coordinates are mouse coordinates with (0,0) translated to center of window
function mouseToWorld(x, y) {
  return [x / unit - 8, -y / unit + 4.5]
}

function worldToScreen(x, y) {
  return [x * unit, -y * unit]
}

function vecSum(a, b) {
  c = createVector(
    p5.Vector.add(a, b).x,
    p5.Vector.add(a, b).y,
    p5.Vector.add(a, b).z
  )
  return c
}

//adding, comparing, drawing vertices and edges
function arrSum(a, b) {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2], a[3] + b[3]]
}

function arrComp(a, b) {
  score = 0
  for (n = 0; n < a.length; n++) {
    if (a[n] != b[n]) {
      score++
    }
  }
  if (score == 1) {
    return true
  } else {
    return false
  }
}

function edge(a, b) {
  line(a[0], a[1], a[2], b[0], b[1], b[2])
}

//cmyk to rgb
function cmykToRgb(c, m, y, k) {
  return [
    255 * (1 - c) * (1 - k),
    255 * (1 - m) * (1 - k),
    255 * (1 - y) * (1 - k),
  ]
}

//rgb to cmyk
function rgbToCmyk(r, g, b) {
  k = 1 - max(r, g, b)
  return [
    1 - r / (255 * (1 - k)),
    1 - g / (255 * (1 - k)),
    1 - b / (255 * (1 - k)),
    k,
  ]
}

//convert slider location (-7 to -4) with color value (0 to 1), and vice versa
function sliderToCmyk(x) {
  return round((x + 7) / 3, 3)
}

function cmykToSlider(x) {
  return x * 3 - 7
}

//return the y-coordinate for the line ax+by+c=0 on slide 1 given an x-coordinate
function f(x) {
  return (-coefficients[0] * x + coefficients[2]) / coefficients[1]
}
