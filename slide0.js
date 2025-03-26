class Slide0 {
  show() {
    push()
    translate(-7.0 * unit, 0.0 * unit)
    textAlign(LEFT)
    fill("white")

    textSize(1.8 * unit)
    text("Making Space", 0, 0)

    textSize(0.75 * unit)
    text("The mathematics of", 0, 1.125 * unit)
    text("higher dimensions", 0, 1.895 * unit)
    pop()

    push()
    scale(2.5 * unit, 2.5 * unit, 2.5 * unit)
    translate(-0.25, 0)
    rotateX(PI / 3)
    rotateZ(PI / 6)
    stroke("white")
    strokeWeight(0.01 * unit)
    for (let j = 0; j < 15; j++) {
      for (let i = j + 1; i < 16; i++) {
        if (arrComp(P[j], P[i]) == true) {
          edge(
            titleRotation(phi_x, phi_y, phi_z, P[j]),
            titleRotation(phi_x, phi_y, phi_z, P[i])
          )
        }
      }
    }
    pop()

    titleTimer++
    phi_x = sin(titleTimer / 40)
    phi_y = cos((1.5 * titleTimer) / 40)
    phi_z = sin(titleTimer / 40) * cos(titleTimer / 40)
  }
}
