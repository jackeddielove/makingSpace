class Slide5 {
  constructor() {
    this.bullets_3d = [false, false, false]
  }

  handleMouseClicked() {
    //turns bullet points on
    for (let i = 0; i < 3; i++) {
      if (dist(0.5 * unit, (2.2 + 2 * i) * unit, mouseX, mouseY) < unit / 4) {
        this.bullets_3d[i] = !this.bullets_3d[i]
      }
    }
  }
  show() {
    //table borders
    stroke("white")
    strokeWeight(0.02 * unit)
    line(-width / 2, -3.1 * unit, width / 2, -3.1 * unit)
    line(0, -height / 2, 0, height / 2)

    //headers
    textSize(unit)
    textAlign(LEFT)
    stroke("white")
    text("3D Space", -6.5 * unit, -3.5 * unit)
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

    if (this.bullets_3d[0] === true) {
      circle(-width / 2 + 0.5 * unit, -2.3 * unit, 0.25 * unit)
      text(
        "a triple of numbers (x, y, z)",
        4 * unit,
        -1.15 * unit,
        6 * unit,
        2 * unit
      )
    }

    //row 2
    text("plane", -4 * unit, 0.8 * unit, 6 * unit, 2 * unit)
    if (this.bullets_3d[1] === true) {
      circle(-width / 2 + 0.5 * unit, -0.3 * unit, 0.25 * unit)

      text(
        "triples (x, y, z) that fit a linear condition                      ax + by + cz = d",
        4 * unit,
        0.4 * unit,
        6 * unit,
        2 * unit
      )
    }

    //row 3
    text("unit cube", -4 * unit, 2.8 * unit, 6 * unit, 2 * unit)
    if (this.bullets_3d[2] === true) {
      circle(-width / 2 + 0.5 * unit, 1.7 * unit, 0.25 * unit)

      text(
        "has vertices      (0, 0, 0)   (0, 0, 1)   (0, 1, 0)   (0, 1, 1)  (1, 0, 0)   (1, 0, 1)   (1, 1, 0)   (1, 1, 1)",
        2.9 * unit,
        2.8 * unit,
        3.75 * unit,
        2.5 * unit
      )
    }
  }
}
