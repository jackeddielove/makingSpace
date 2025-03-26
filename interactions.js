//advance slides
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    counter++
  }
  if (keyCode === LEFT_ARROW && counter > 0) {
    counter--
  }
  if (key === "f") {
    let fs = fullscreen()
    fullscreen(!fs)
  }
  return false
}

function mouseWheel(event) {
  if (counter == 2) {
    slide2.handleMouseWheel()
  }

  if (counter == 4) {
    slide4.handleMouseWheel()
  }

  if (counter == 6) {
    if (event.delta > 0) {
      h -= hSpeed
    }
    if (event.delta < 0) {
      h += hSpeed
    }
  }

  if (counter == 8) {
    if (Xbutton == true) {
      if (event.delta > 0) {
        xTheta--
        rotated_1 = true
      }
      if (event.delta < 0) {
        xTheta++
        rotated_1 = true
      }
      a1 = Rx(xTheta, u1)
      a2 = Rx(xTheta, u2)
      a3 = Rx(xTheta, u3)
    }

    if (Ybutton == true) {
      if (event.delta > 0) {
        yTheta--
        rotated_1 = true
      }
      if (event.delta < 0) {
        yTheta++
        rotated_1 = true
      }
      a1 = Ry(yTheta, u1)
      a2 = Ry(yTheta, u2)
      a3 = Ry(yTheta, u3)
    }

    if (Zbutton == true) {
      if (event.delta > 0) {
        zTheta--
        rotated_1 = true
      }
      if (event.delta < 0) {
        zTheta++
        rotated_1 = true
      }
      a1 = Rz(zTheta, u1)
      a2 = Rz(zTheta, u2)
      a3 = Rz(zTheta, u3)
    }
  }

  if (counter == 10) {
    if (event.delta > 0) {
      cubeSliceTimer += cubeSliceSpeed
    }
    if (event.delta < 0) {
      cubeSliceTimer -= cubeSliceSpeed
    }
  }

  if (counter == 9) {
    if (xyButton == true) {
      if (event.delta > 0) {
        xyTheta -= rotationSpeed
        rotated = true
      }
      if (event.delta < 0) {
        xyTheta += rotationSpeed
        rotated = true
      }
      a_1 = R_xy(xyTheta, e_1)
      a_2 = R_xy(xyTheta, e_2)
      a_3 = R_xy(xyTheta, e_3)
      a_4 = R_xy(xyTheta, e_4)
    }

    if (xzButton == true) {
      if (event.delta > 0) {
        xzTheta -= rotationSpeed
        rotated = true
      }
      if (event.delta < 0) {
        xzTheta += rotationSpeed
        rotated = true
      }
      a_1 = R_xz(xzTheta, e_1)
      a_2 = R_xz(xzTheta, e_2)
      a_3 = R_xz(xzTheta, e_3)
      a_4 = R_xz(xzTheta, e_4)
    }

    if (xwButton == true) {
      if (event.delta > 0) {
        xwTheta -= rotationSpeed
        rotated = true
      }
      if (event.delta < 0) {
        xwTheta += rotationSpeed
        rotated = true
      }
      a_1 = R_xw(xwTheta, e_1)
      a_2 = R_xw(xwTheta, e_2)
      a_3 = R_xw(xwTheta, e_3)
      a_4 = R_xw(xwTheta, e_4)
    }

    if (yzButton == true) {
      if (event.delta > 0) {
        yzTheta -= rotationSpeed
        rotated = true
      }
      if (event.delta < 0) {
        yzTheta += rotationSpeed
        rotated = true
      }
      a_1 = R_yz(yzTheta, e_1)
      a_2 = R_yz(yzTheta, e_2)
      a_3 = R_yz(yzTheta, e_3)
      a_4 = R_yz(yzTheta, e_4)
    }

    if (ywButton == true) {
      if (event.delta > 0) {
        ywTheta -= rotationSpeed
        rotated = true
      }
      if (event.delta < 0) {
        ywTheta += rotationSpeed
        rotated = true
      }
      a_1 = R_yw(ywTheta, e_1)
      a_2 = R_yw(ywTheta, e_2)
      a_3 = R_yw(ywTheta, e_3)
      a_4 = R_yw(ywTheta, e_4)
    }

    if (zwButton == true) {
      if (event.delta > 0) {
        zwTheta -= rotationSpeed
        rotated = true
      }
      if (event.delta < 0) {
        zwTheta += rotationSpeed
        rotated = true
      }
      a_1 = R_zw(zwTheta, e_1)
      a_2 = R_zw(zwTheta, e_2)
      a_3 = R_zw(zwTheta, e_3)
      a_4 = R_zw(zwTheta, e_4)
    }
  }

  if (counter == 11) {
    if (event.delta > 0) {
      t -= s
    }
    if (event.delta < 0) {
      t += s
    }
  }

  if (counter == 13) {
    if (curve1 == true || curve2 == true || curve3 == true) {
      if (event.delta > 0 && rgbTimer > 0) {
        rgbTimer -= rgbSpeed
      }
      if (event.delta < 0 && rgbTimer < 1) {
        rgbTimer += rgbSpeed
      }
    }
  }

  return false
}

function mouseClicked() {
  if (counter == 2) {
    //turns buttons on slide 1 on and off
    for (let i = 0; i < 3; i++) {
      if (
        dist(
          -6 + 2 * i,
          3.75,
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1]
        ) < 0.5
      ) {
        buttons_2d[i]++
      }
    }

    // turns on and off green points on line on slide 1
    for (let i = -8; i < 9; i++) {
      for (let j = -5; j < 6; j++) {
        if (
          dist(
            i,
            j,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.1
        ) {
          gridPts[(i + 8) * 11 + (j + 5)] = !gridPts[(i + 8) * 11 + (j + 5)]
        }
      }
    }
  }

  if (counter == 3) {
    slide3.handleMouseClicked()
  }

  if (counter == 4) {
    slide4.handleMouseClicked()
  }

  if (counter == 5) {
    //turns bullet points on in slide 4
    for (let i = 0; i < 3; i++) {
      if (dist(0.5 * unit, (2.2 + 2 * i) * unit, mouseX, mouseY) < unit / 4) {
        bullets_3d[i] = !bullets_3d[i]
      }
    }
  }

  if (counter == 8) {
    //Xbutton
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -6,
        -1.25
      ) < 0.75
    ) {
      if (Xbutton == true && rotated == true) {
        u1 = a1
        u2 = a2
        u3 = a3
        xTheta = 0
        yTheta = 0
        zTheta = 0
      }
      if (Ybutton == false && Zbutton == false) {
        Xbutton = !Xbutton
      }
    }

    //Ybutton
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -6,
        -2.25
      ) < 0.75
    ) {
      if (Ybutton == true && rotated == true) {
        u1 = a1
        u2 = a2
        u3 = a3
        xTheta = 0
        yTheta = 0
        zTheta = 0
      }
      if (Xbutton == false && Zbutton == false) {
        Ybutton = !Ybutton
      }
    }

    //Zbutton
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -6,
        -3.25
      ) < 0.75
    ) {
      if (Zbutton == true && rotated == true) {
        u1 = a1
        u2 = a2
        u3 = a3
        xTheta = 0
        yTheta = 0
        zTheta = 0
      }
      if (Xbutton == false && Ybutton == false) {
        Zbutton = !Zbutton
      }
    }
  }

  if (counter == 9) {
    //xyButton
    {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -6,
          3.125
        ) < 0.75
      ) {
        if (xyButton == true && rotated == true) {
          e_1 = a_1
          e_2 = a_2
          e_3 = a_3
          e_4 = a_4

          xyTheta = 0
          xzTheta = 0
          xwTheta = 0
          yzTheta = 0
          ywTheta = 0
          zwTheta = 0
        }
        if (
          xzButton == false &&
          xwButton == false &&
          yzButton == false &&
          ywButton == false &&
          zwButton == false
        ) {
          xyButton = !xyButton
        }
      }
    }

    //xzButton
    {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -6,
          1.875
        ) < 0.75
      ) {
        if (xzButton == true && rotated == true) {
          e_1 = a_1
          e_2 = a_2
          e_3 = a_3
          e_4 = a_4

          xyTheta = 0
          xzTheta = 0
          xwTheta = 0
          yzTheta = 0
          ywTheta = 0
          zwTheta = 0
        }
        if (
          xyButton == false &&
          xwButton == false &&
          yzButton == false &&
          ywButton == false &&
          zwButton == false
        ) {
          xzButton = !xzButton
        }
      }
    }

    //xwButton
    {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -6,
          0.625
        ) < 0.75
      ) {
        if (xwButton == true && rotated == true) {
          e_1 = a_1
          e_2 = a_2
          e_3 = a_3
          e_4 = a_4

          xyTheta = 0
          xzTheta = 0
          xwTheta = 0
          yzTheta = 0
          ywTheta = 0
          zwTheta = 0
        }
        if (
          xyButton == false &&
          xzButton == false &&
          yzButton == false &&
          ywButton == false &&
          zwButton == false
        ) {
          xwButton = !xwButton
        }
      }
    }

    //yzButton
    {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -6,
          -0.625
        ) < 0.75
      ) {
        if (yzButton == true && rotated == true) {
          e_1 = a_1
          e_2 = a_2
          e_3 = a_3
          e_4 = a_4

          xyTheta = 0
          xzTheta = 0
          xwTheta = 0
          yzTheta = 0
          ywTheta = 0
          zwTheta = 0
        }
        if (
          xyButton == false &&
          xzButton == false &&
          xwButton == false &&
          ywButton == false &&
          zwButton == false
        ) {
          yzButton = !yzButton
        }
      }
    }

    //ywButton
    {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -6,
          -1.875
        ) < 0.75
      ) {
        if (ywButton == true && rotated == true) {
          e_1 = a_1
          e_2 = a_2
          e_3 = a_3
          e_4 = a_4

          xyTheta = 0
          xzTheta = 0
          xwTheta = 0
          yzTheta = 0
          ywTheta = 0
          zwTheta = 0
        }
        if (
          xyButton == false &&
          xzButton == false &&
          xwButton == false &&
          yzButton == false &&
          zwButton == false
        ) {
          ywButton = !ywButton
        }
      }
    }

    //zwButton
    {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -6,
          -3.125
        ) < 0.75
      ) {
        if (zwButton == true && rotated == true) {
          e_1 = a_1
          e_2 = a_2
          e_3 = a_3
          e_4 = a_4

          xyTheta = 0
          xzTheta = 0
          xwTheta = 0
          yzTheta = 0
          ywTheta = 0
          zwTheta = 0
        }
        if (
          xyButton == false &&
          xzButton == false &&
          xwButton == false &&
          yzButton == false &&
          ywButton == false
        ) {
          zwButton = !zwButton
        }
      }
    }
  }

  if (counter == 13) {
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -4.5,
        -3
      ) < 0.5
    ) {
      rgb = !rgb
    }

    if (rgb == true) {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -1.5,
          -3
        ) < 0.5
      ) {
        curve1 = !curve1
        rd = 0
        gr = 0
        bl = 0
      }

      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          1.5,
          -3
        ) < 0.5
      ) {
        curve2 = !curve2
        rd = 0
        gr = 0
        bl = 0
      }

      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          4.5,
          -3
        ) < 0.5
      ) {
        curve3 = !curve3
        rd = 0
        gr = 0
        bl = 0
      }
    }
  }
}
