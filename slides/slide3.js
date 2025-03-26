class Slide3 {
  constructor() {
    this.bullets = [false, false, false]
  }

  handleMouseClicked() {
    for (let i = 0; i < 3; i++) {
      if (dist(0.5 * unit, (2.2 + 2 * i) * unit, mouseX, mouseY) < unit / 4) {
        this.bullets[i] = !this.bullets[i]
      }
    }
  }

  show() {
    //table borders
    stroke("white")
    strokeWeight(unit / 50)
    line(-width / 2, -3.1 * unit, width / 2, -3.1 * unit)
    line(0, -height / 2, 0, height / 2)

    //headers
    textSize(unit)
    textAlign(LEFT)
    stroke("white")
    text("2D Space", -6.5 * unit, -3.5 * unit)
    text("Numbers", 1.5 * unit, -3.5 * unit)

    //bullets
    noFill()
    strokeWeight(unit / 50)
    stroke("white")

    circle(-width / 2 + 0.5 * unit, -2.3 * unit, 0.25 * unit)
    circle(-width / 2 + 0.5 * unit, -0.3 * unit, 0.25 * unit)
    circle(-width / 2 + 0.5 * unit, 1.7 * unit, 0.25 * unit)

    //rows
    textSize(unit / 2.5)
    noStroke()
    fill("white")

    //row 1
    text("point", -4 * unit, -1.15 * unit, 6 * unit, 2 * unit)
    if (this.bullets[0] === true) {
      circle(-width / 2 + 0.5 * unit, -2.3 * unit, 0.25 * unit)
      text(
        "a pair of numbers (x, y)",
        4 * unit,
        -1.15 * unit,
        6 * unit,
        2 * unit
      )
    }

    //row 2
    text("line", -4 * unit, 0.8 * unit, 6 * unit, 2 * unit)
    if (this.bullets[1] === true) {
      circle(-width / 2 + 0.5 * unit, -0.3 * unit, 0.25 * unit)

      text(
        "pairs (x, y) that fit a linear condition ax + by = c",
        4 * unit,
        0.8 * unit,
        6 * unit,
        2 * unit
      )
    }

    //row 3
    text("unit square", -4 * unit, 2.8 * unit, 6 * unit, 2 * unit)
    if (this.bullets[2] === true) {
      circle(-width / 2 + 0.5 * unit, 1.7 * unit, 0.25 * unit)

      text(
        "has vertices (0, 0)   (0, 1)   (1, 0)   (1, 1)",
        4 * unit,
        2.8 * unit,
        3 * unit,
        2 * unit
      )
    }
  }
}
