class Slide6 {
  constructor() {
    //horizontal scroll
    this.h = 0
    this.hSpeed = 20
  }

  handleMouseWheel(event) {
    if (event.delta > 0) {
      this.h -= this.hSpeed
    }
    if (event.delta < 0) {
      this.h += this.hSpeed
    }
  }
  show() {
    background("black")
    //fixed part of table
    //black background
    push()
    translate(0, 0, -0.1)
    fill("black")
    noStroke()
    rectMode(CORNERS)
    rect(-width / 2, -height / 2, -4 * unit, height / 2)
    pop()

    //borders
    stroke("white")
    strokeWeight(0.08 * unit)
    line(-width / 2, -3.1 * unit, width / 2, -3.1 * unit)
    line(-4 * unit, -height / 2, -4 * unit, height / 2)
    strokeWeight(0.04 * unit)
    line(-4 * unit, -2.5 * unit, width / 2, -2.5 * unit)

    //headers
    textAlign(CENTER)

    //columns
    textSize(unit)
    text("Space", -6 * unit, -3.5 * unit)
    text("Numbers", 2 * unit, -3.5 * unit)

    //rows
    textSize(0.4 * unit)
    text("point", -6 * unit, -1.5 * unit)
    text("plane", -6 * unit, 0.75 * unit)
    text("cube", -6 * unit, 3 * unit)

    //scrolling part of table
    push()
    translate(this.h, 0, -0.15)
    for (let i = 0; i < 5; i++) {
      line(
        -4 * unit + i * 6 * unit,
        -3.1 * unit,
        -4 * unit + i * 6 * unit,
        5 * unit
      )
      let dim = i + 2
      text(dim + "D", -unit + i * 6 * unit, -2.65 * unit)
    }
    //2D column
    text("(x, y)", -unit, -1.5 * unit)
    text("ax + by = c", -unit, 0.75 * unit)
    text(
      "(0, 0)    (0, 1)    (1, 0)    (1, 1)",
      -unit,
      5 * unit,
      3 * unit,
      4 * unit
    )

    //3D column
    text("(x, y, z)", 5 * unit, -1.5 * unit)
    text("ax + by + cz = d", 5 * unit, 0.75 * unit)
    text(
      "(0, 0, 0)    (0, 0, 1)    (0, 1, 0)    (0, 1, 1)    (1, 0, 0)    (1, 0, 1)    (1, 1, 0)    (1, 1, 1)",
      5 * unit,
      4.5 * unit,
      4 * unit,
      4 * unit
    )

    //4D column
    text("(x, y, z, w)", 11 * unit, -1.5 * unit)
    text("ax + by + cz + dw = e", 11 * unit, 0.75 * unit)
    textSize(0.3 * unit)
    text(
      "(0, 0, 0, 0)    (0, 0, 0, 1)    (0, 0, 1, 0)    (0, 0, 1, 1)    (0, 1, 0, 0)    (0, 1, 0, 1)    (0, 1, 1, 0)    (0, 1, 1, 1)    (1, 0, 0, 0)    (1, 0, 0, 1)    (1, 0, 1, 0)    (1, 0, 1, 1)    (1, 1, 0, 0)    (1, 1, 0, 1)    (1, 1, 1, 0)    (1, 1, 1, 1)",
      11 * unit,
      3.7 * unit,
      3.8 * unit,
      4 * unit
    )

    //5D column
    //point
    textSize(0.4 * unit)
    text("(", 15.2 * unit, -1.5 * unit)
    text(")", 18.7 * unit, -1.5 * unit)

    for (let i = 0; i < 5; i++) {
      textSize(0.4 * unit)
      text("x", 15.5 * unit + i * 0.7 * unit, -1.5 * unit)
      if (i < 4) {
        text(",", 15.9 * unit + i * 0.7 * unit, -1.5 * unit)
      }
      textSize(0.25 * unit)
      text(i + 1, 15.7 * unit + i * 0.7 * unit, -1.4 * unit)
    }

    //plane
    for (let i = 0; i < 5; i++) {
      textSize(0.35 * unit)
      text("x", 14.6 * unit + i * 1.1 * unit, 0.75 * unit)
      text("a", 14.2 * unit + i * 1.1 * unit, 0.75 * unit)

      if (i < 4) {
        text("+", 15.0 * unit + i * 1.1 * unit, 0.75 * unit)
      }

      textSize(0.2 * unit)
      text(i + 1, 14.8 * unit + i * 1.1 * unit, 0.85 * unit)
      text(i + 1, 14.4 * unit + i * 1.1 * unit, 0.85 * unit)
    }

    textSize(0.35 * unit)
    text("= a", 19.5 * unit, 0.75 * unit)
    textSize(0.2 * unit)
    text(6, 19.8 * unit, 0.85 * unit)

    text(
      "(0, 0, 0, 0, 0)    (0, 0, 0, 0, 1)    (0, 0, 0, 1, 0)    (0, 0, 0, 1, 1)    (0, 0, 1, 0, 0)    (0, 0, 1, 0, 1)    (0, 0, 1, 1, 0)    (0, 0, 1, 1, 1)    (0, 1, 0, 0, 0)    (0, 1, 0, 0, 1)    (0, 1, 0, 1, 0)    (0, 1, 0, 1, 1)    (0, 1, 1, 0, 0)    (0, 1, 1, 0, 1)    (0, 1, 1, 1, 0)    (0, 1, 1, 1, 1)    (1, 0, 0, 0, 0)    (1, 0, 0, 0, 1)    (1, 0, 0, 1, 0)    (1, 0, 0, 1, 1)    (1, 0, 1, 0, 0)    (1, 0, 1, 0, 1)    (1, 0, 1, 1, 0)    (1, 0, 1, 1, 1)    (1, 1, 0, 0, 0)    (1, 1, 0, 0, 1)    (1, 1, 0, 1, 0)    (1, 1, 0, 1, 1)    (1, 1, 1, 0, 0)    (1, 1, 1, 0, 1)    (1, 1, 1, 1, 0)    (1, 1, 1, 1, 1)",
      17 * unit,
      3.7 * unit,
      4.7 * unit,
      4 * unit
    )

    pop()
  }
}
