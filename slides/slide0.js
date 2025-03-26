class Slide0 {
  constructor() {
    this.titleTimer = 0
    this.phi_x = 0
    this.phi_y = 0
    this.phi_z = 0
  }
  //rotates a point in 4-space (v) in the xy plane by a radians, the xz plane by b radians, and the yz plane by c radians
  titleRotation(a, b, c, v) {
    return [
      cos(a) * v[0] -
        sin(a) * sin(b) * v[1] -
        sin(a) * cos(b) * sin(c) * v[2] -
        sin(a) * cos(b) * cos(c) * v[3],
      0 * v[0] +
        cos(b) * v[1] -
        sin(b) * sin(c) * v[2] -
        sin(b) * cos(c) * v[3],
      0 * v[0] + 0 * v[1] + cos(c) * v[2] - sin(c) * v[3],
      sin(a) * v[0] +
        cos(a) * sin(b) * v[1] +
        cos(a) * cos(b) * sin(c) * v[2] +
        cos(a) * cos(b) * cos(c) * v[3],
    ]
  }
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
            this.titleRotation(this.phi_x, this.phi_y, this.phi_z, P[j]),
            this.titleRotation(this.phi_x, this.phi_y, this.phi_z, P[i])
          )
        }
      }
    }
    pop()

    this.titleTimer++
    this.phi_x = sin(this.titleTimer / 40)
    this.phi_y = cos((1.5 * this.titleTimer) / 40)
    this.phi_z = sin(this.titleTimer / 40) * cos(this.titleTimer / 40)
  }
}
