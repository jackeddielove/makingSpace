class Slide1 {
  show() {
    background("black")
    push()
    translate(-7.0 * unit, 0.0 * unit)
    textAlign(LEFT)
    fill("white")

    textSize(1.5 * unit)
    text("Part 1", 0, 0)

    textSize(1 * unit)
    text("Describing space", 0, 1.5 * unit)
    text("with numbers", -0, 2.5 * unit)

    textSize(0.75 * unit)
    text("2D, 3D, and beyond", 0, 3.625 * unit)
    pop()
  }
}
