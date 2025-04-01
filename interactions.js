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

// if (contro.pressed('r')) counter++;
// if (contro.pressed('l')) counter--;





function mouseWheel(event) {
  switch (counter) {
    case 2:
      slide2.handleMouseWheel(event)
      break
    case 4:
      slide4.handleMouseWheel(event)
      break
    case 6:
      slide6.handleMouseWheel(event)
      break
    case 8:
      slide8.handleMouseWheel(event)
      break
    case 9:
      slide9.handleMouseWheel(event)
      break
    case 10:
      slide10.handleMouseWheel(event)
      break
    case 11:
      slide11.handleMouseWheel(event)
      break
    case 13:
      slide13.handleMouseWheel(event)
      break
  }
  return false
}

function mouseClicked() {
  switch (counter) {
    case 2:
      slide2.handleMouseClicked()
      break
    case 3:
      slide3.handleMouseClicked()
      break
    case 4:
      slide4.handleMouseClicked()
      break
    case 5:
      slide5.handleMouseClicked()
      break
    case 8:
      slide8.handleMouseClicked()
      break
    case 9:
      slide9.handleMouseClicked()
      break
    case 13:
      slide13.handleMouseClicked()
      break
  }
}
