class Slide7 {
  constructor() {}
  show() {
    background("black")
    push()
    translate(-7.0 * unit, 0.0 * unit)
    textAlign(LEFT)
    fill("white")

    textSize(1.5 * unit)
    text("Part 2", 0, 0)

    textSize(1 * unit)
    text("Expanding our vision", 0, 1.5 * unit)

    textSize(0.75 * unit)
    text("seeing in 4D", 0, 2.625 * unit)
    pop()
  }
}
