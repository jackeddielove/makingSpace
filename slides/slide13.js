class Slide13 {
  constructor() {
    this.rd = 0
    this.gr = 0
    this.bl = 0
    this.rgbTimer = 0
    this.rgbSpeed = 0.05

    this.rgb = false
    this.curve1 = false
    this.curve2 = false
    this.curve3 = false
  }

  //conversions
  /////////////////////
  //convert slider location (-7 to -4) with color value (0 to 255), and vice versa
  sliderToRgb(x) {
    return round((x + 7) * (255 / 3), 0)
  }

  rgbToSlider(x) {
    return x * (3 / 255) - 7
  }

  handleMouseClicked() {
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -4.5,
        -3
      ) < 0.5
    ) {
      this.rgb = !this.rgb
    }

    if (this.rgb == true) {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -1.5,
          -3
        ) < 0.5
      ) {
        this.curve1 = !this.curve1
        this.rd = 0
        this.gr = 0
        this.bl = 0
      }

      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          1.5,
          -3
        ) < 0.5
      ) {
        this.curve2 = !this.curve2
        this.rd = 0
        this.gr = 0
        this.bl = 0
      }

      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          4.5,
          -3
        ) < 0.5
      ) {
        this.curve3 = !this.curve3
        this.rd = 0
        this.gr = 0
        this.bl = 0
      }
    }
  }
  handleMouseWheel(event) {
    if (this.curve1 == true || this.curve2 == true || this.curve3 == true) {
      if (event.delta > 0 && this.rgbTimer > 0) {
        this.rgbTimer -= this.rgbSpeed
      }
      if (event.delta < 0 && this.rgbTimer < 1) {
        this.rgbTimer += this.rgbSpeed
      }
    }
  }

  show() {
    background(this.rd, this.gr, this.bl)

    if (this.rgbTimer < 0) {
      this.rgbTimer = 0
    }

    //buttons
    {
      rectMode(CENTER)
      textAlign(CENTER)
      textSize(unit / 3)

      //rgb space button
      //button shape
      noFill()
      if ((this.rd + this.gr + this.bl) / 3 < 128) {
        stroke("white")
      }
      if ((this.rd + this.gr + this.bl) / 3 >= 128) {
        stroke("black")
      }
      strokeWeight(unit / 50)
      rect(-4.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit)

      //button label
      if ((this.rd + this.gr + this.bl) / 3 < 128) {
        fill("white")
      }
      if ((this.rd + this.gr + this.bl) / 3 >= 128) {
        fill("black")
      }
      text("RGB space", -4.5 * unit, 3.1 * unit)

      //curve 1 button
      //button shape
      noFill()
      if ((this.rd + this.gr + this.bl) / 3 < 128) {
        stroke("white")
      }
      if ((this.rd + this.gr + this.bl) / 3 >= 128) {
        stroke("black")
      }
      strokeWeight(unit / 50)
      rect(-1.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit)

      //button label
      if ((this.rd + this.gr + this.bl) / 3 < 128) {
        fill("white")
      }
      if ((this.rd + this.gr + this.bl) / 3 >= 128) {
        fill("black")
      }
      text("curve 1", -1.5 * unit, 3.1 * unit)

      //curve 2 button
      //button shape
      noFill()
      if ((this.rd + this.gr + this.bl) / 3 < 128) {
        stroke("white")
      }
      if ((this.rd + this.gr + this.bl) / 3 >= 128) {
        stroke("black")
      }
      strokeWeight(unit / 50)
      rect(1.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit)

      //button label
      if ((this.rd + this.gr + this.bl) / 3 < 128) {
        fill("white")
      }
      if ((this.rd + this.gr + this.bl) / 3 >= 128) {
        fill("black")
      }
      text("curve 2", 1.5 * unit, 3.1 * unit)

      //curve 3 button
      //button shape
      noFill()
      if ((this.rd + this.gr + this.bl) / 3 < 128) {
        stroke("white")
      }
      if ((this.rd + this.gr + this.bl) / 3 >= 128) {
        stroke("black")
      }
      strokeWeight(unit / 50)
      rect(4.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit)

      //button label
      if ((this.rd + this.gr + this.bl) / 3 < 128) {
        fill("white")
      }
      if ((this.rd + this.gr + this.bl) / 3 >= 128) {
        fill("black")
      }
      text("curve 3", 4.5 * unit, 3.1 * unit)
    }

    //sliders
    {
      rectMode(CENTER)
      stroke(255)
      strokeWeight(0.05 * unit)

      //bars
      fill(255, 0, 0)
      rect(-5.5 * unit, -1 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      fill(0, 255, 0)
      rect(-5.5 * unit, 0 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      fill(0, 0, 255)
      rect(-5.5 * unit, 1 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      //handles
      push()
      translate(0, 0, 1)
      strokeWeight(0.025 * unit)
      fill(128)
      rect(
        this.rgbToSlider(this.rd) * unit,
        -1 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      rect(
        this.rgbToSlider(this.gr) * unit,
        0 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      rect(
        this.rgbToSlider(this.bl) * unit,
        1 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      pop()

      //text
      textSize(0.5 * unit)
      if ((this.rd + this.gr + this.bl) / 3 < 128) {
        fill("white")
      }
      if ((this.rd + this.gr + this.bl) / 3 >= 128) {
        fill("black")
      }
      textAlign(LEFT)
      text(round(this.rd, 0), -3.5 * unit, -0.8 * unit)
      text(round(this.gr, 0), -3.5 * unit, 0.2 * unit)
      text(round(this.bl, 0), -3.5 * unit, 1.2 * unit)
    }

    //controls
    {
      if (
        this.curve1 == false &&
        this.curve2 == false &&
        this.curve3 == false
      ) {
        //red
        {
          if (
            dist(
              this.rgbToSlider(this.rd),
              1,
              mouseToWorld(mouseX, mouseY)[0],
              mouseToWorld(mouseX, mouseY)[1]
            ) < 0.5 &&
            mouseIsPressed
          ) {
            if (mouseToWorld(mouseX, mouseY)[0] < -7) {
              this.rd = 0
            }
            if (mouseToWorld(mouseX, mouseY)[0] > -4) {
              this.rd = 255
            }
            if (
              mouseToWorld(mouseX, mouseY)[0] >= -7 &&
              mouseToWorld(mouseX, mouseY)[0] <= -4
            ) {
              this.rd = this.sliderToRgb(mouseToWorld(mouseX, mouseY)[0])
            }
          }
        }

        //green
        {
          if (
            dist(
              this.rgbToSlider(this.gr),
              0,
              mouseToWorld(mouseX, mouseY)[0],
              mouseToWorld(mouseX, mouseY)[1]
            ) < 0.5 &&
            mouseIsPressed
          ) {
            if (mouseToWorld(mouseX, mouseY)[0] < -7) {
              this.gr = 0
            }
            if (mouseToWorld(mouseX, mouseY)[0] > -4) {
              this.gr = 255
            }
            if (
              mouseToWorld(mouseX, mouseY)[0] >= -7 &&
              mouseToWorld(mouseX, mouseY)[0] <= -4
            ) {
              this.gr = this.sliderToRgb(mouseToWorld(mouseX, mouseY)[0])
            }
          }
        }

        //blue
        {
          if (
            dist(
              this.rgbToSlider(this.bl),
              -1,
              mouseToWorld(mouseX, mouseY)[0],
              mouseToWorld(mouseX, mouseY)[1]
            ) < 0.5 &&
            mouseIsPressed
          ) {
            if (mouseToWorld(mouseX, mouseY)[0] < -7) {
              this.bl = 0
            }
            if (mouseToWorld(mouseX, mouseY)[0] > -4) {
              this.bl = 255
            }
            if (
              mouseToWorld(mouseX, mouseY)[0] >= -7 &&
              mouseToWorld(mouseX, mouseY)[0] <= -4
            ) {
              this.bl = this.sliderToRgb(mouseToWorld(mouseX, mouseY)[0])
            }
          }
        }
      }
    }

    //graph
    {
      push()
      rotateX(PI / 3)
      rotateZ(PI / 6)
      translate(1 * unit, 1 * unit, 0)
      scale(2.5, -2.5, 2.5)

      if (this.rgb == true) {
        //cube
        {
          if ((this.rd + this.gr + this.bl) / 3 < 128) {
            stroke("white")
          }
          if ((this.rd + this.gr + this.bl) / 3 >= 128) {
            stroke("black")
          }
          strokeWeight(0.04 * unit)
          //front
          line(0, 0, 0, 0, 0, unit)
          line(0, 0, 0, unit, 0, 0)
          line(unit, 0, 0, unit, 0, unit)
          line(unit, 0, unit, 0, 0, unit)

          //back
          line(0, unit, 0, 0, unit, unit)
          line(0, unit, 0, unit, unit, 0)
          line(unit, unit, 0, unit, unit, unit)
          line(unit, unit, unit, 0, unit, unit)

          //connectors
          line(unit, 0, 0, unit, unit, 0)
          line(unit, 0, unit, unit, unit, unit)
          line(0, 0, unit, 0, unit, unit)
          line(0, 0, 0, 0, unit, 0)

          if (
            this.curve1 == false &&
            this.curve2 == false &&
            this.curve3 == false
          ) {
            push()
            translate(
              (this.rd / 255) * unit,
              (this.gr / 255) * unit,
              (this.bl / 255) * unit
            )
            sphere(0.05 * unit)
            pop()
          }
        }
      }

      if (this.curve1 == true) {
        for (let p = 0; p < 1; p += 0.001) {
          point(p * unit, p * unit, p * unit)
        }
        push()
        translate(
          this.rgbTimer * unit,
          this.rgbTimer * unit,
          this.rgbTimer * unit
        )
        sphere(0.05 * unit)
        pop()
        this.rd = this.rgbTimer * 255
        this.gr = this.rgbTimer * 255
        this.bl = this.rgbTimer * 255
      }

      if (this.curve2 == true) {
        for (let p = 0; p < 1; p += 0.001) {
          point(p * unit, p ** 2 * unit, p ** 3 * unit)
        }
        push()
        translate(
          this.rgbTimer * unit,
          this.rgbTimer ** 2 * unit,
          this.rgbTimer ** 3 * unit
        )
        sphere(0.05 * unit)
        pop()

        this.rd = this.rgbTimer * 255
        this.gr = this.rgbTimer ** 2 * 255
        this.bl = this.rgbTimer ** 3 * 255
      }

      if (this.curve3 == true) {
        for (let p = 0; p < 1; p += 0.001) {
          point(
            p * unit,
            unit * ((sin(p * 2 * PI) + 1) / 2),
            unit * ((cos(p * 2 * PI) + 1) / 2)
          )
        }
        push()
        translate(
          this.rgbTimer * unit,
          unit * ((sin(this.rgbTimer * 2 * PI) + 1) / 2),
          unit * ((cos(this.rgbTimer * 2 * PI) + 1) / 2)
        )
        sphere(0.05 * unit)
        pop()

        this.gr = ((sin(this.rgbTimer * 2 * PI) + 1) / 2) * 255
        this.bl = ((cos(this.rgbTimer * 2 * PI) + 1) / 2) * 255
        this.rd = this.rgbTimer * 255
      }
      pop()
    }
  }
}
