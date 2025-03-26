class Slide4 {
  constructor() {
    //button states
    this.buttons = [0, 0, 0]
    //starting coordinates of point
    this.ptCoords = [3, 0, 0]
    //starting coefficients of plane
    this.plCoefficients = [1, 1, -1, 0]
  }

  handleMouseClicked() {
    for (let i = 0; i < 3; i++) {
      if (
        dist(
          -6 + 2 * i,
          3.75,
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1]
        ) < 0.5
      ) {
        this.buttons[i]++
      }
    }
  }

  handleMouseWheel() {
    //adjust point coordinates
    //adjust first coordinate
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -6.75 + 0.75 * 0,
        2.8
      ) < 0.25
    ) {
      if (event.delta > 0) {
        this.ptCoords[0]--
      }
      if (event.delta < 0) {
        this.ptCoords[0]++
      }
    }

    //adjust second coordinate
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -6.75 + 0.75 * 1,
        2.8
      ) < 0.25
    ) {
      if (event.delta > 0) {
        this.ptCoords[1]--
      }
      if (event.delta < 0) {
        this.ptCoords[1]++
      }
    }

    //adjust third coordinate
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -6.75 + 0.75 * 2,
        2.8
      ) < 0.25
    ) {
      if (event.delta > 0) {
        this.ptCoords[2]--
      }
      if (event.delta < 0) {
        this.ptCoords[2]++
      }
    }

    //adjust plane equation coefficients
    //adjust first coefficient
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -6 + (4 / 3) * 0,
        2.1
      ) < 0.25
    ) {
      if (event.delta > 0) {
        this.plCoefficients[0]--
      }
      if (event.delta < 0) {
        this.plCoefficients[0]++
      }
    }

    //adjust second coefficient
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -6 + (4 / 3) * 1,
        2.1
      ) < 0.25
    ) {
      if (event.delta > 0) {
        this.plCoefficients[1]--
      }
      if (event.delta < 0) {
        this.plCoefficients[1]++
      }
    }

    //adjust third coefficient
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -6 + (4 / 3) * 2,
        2.1
      ) < 0.25
    ) {
      if (event.delta > 0) {
        this.plCoefficients[2]--
      }
      if (event.delta < 0) {
        this.plCoefficients[2]++
      }
    }

    //adjust fourth coefficient
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -6 + (4 / 3) * 3,
        2.1
      ) < 0.25
    ) {
      if (event.delta > 0) {
        this.plCoefficients[3]--
      }
      if (event.delta < 0) {
        this.plCoefficients[3]++
      }
    }
  }

  show() {
    //buttons
    rectMode(CENTER)
    textAlign(CENTER)

    //point button (buttons[0])
    //button shape
    noFill()
    strokeWeight(unit / 50)
    stroke("white")
    rect(-6 * unit, -3.75 * unit, 1.5 * unit, 0.75 * unit, 0.25 * unit)

    //button label
    fill("white")
    textSize(unit / 3)
    text("point", -6 * unit, -3.65 * unit)

    //show point coordinates when button on
    if (this.buttons[0] % 2 == 1) {
      //point coordinates
      fill("white")
      textSize(unit / 2)
      text(
        "( " +
          round(this.ptCoords[0], 1) +
          " , " +
          round(this.ptCoords[1], 1) +
          " , " +
          round(this.ptCoords[2], 1) +
          " )",
        -6 * unit,
        -2.65 * unit
      )
    }

    //plane button (buttons[1])
    //button shape
    noFill()
    stroke("white")
    strokeWeight(unit / 50)
    rect(-4 * unit, -3.75 * unit, 1.5 * unit, 0.75 * unit, 0.25 * unit)

    //button label
    fill("white")
    textSize(unit / 3)
    text("plane", -4 * unit, -3.65 * unit)

    //show equation when button on
    if (this.buttons[1] % 2 == 1) {
      fill("white")
      textSize(unit / 2)
      text(
        this.plCoefficients[0] +
          " x + " +
          this.plCoefficients[1] +
          " y + " +
          this.plCoefficients[2] +
          " z = " +
          this.plCoefficients[3],
        -4 * unit,
        -2 * unit
      )
    }

    //cube button (buttons[2])
    //button shape
    noFill()
    stroke("white")
    strokeWeight(unit / 50)
    rect(-2 * unit, -3.75 * unit, 1.5 * unit, 0.75 * unit, 0.25 * unit)

    //button label
    fill("white")
    textSize(unit / 3)
    text("cube", -2 * unit, -3.65 * unit)

    //set the view of 3d space
    push()
    rotateX(PI / 3)
    rotateZ(PI / 6)
    scale(1.5, -1.5, 1.5)

    //draw the xyz-axes
    stroke("white")
    strokeWeight(unit / 50)
    line(-20 * unit, 0, 0, 20 * unit, 0, 0)
    line(0, -20 * unit, 0, 0, 20 * unit, 0)
    line(0, 0, -20 * unit, 0, 0, 20 * unit)

    //draw point
    if (this.buttons[0] % 2 == 1) {
      fill("dodgerblue")
      noStroke()
      push()
      translate(
        this.ptCoords[0] * unit,
        this.ptCoords[1] * unit,
        this.ptCoords[2] * unit
      )
      sphere(0.1 * unit)
      pop()
    }

    //draw plane
    {
      if (this.buttons[1] % 2 == 1) {
        const A = this.plCoefficients[0]
        const B = this.plCoefficients[1]
        const C = this.plCoefficients[2]
        const D = this.plCoefficients[3]
        const r = sqrt(A ** 2 + B ** 2)
        const s = sqrt(A ** 2 + B ** 2 + C ** 2)

        const l = 4 * unit

        let planeColor = color("lime")
        stroke("lime")
        planeColor.setAlpha(128)
        fill(planeColor)

        if ([A, B, C] != [0, 0, 0]) {
          push()
          if (D == 0) {
            if (A >= 0) {
              rotateZ(asin(B / r))
            }
            if (A < 0) {
              rotateZ(PI - asin(B / r))
            }
            rotateY(acos(C / s))
          }
          if (D != 0) {
            if (C != 0) {
              translate(0, 0, (unit * D) / C)
              if (A >= 0) {
                rotateZ(asin(B / r))
              }
              if (A < 0) {
                rotateZ(PI - asin(B / r))
              }
              rotateY(acos(C / s))
            }
            if (C == 0) {
              if (A >= 0) {
                rotateZ(asin(B / r))
              }
              if (A < 0) {
                rotateZ(PI - asin(B / r))
              }
              rotateY(acos(C / s))
              translate(0, 0, (unit * D) / r)
            }
          }
          beginShape()
          vertex(-l, -l, 0)
          vertex(-l, l, 0)
          vertex(l, l, 0)
          vertex(l, -l, 0)
          endShape(CLOSE)
          pop()
        }
      }
    }

    //draw cube
    if (this.buttons[2] % 3 != 0) {
      let cubeColor = color("fuchsia")
      noStroke()
      cubeColor.setAlpha(128)
      fill(cubeColor)
      push()
      translate(unit / 2, unit / 2, unit / 2)
      box(unit)
      noFill()
      stroke("fuchsia")
      strokeWeight(unit / 20)
      box(unit)
      pop()
    }

    //vertices
    if (this.buttons[2] % 3 == 2) {
      fill("fuchsia")
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
          for (let k = 0; k < 2; k++) {
            push()
            translate(i * unit, j * unit, k * unit)
            sphere(0.1 * unit)
            pop()

            textSize(0.2 * unit)
            textAlign(CENTER)
            push()
            rotateX(-PI / 2)
            translate(-0.5 * unit + i * 2 * unit, -j * unit, k * unit)
            fill("white")
            text("(" + i + "," + j + "," + k + ")", 0, 0)
            pop()
          }
        }
      }
    }
    pop()
  }
}
