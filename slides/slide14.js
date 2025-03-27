class Slide14 {
  constructor() {
    this.cy = 1
    this.mg = 1
    this.yw = 1
    this.bk = 1

    this.cmykTimer = 0
    this.cmykSpeed = 0.05

    this.cmyk = false
    this.cmykCurve1 = false

    //set edgelength
    this.edgeLength = 2.5 * unit

    this.n = 20

    this.cubeVerts = [
      [0, 0, 0],
      [0, 0, 1],
      [0, 1, 0],
      [0, 1, 1],
      [1, 0, 0],
      [1, 0, 1],
      [1, 1, 0],
      [1, 1, 1],
    ]
  }

  //convert slider location (-7 to -4) with color value (0 to 1), and vice versa
  slideToCmyk(x) {
    return round((x + 7) / 3, 3)
  }

  cmykToSlider(x) {
    return x * 3 - 7
  }

  //cmyk to rgb
  cmykToRgb(c, m, y, k) {
    return [
      255 * (1 - c) * (1 - k),
      255 * (1 - m) * (1 - k),
      255 * (1 - y) * (1 - k),
    ]
  }

  show() {
    {
      // //buttons
      // {
      //   rectMode(CENTER);
      //   textAlign(CENTER);
      //   textSize(unit / 3);
      //   //cmyk space button
      //   {
      //     //button shape
      //     noFill();
      //     if ((this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[0] + this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[1] + this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[2]) / 3 < 128) {
      //       stroke("white");
      //     }
      //     if ((this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[0] + this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[1] + this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[2]) / 3 >= 128) {
      //       stroke("black");
      //     }
      //     strokeWeight(unit / 50);
      //     rect(-4.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit);
      //     //button label
      //     if ((this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[0] + this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[1] + this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[2]) / 3 < 128) {
      //       fill("white");
      //     }
      //     if ((this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[0] + this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[1] + this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[2]) / 3 >= 128) {
      //       fill("black");
      //     }
      //   } text("CMYK space", -4.5 * unit, 3.1 * unit);
      //   //   //curve 1 button
      //   //   {
      //   //   //button shape
      //   //   noFill();
      //   //   if ((rd + gr + bl) / 3 < 128) {
      //   //       stroke("white");
      //   //   }
      //   //   if ((rd + gr + bl) / 3 >= 128) {
      //   //       stroke("black");
      //   //   } strokeWeight(unit / 50);
      //   //   rect(-1.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit);
      //   //   //button label
      //   //   if ((rd + gr + bl) / 3 < 128) {
      //   //       fill("white");
      //   //   }
      //   //   if ((rd + gr + bl) / 3 >= 128) {
      //   //       fill("black");
      //   //   } text("curve 1", -1.5 * unit, 3.1 * unit);
      //   // }
      //   //   //curve 2 button
      //   //   {
      //   //   //button shape
      //   //   noFill();
      //   //   if ((rd + gr + bl) / 3 < 128) {
      //   //       stroke("white");
      //   //   }
      //   //   if ((rd + gr + bl) / 3 >= 128) {
      //   //       stroke("black");
      //   //   } strokeWeight(unit / 50);
      //   //   rect(1.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit);
      //   //   //button label
      //   //   if ((rd + gr + bl) / 3 < 128) {
      //   //       fill("white");
      //   //   }
      //   //   if ((rd + gr + bl) / 3 >= 128) {
      //   //       fill("black");
      //   //   } text("curve 2", 1.5 * unit, 3.1 * unit);
      //   // }
      //   //   //curve 3 button
      //   //   {
      //   //   //button shape
      //   //   noFill();
      //   //   if ((rd + gr + bl) / 3 < 128) {
      //   //       stroke("white");
      //   //   }
      //   //   if ((rd + gr + bl) / 3 >= 128) {
      //   //       stroke("black");
      //   //   } strokeWeight(unit / 50);
      //   //   rect(4.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit);
      //   //   //button label
      //   //   if ((rd + gr + bl) / 3 < 128) {
      //   //       fill("white");
      //   //   }
      //   //   if ((rd + gr + bl) / 3 >= 128) {
      //   //       fill("black");
      //   //   } text("curve 3", 4.5 * unit, 3.1 * unit);
      //   // }
      // }
    }

    background(
      this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[0],
      this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[1],
      this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[2]
    )

    //sliders
    {
      rectMode(CENTER)
      stroke(255)
      strokeWeight(0.05 * unit)

      //bars
      fill(0, 255, 255)
      rect(-5.5 * unit, -1.5 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      fill(255, 0, 255)
      rect(-5.5 * unit, -0.5 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      fill(255, 255, 0)
      rect(-5.5 * unit, 0.5 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      fill(0, 0, 0)
      rect(-5.5 * unit, 1.5 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      //handles
      push()
      translate(0, 0, 1)
      strokeWeight(0.025 * unit)
      fill(128)
      rect(
        this.cmykToSlider(this.cy) * unit,
        -1.5 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      rect(
        this.cmykToSlider(this.mg) * unit,
        -0.5 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      rect(
        this.cmykToSlider(this.yw) * unit,
        0.5 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      rect(
        this.cmykToSlider(this.bk) * unit,
        1.5 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      pop()

      //text
      textSize(0.5 * unit)
      if (
        (this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[0] +
          this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[1] +
          this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[2]) /
          3 <
        128
      ) {
        fill("white")
      }
      if (
        (this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[0] +
          this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[1] +
          this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[2]) /
          3 >=
        128
      ) {
        fill("black")
      }
      textAlign(LEFT)
      text(round(this.cy, 3), -3.5 * unit, -1.3 * unit)
      text(round(this.mg, 3), -3.5 * unit, -0.3 * unit)
      text(round(this.yw, 3), -3.5 * unit, 0.7 * unit)
      text(round(this.bk, 3), -3.5 * unit, 1.7 * unit)
    }

    //controls
    {
      //this.cyan
      {
        if (
          dist(
            this.cmykToSlider(this.cy),
            1.5,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.5 &&
          mouseIsPressed
        ) {
          if (mouseToWorld(mouseX, mouseY)[0] < -7) {
            this.cy = 0
          }
          if (mouseToWorld(mouseX, mouseY)[0] > -4) {
            this.cy = 1
          }
          if (
            mouseToWorld(mouseX, mouseY)[0] >= -7 &&
            mouseToWorld(mouseX, mouseY)[0] <= -4
          ) {
            this.cy = this.slideToCmyk(mouseToWorld(mouseX, mouseY)[0])
          }
        }
      }

      //magenta
      {
        if (
          dist(
            this.cmykToSlider(this.mg),
            0.5,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.5 &&
          mouseIsPressed
        ) {
          if (mouseToWorld(mouseX, mouseY)[0] < -7) {
            this.mg = 0
          }
          if (mouseToWorld(mouseX, mouseY)[0] > -4) {
            this.mg = 1
          }
          if (
            mouseToWorld(mouseX, mouseY)[0] >= -7 &&
            mouseToWorld(mouseX, mouseY)[0] <= -4
          ) {
            this.mg = this.slideToCmyk(mouseToWorld(mouseX, mouseY)[0])
          }
        }
      }

      //yellow
      {
        if (
          dist(
            this.cmykToSlider(this.yw),
            -0.5,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.5 &&
          mouseIsPressed
        ) {
          if (mouseToWorld(mouseX, mouseY)[0] < -7) {
            this.yw = 0
          }
          if (mouseToWorld(mouseX, mouseY)[0] > -4) {
            this.yw = 1
          }
          if (
            mouseToWorld(mouseX, mouseY)[0] >= -7 &&
            mouseToWorld(mouseX, mouseY)[0] <= -4
          ) {
            this.yw = this.slideToCmyk(mouseToWorld(mouseX, mouseY)[0])
          }
        }
      }

      //black
      {
        if (
          dist(
            this.cmykToSlider(this.bk),
            -1.5,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.5 &&
          mouseIsPressed
        ) {
          if (mouseToWorld(mouseX, mouseY)[0] < -7) {
            this.bk = 0
          }
          if (mouseToWorld(mouseX, mouseY)[0] > -4) {
            this.bk = 1
          }
          if (
            mouseToWorld(mouseX, mouseY)[0] >= -7 &&
            mouseToWorld(mouseX, mouseY)[0] <= -4
          ) {
            this.bk = this.slideToCmyk(mouseToWorld(mouseX, mouseY)[0])
          }
        }
      }
    }

    //graph
    {
      //cube
      {
        //stroke settings
        {
          if (
            (this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[0] +
              this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[1] +
              this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[2]) /
              3 <
            128
          ) {
            stroke("white")
          }
          if (
            (this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[0] +
              this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[1] +
              this.cmykToRgb(this.cy, this.mg, this.yw, this.bk)[2]) /
              3 >=
            128
          ) {
            stroke("black")
          }
          strokeWeight(0.04 * unit)
        }

        //black = 0 face and dotted connectors and (c,m,y,k) point
        {
          push()

          rotateX(PI / 3)
          rotateZ(PI / 6)
          scale(1, -1, 1)
          translate(0.5 * unit, -2.5 * unit, -0.5 * unit)

          //front
          line(0, 0, 0, 0, 0, this.edgeLength)
          line(0, 0, 0, this.edgeLength, 0, 0)
          line(this.edgeLength, 0, 0, this.edgeLength, 0, this.edgeLength)
          line(this.edgeLength, 0, this.edgeLength, 0, 0, this.edgeLength)

          //back
          line(0, this.edgeLength, 0, 0, this.edgeLength, this.edgeLength)
          line(0, this.edgeLength, 0, this.edgeLength, this.edgeLength, 0)
          line(
            this.edgeLength,
            this.edgeLength,
            0,
            this.edgeLength,
            this.edgeLength,
            this.edgeLength
          )
          line(
            this.edgeLength,
            this.edgeLength,
            this.edgeLength,
            0,
            this.edgeLength,
            this.edgeLength
          )

          //connectors
          line(this.edgeLength, 0, 0, this.edgeLength, this.edgeLength, 0)
          line(
            this.edgeLength,
            0,
            this.edgeLength,
            this.edgeLength,
            this.edgeLength,
            this.edgeLength
          )
          line(0, 0, this.edgeLength, 0, this.edgeLength, this.edgeLength)
          line(0, 0, 0, 0, this.edgeLength, 0)

          //dotted connectors
          strokeWeight(0.05 * unit)

          for (let j = 0; j < 8; j++) {
            for (let i = 1; i < this.n; i++) {
              point(
                this.cubeVerts[j][0] * this.edgeLength +
                  (i / this.n) * 1 * unit,
                this.cubeVerts[j][1] * this.edgeLength +
                  (i / this.n) * 1.5 * unit,
                this.cubeVerts[j][2] * this.edgeLength +
                  (i / this.n) * 1.25 * unit
              )
            }
          }

          //(c,m,y,k) point
          push()
          translate(
            this.cy * this.edgeLength + this.bk * 1 * unit,
            this.mg * this.edgeLength + this.bk * 1.5 * unit,
            this.yw * this.edgeLength + this.bk * 1.25 * unit
          )
          sphere(0.1 * unit)
          pop()
          pop()
        }

        //black = 1 face
        {
          strokeWeight(0.04 * unit)

          push()

          rotateX(PI / 3)
          rotateZ(PI / 6)
          scale(1, -1, 1)
          translate(1.5 * unit, -1.0 * unit, 0.75 * unit)

          //front
          line(0, 0, 0, 0, 0, this.edgeLength)
          line(0, 0, 0, this.edgeLength, 0, 0)
          line(this.edgeLength, 0, 0, this.edgeLength, 0, this.edgeLength)
          line(this.edgeLength, 0, this.edgeLength, 0, 0, this.edgeLength)

          //back
          line(0, this.edgeLength, 0, 0, this.edgeLength, this.edgeLength)
          line(0, this.edgeLength, 0, this.edgeLength, this.edgeLength, 0)
          line(
            this.edgeLength,
            this.edgeLength,
            0,
            this.edgeLength,
            this.edgeLength,
            this.edgeLength
          )
          line(
            this.edgeLength,
            this.edgeLength,
            this.edgeLength,
            0,
            this.edgeLength,
            this.edgeLength
          )

          //connectors
          line(this.edgeLength, 0, 0, this.edgeLength, this.edgeLength, 0)
          line(
            this.edgeLength,
            0,
            this.edgeLength,
            this.edgeLength,
            this.edgeLength,
            this.edgeLength
          )
          line(0, 0, this.edgeLength, 0, this.edgeLength, this.edgeLength)
          line(0, 0, 0, 0, this.edgeLength, 0)

          pop()
        }
      }
    }
  }
}
