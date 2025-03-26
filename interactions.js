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
    slide10.handleMouseWheel(event)
  }

  if (counter == 11) {
    slide11.handleMouseWheel(event)
  }

  if (counter == 13) {
    slide13.handleMouseWheel(event)
  }
  return false
}

function mouseClicked() {
  if (counter == 2) {
    slide2.handleMouseClicked()
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
    slide13.handleMouseClicked()
  }
}
