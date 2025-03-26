class Slide12 {
  constructor() {}
  show() {
    push()
    translate(-7.0 * unit, 0.0 * unit)
    textAlign(LEFT)
    fill("white")

    textSize(1.5 * unit)
    text("Part 3", 0, 0)

    textSize(1 * unit)
    text("The math metaphor", 0, 1.5 * unit)

    textSize(0.75 * unit)
    text("mathematical vs physical space", 0, 2.625 * unit)

    //     textSize(1.5 * unit);
    //     text("Part 3", 0,0);

    //     textSize(1 * unit);
    //     text("The map and", 0,1.5*unit);
    //     text("the territory", -0,2.5*unit);

    //     textSize(0.75 * unit);
    //     text("mathematical vs physical space", 0, 3.625 * unit);
    pop()
  }
}
