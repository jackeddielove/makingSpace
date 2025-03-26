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
    slide2.handleMouseWheel(event)
  }

  if (counter == 4) {
    slide4.handleMouseWheel(event)
  }

  if (counter == 6) {
    slide6.handleMouseWheel(event)
  }

  if (counter == 8) {
    slide8.handleMouseWheel(event)
  }

  if (counter == 9) {
    slide9.handleMouseWheel(event)
  }

  if (counter == 10) {
    if (event.delta > 0) {
      cubeSliceTimer += cubeSliceSpeed
    }
    if (event.delta < 0) {
      cubeSliceTimer -= cubeSliceSpeed
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
    slide5.handleMouseClicked()
  }

  if (counter == 8) {
    slide8.handleMouseClicked()
  }

  if (counter == 9) {
    slide9.handleMouseClicked()
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
