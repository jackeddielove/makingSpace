class Slide2 {
  constructor() {
    this.gridPts = new Array(187).fill(false)
    this.sqColor = color(255, 0, 255, 128) // fuchsia
  }

  show() {
    //buttons

    rectMode(CENTER)
    textAlign(CENTER)
    textSize(unit / 3)

    //point button (buttons_2d[0])
    //button shape
    noFill()
    stroke("white")
    strokeWeight(unit / 50)
    rect(-6 * unit, -3.75 * unit, 1.5 * unit, 0.75 * unit, 0.25 * unit)

    //button label
    fill("white")
    text("point", -6 * unit, -3.65 * unit)

    //line button (buttons_2d[1])
    //button shape
    noFill()
    stroke("white")
    strokeWeight(unit / 50)
    rect(-4 * unit, -3.75 * unit, 1.5 * unit, 0.75 * unit, 0.25 * unit)

    //button label
    fill("white")
    text("line", -4 * unit, -3.65 * unit)

    //square button (buttons_2d[2])
    //button shape
    noFill()
    stroke("white")
    strokeWeight(unit / 50)
    rect(-2 * unit, -3.75 * unit, 1.5 * unit, 0.75 * unit, 0.25 * unit)

    //button label
    fill("white")
    text("square", -2 * unit, -3.65 * unit)

    //x-y axes
    stroke("white")
    strokeWeight(unit / 50)
    line(-width / 2, 0, width / 2, 0)
    line(0, height / 2, 0, -height / 2)

    //x-axis tics
    for (let i = -8; i < 9; i++) {
      line(i * unit, unit / 4, i * unit, -unit / 4)
    }

    //y-axis tics
    for (let i = -5; i < 6; i++) {
      line(-unit / 4, i * unit, unit / 4, i * unit)
    }

    //dot grid
    for (let i = -8; i < 9; i++) {
      for (let j = -5; j < 6; j++) {
        let dotColor
        let dotSize
        if (this.gridPts[(i + 8) * 11 + (j + 5)] === true) {
          dotColor = "lime"
          dotSize = unit / 3
          textSize(unit / 2)
          fill("white")
          textAlign(CENTER)
          text(
            "(" + i + ", " + j + ")",
            worldToScreen(i, j)[0],
            worldToScreen(i, j)[1] - unit / 3
          )
        } else {
          dotColor = "white"
          dotSize = 0.05 * unit
        }
        fill(dotColor)
        noStroke()
        circle(worldToScreen(i, j)[0], worldToScreen(i, j)[1], dotSize)
      }
    }

    // draw and manipulate point
    if (buttons_2d[0] % 3 > 0) {
      if (
        dist(
          ptCoords_2d[0],
          ptCoords_2d[1],
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1]
        ) < 0.5 &&
        mouseIsPressed
      ) {
        ptCoords_2d[0] = mouseToWorld(mouseX, mouseY)[0]
        ptCoords_2d[1] = mouseToWorld(mouseX, mouseY)[1]
      }

      //labelled point
      fill("dodgerblue")
      noStroke()
      circle(
        worldToScreen(ptCoords_2d[0], ptCoords_2d[1])[0],
        worldToScreen(ptCoords_2d[0], ptCoords_2d[1])[1],
        unit / 3
      )

      if (buttons_2d[0] % 3 == 2) {
        textSize(unit / 2)
        fill("white")
        textAlign(CENTER)
        text(
          "(" +
            round(ptCoords_2d[0], 2) +
            ", " +
            round(ptCoords_2d[1], 2) +
            ")",
          worldToScreen(ptCoords_2d[0], ptCoords_2d[1])[0],
          worldToScreen(ptCoords_2d[0], ptCoords_2d[1])[1] - unit / 3
        )
      }
    }

    //line ax+by+c=0, drawn from (-10, y(-10)) to (10, y(10))

    if (buttons_2d[1] % 3 > 0) {
      strokeWeight(unit / 20)
      stroke("lime")

      if (coefficients[1] != 0) {
        line(
          worldToScreen(-10, f(-10))[0],
          worldToScreen(-10, f(-10))[1],
          worldToScreen(10, f(10))[0],
          worldToScreen(10, f(10))[1]
        )
      } else {
        if (coefficients[0] != 0) {
          line(
            worldToScreen(coefficients[2] / coefficients[0], -5)[0],
            worldToScreen(coefficients[2] / coefficients[0], -5)[1],
            worldToScreen(coefficients[2] / coefficients[0], 5)[0],
            worldToScreen(coefficients[2] / coefficients[0], 5)[1]
          )
        }
      }
    }

    //show line equation
    if (buttons_2d[1] % 3 == 2) {
      textSize(unit / 2)
      fill("white")
      noStroke()
      textAlign(CENTER)
      text(round(coefficients[0], 1), 2.5 * unit, -3.25 * unit)
      text("x", 3.25 * unit, -3.25 * unit)
      text("+", 4 * unit, -3.25 * unit)
      text(round(coefficients[1], 1), 4.75 * unit, -3.25 * unit)
      text("y", 5.5 * unit, -3.25 * unit)
      text("=", 6.25 * unit, -3.25 * unit)
      text(round(coefficients[2], 1), 7 * unit, -3.25 * unit)
    }

    //unit square

    if (buttons_2d[2] % 3 != 0) {
      noStroke()
      fill(this.sqColor)
      rectMode(CENTER)
      rect(0.5 * unit, -0.5 * unit, unit)

      noFill()
      stroke("fuchsia")
      strokeWeight(unit / 20)
      rect(0.5 * unit, -0.5 * unit, unit)
    }

    if (buttons_2d[2] % 3 == 2) {
      //vertices
      fill("fuchsia")
      circle(unit, -unit, unit / 4)
      circle(unit, 0, unit / 4)
      circle(0, -unit, unit / 4)
      circle(0, 0, unit / 4)

      //labels
      textSize(unit / 2)
      fill("white")
      noStroke()
      textAlign(CENTER)
      text("(0,0)", -0.5 * unit, 0.7 * unit)
      text("(1,0)", 1.5 * unit, 0.7 * unit)
      text("(1,1)", 1.5 * unit, -1.4 * unit)
      text("(0,1)", -0.5 * unit, -1.4 * unit)
    }
  }
}
