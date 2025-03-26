let slide0,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13
let unit, size

{
  //edge poset
  p_0 = [0, 0, 0, 0]
  gr_0 = [p_0]
  p_1 = [0, 0, 0, 1]
  p_2 = [0, 0, 1, 0]
  p_3 = [0, 1, 0, 0]
  p_4 = [1, 0, 0, 0]
  gr_1 = [p_1, p_2, p_3, p_4]
  p_5 = [0, 0, 1, 1]
  p_6 = [0, 1, 0, 1]
  p_7 = [0, 1, 1, 0]
  p_8 = [1, 0, 0, 1]
  p_9 = [1, 0, 1, 0]
  p_10 = [1, 1, 0, 0]
  gr_2 = [p_5, p_6, p_7, p_8, p_9, p_10]
  p_11 = [0, 1, 1, 1]
  p_12 = [1, 0, 1, 1]
  p_13 = [1, 1, 0, 1]
  p_14 = [1, 1, 1, 0]
  gr_3 = [p_11, p_12, p_13, p_14]
  p_15 = [1, 1, 1, 1]
  gr_4 = [p_15]
  grs = [gr_0, gr_1, gr_2, gr_3, gr_4]

  //slide 10 -- projecting 4D to 3D
  {
    //this is used on title slide
    P = [
      p_0,
      p_1,
      p_2,
      p_3,
      p_4,
      p_5,
      p_6,
      p_7,
      p_8,
      p_9,
      p_10,
      p_11,
      p_12,
      p_13,
      p_14,
      p_15,
    ]
  }

  //slide 14 -- CMYK space
  {
    cy = 1
    mg = 1
    yw = 1
    bk = 1

    cmykTimer = 0
    cmykSpeed = 0.05

    cmyk = false
    cmykCurve1 = false
  }
}
//////////////////////////
//////////////////////////
//////////////////////////
//setup

function preload() {
  font = loadFont("font.otf")
}

function setup() {
  //set aspect ratio and screen width
  r = 9 / 16
  w = windowWidth
  createCanvas(w, r * w, WEBGL)
  unit = width / 16

  //set edge length of cubes for slicing/projecting
  size = 2.5 * unit

  // createCanvas(windowWidth, windowHeight, WEBGL);
  slide0 = new Slide0()
  slide1 = new Slide1()
  slide2 = new Slide2()
  slide3 = new Slide3()
  slide4 = new Slide4()
  slide5 = new Slide5()
  slide6 = new Slide6()
  slide7 = new Slide7()
  slide8 = new Slide8()
  slide9 = new Slide9()
  slide10 = new Slide10()
  slide11 = new Slide11()
  slide12 = new Slide12()
  slide13 = new Slide13()

  frameRate(100)
}

function draw() {
  //general
  {
    // if (keyIsPressed && keyCode === SHIFT) {
    //   orbitControl();
    // }

    if (counter == 14) {
      background(
        cmykToRgb(cy, mg, yw, bk)[0],
        cmykToRgb(cy, mg, yw, bk)[1],
        cmykToRgb(cy, mg, yw, bk)[2]
      )
    }
    if (counter != 13 && counter != 14) {
      background("black")
    }

    // textFont("Arial Black");
    textFont(font)
  }

  //title slide
  if (counter == 0) {
    slide0.show()
  }

  //part 1 title slide
  if (counter == 1) {
    slide1.show()
  }

  //2D
  if (counter == 2) {
    slide2.show()
  }

  //2D table
  if (counter == 3) {
    slide3.show()
  }

  //3D
  if (counter == 4) {
    slide4.show()
  }

  //3D table
  if (counter == 5) {
    slide5.show()
  }

  //general table
  if (counter == 6) {
    slide6.show()
  }

  //part 2 title slide
  if (counter == 7) {
    slide7.show()
  }

  //projecting 3D to 2D
  if (counter == 8) {
    slide8.show()
  }

  //projecting 4D to 3D
  if (counter == 9) {
    slide9.show()
  }

  //slicing 3D with 2D
  if (counter == 10) {
    slide10.show()
  }

  //slicing 4D with 3D
  if (counter == 11) {
    slide11.show()
  }

  //part 3 title slide
  if (counter == 12) {
    slide12.show()
  }

  //RGB space
  if (counter == 13) {
    slide13.show()
  }

  //CMYK space
  if (counter == 14) {
    // //buttons
    // {
    //   rectMode(CENTER);
    //   textAlign(CENTER);
    //   textSize(unit / 3);

    //   //cmyk space button
    //   {
    //     //button shape
    //     noFill();
    //     if ((cmykToRgb(cy, mg, yw, bk)[0] + cmykToRgb(cy, mg, yw, bk)[1] + cmykToRgb(cy, mg, yw, bk)[2]) / 3 < 128) {
    //       stroke("white");
    //     }
    //     if ((cmykToRgb(cy, mg, yw, bk)[0] + cmykToRgb(cy, mg, yw, bk)[1] + cmykToRgb(cy, mg, yw, bk)[2]) / 3 >= 128) {
    //       stroke("black");
    //     }
    //     strokeWeight(unit / 50);
    //     rect(-4.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit);

    //     //button label
    //     if ((cmykToRgb(cy, mg, yw, bk)[0] + cmykToRgb(cy, mg, yw, bk)[1] + cmykToRgb(cy, mg, yw, bk)[2]) / 3 < 128) {
    //       fill("white");
    //     }
    //     if ((cmykToRgb(cy, mg, yw, bk)[0] + cmykToRgb(cy, mg, yw, bk)[1] + cmykToRgb(cy, mg, yw, bk)[2]) / 3 >= 128) {
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
        cmykToSlider(cy) * unit,
        -1.5 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      rect(
        cmykToSlider(mg) * unit,
        -0.5 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      rect(
        cmykToSlider(yw) * unit,
        0.5 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      rect(
        cmykToSlider(bk) * unit,
        1.5 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      pop()

      //text
      textSize(0.5 * unit)
      if (
        (cmykToRgb(cy, mg, yw, bk)[0] +
          cmykToRgb(cy, mg, yw, bk)[1] +
          cmykToRgb(cy, mg, yw, bk)[2]) /
          3 <
        128
      ) {
        fill("white")
      }
      if (
        (cmykToRgb(cy, mg, yw, bk)[0] +
          cmykToRgb(cy, mg, yw, bk)[1] +
          cmykToRgb(cy, mg, yw, bk)[2]) /
          3 >=
        128
      ) {
        fill("black")
      }
      textAlign(LEFT)
      text(round(cy, 3), -3.5 * unit, -1.3 * unit)
      text(round(mg, 3), -3.5 * unit, -0.3 * unit)
      text(round(yw, 3), -3.5 * unit, 0.7 * unit)
      text(round(bk, 3), -3.5 * unit, 1.7 * unit)
    }

    //controls
    {
      //cyan
      {
        if (
          dist(
            cmykToSlider(cy),
            1.5,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.5 &&
          mouseIsPressed
        ) {
          if (mouseToWorld(mouseX, mouseY)[0] < -7) {
            cy = 0
          }
          if (mouseToWorld(mouseX, mouseY)[0] > -4) {
            cy = 1
          }
          if (
            mouseToWorld(mouseX, mouseY)[0] >= -7 &&
            mouseToWorld(mouseX, mouseY)[0] <= -4
          ) {
            cy = sliderToCmyk(mouseToWorld(mouseX, mouseY)[0])
          }
        }
      }

      //magenta
      {
        if (
          dist(
            cmykToSlider(mg),
            0.5,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.5 &&
          mouseIsPressed
        ) {
          if (mouseToWorld(mouseX, mouseY)[0] < -7) {
            mg = 0
          }
          if (mouseToWorld(mouseX, mouseY)[0] > -4) {
            mg = 1
          }
          if (
            mouseToWorld(mouseX, mouseY)[0] >= -7 &&
            mouseToWorld(mouseX, mouseY)[0] <= -4
          ) {
            mg = sliderToCmyk(mouseToWorld(mouseX, mouseY)[0])
          }
        }
      }

      //yellow
      {
        if (
          dist(
            cmykToSlider(yw),
            -0.5,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.5 &&
          mouseIsPressed
        ) {
          if (mouseToWorld(mouseX, mouseY)[0] < -7) {
            yw = 0
          }
          if (mouseToWorld(mouseX, mouseY)[0] > -4) {
            yw = 1
          }
          if (
            mouseToWorld(mouseX, mouseY)[0] >= -7 &&
            mouseToWorld(mouseX, mouseY)[0] <= -4
          ) {
            yw = sliderToCmyk(mouseToWorld(mouseX, mouseY)[0])
          }
        }
      }

      //black
      {
        if (
          dist(
            cmykToSlider(bk),
            -1.5,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.5 &&
          mouseIsPressed
        ) {
          if (mouseToWorld(mouseX, mouseY)[0] < -7) {
            bk = 0
          }
          if (mouseToWorld(mouseX, mouseY)[0] > -4) {
            bk = 1
          }
          if (
            mouseToWorld(mouseX, mouseY)[0] >= -7 &&
            mouseToWorld(mouseX, mouseY)[0] <= -4
          ) {
            bk = sliderToCmyk(mouseToWorld(mouseX, mouseY)[0])
          }
        }
      }
    }

    //graph
    {
      //cube
      {
        //set edgelength
        edgeLength = 2.5 * unit

        //stroke settings
        {
          if (
            (cmykToRgb(cy, mg, yw, bk)[0] +
              cmykToRgb(cy, mg, yw, bk)[1] +
              cmykToRgb(cy, mg, yw, bk)[2]) /
              3 <
            128
          ) {
            stroke("white")
          }
          if (
            (cmykToRgb(cy, mg, yw, bk)[0] +
              cmykToRgb(cy, mg, yw, bk)[1] +
              cmykToRgb(cy, mg, yw, bk)[2]) /
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
          line(0, 0, 0, 0, 0, edgeLength)
          line(0, 0, 0, edgeLength, 0, 0)
          line(edgeLength, 0, 0, edgeLength, 0, edgeLength)
          line(edgeLength, 0, edgeLength, 0, 0, edgeLength)

          //back
          line(0, edgeLength, 0, 0, edgeLength, edgeLength)
          line(0, edgeLength, 0, edgeLength, edgeLength, 0)
          line(edgeLength, edgeLength, 0, edgeLength, edgeLength, edgeLength)
          line(edgeLength, edgeLength, edgeLength, 0, edgeLength, edgeLength)

          //connectors
          line(edgeLength, 0, 0, edgeLength, edgeLength, 0)
          line(edgeLength, 0, edgeLength, edgeLength, edgeLength, edgeLength)
          line(0, 0, edgeLength, 0, edgeLength, edgeLength)
          line(0, 0, 0, 0, edgeLength, 0)

          //dotted connectors
          n = 20
          strokeWeight(0.05 * unit)
          cubeVerts = [
            [0, 0, 0],
            [0, 0, 1],
            [0, 1, 0],
            [0, 1, 1],
            [1, 0, 0],
            [1, 0, 1],
            [1, 1, 0],
            [1, 1, 1],
          ]
          for (let j = 0; j < 8; j++) {
            for (let i = 1; i < n; i++) {
              point(
                cubeVerts[j][0] * edgeLength + (i / n) * 1 * unit,
                cubeVerts[j][1] * edgeLength + (i / n) * 1.5 * unit,
                cubeVerts[j][2] * edgeLength + (i / n) * 1.25 * unit
              )
            }
          }

          //(c,m,y,k) point
          push()
          translate(
            cy * edgeLength + bk * 1 * unit,
            mg * edgeLength + bk * 1.5 * unit,
            yw * edgeLength + bk * 1.25 * unit
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
          line(0, 0, 0, 0, 0, edgeLength)
          line(0, 0, 0, edgeLength, 0, 0)
          line(edgeLength, 0, 0, edgeLength, 0, edgeLength)
          line(edgeLength, 0, edgeLength, 0, 0, edgeLength)

          //back
          line(0, edgeLength, 0, 0, edgeLength, edgeLength)
          line(0, edgeLength, 0, edgeLength, edgeLength, 0)
          line(edgeLength, edgeLength, 0, edgeLength, edgeLength, edgeLength)
          line(edgeLength, edgeLength, edgeLength, 0, edgeLength, edgeLength)

          //connectors
          line(edgeLength, 0, 0, edgeLength, edgeLength, 0)
          line(edgeLength, 0, edgeLength, edgeLength, edgeLength, edgeLength)
          line(0, 0, edgeLength, 0, edgeLength, edgeLength)
          line(0, 0, 0, 0, edgeLength, 0)

          pop()
        }

        //(c,m,y,k) point
      }
    }
  }
}
