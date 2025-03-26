class Slide11 {
  constructor() {
    //constants for this.basis vectors
    this.a = (size * 1) / sqrt(2)
    this.b = (size * 1) / 2

    //initiate t, which will be controlled by up and down arrows
    this.t = 0
    this.h = 0

    //set animation speed
    this.s = 5

    //initialize grade
    this.grade = 0

    //define the this.basis vectors
    const f1 = [this.a, 0, -this.b]
    const f2 = [0, this.a, this.b]
    const f3 = [-this.a, 0, -this.b]
    const f4 = [0, -this.a, this.b]

    this.basis = [f1, f2, f3, f4]

    //create indices omitting one each of 0, 1, 2, 3, to call when drawing slices.
    this.indices = [
      [1, 2, 3],
      [0, 2, 3],
      [0, 1, 3],
      [0, 1, 2],
    ]
  }

  handleMouseWheel(event) {
    if (event.delta > 0) {
      this.t -= this.s
    }
    if (event.delta < 0) {
      this.t += this.s
    }
  }

  // vert1, vert2, etc. are functions that return points on the edges between two grades of the face poset of the 4-cube, projected onto 3-space

  //this is for grade 1; returns the vertex h*u as an array
  vert1(u, h) {
    return [h * u[0], h * u[1], h * u[2]]
  }

  //this is for grade 2, returns the vertex u+h*v as an array
  vert2(u, v, h) {
    return [u[0] + h * v[0], u[1] + h * v[1], u[2] + h * v[2], u[3] + h * v[3]]
  }

  //this is for grade 3, returns the vertex (u+v)+h*w as an array
  vert3(u, v, w, h) {
    return [
      u[0] + v[0] + h * w[0],
      u[1] + v[1] + h * w[1],
      u[2] + v[2] + h * w[2],
      u[3] + v[3] + h * w[3],
    ]
  }

  //this is for grade 4, returns the vector (u+v+w)+h*x
  vert4(u, v, w, x, h) {
    return [
      u[0] + v[0] + w[0] + h * x[0],
      u[1] + v[1] + w[1] + h * x[1],
      u[2] + v[2] + w[2] + h * x[2],
      u[3] + v[3] + w[3] + h * x[3],
    ]
  }

  show() {
    background("black")
    //set h and grade for each interval of t-values
    if (this.t >= 0 && this.t < 100) {
      this.h = this.t / 100
      this.grade = 1
    }

    if (this.t >= 100 && this.t < 200) {
      this.h = (this.t - 100) / 100
      this.grade = 2
    }

    if (this.t >= 200 && this.t < 300) {
      this.h = (this.t - 200) / 100
      this.grade = 3
    }

    if (this.t >= 300 && this.t <= 400) {
      this.h = (this.t - 300) / 100
      this.grade = 4
    }

    //set the view of 3d space
    push()
    rotateX(PI / 3)
    rotateZ(PI / 5)
    scale(1, -1, 1)

    //x-y-z axes
    stroke("white")
    strokeWeight(1)
    line(-10 * unit, 0, 0, 10 * unit, 0, 0)
    line(0, -10 * unit, 0, 0, 10 * unit, 0)
    line(0, 0, -10 * unit, 0, 0, 10 * unit)

    fill("aqua")
    stroke("magenta")
    strokeWeight(unit / 20)

    if (this.grade == 1) {
      for (let i = 0; i < 4; i++) {
        beginShape()
        for (let j = 0; j < 3; j++) {
          vertex(
            this.vert1(this.basis[this.indices[i][j]], this.h)[0],
            this.vert1(this.basis[this.indices[i][j]], this.h)[1],
            this.vert1(this.basis[this.indices[i][j]], this.h)[2]
          )
        }
        endShape(CLOSE)
      }
    }

    if (this.grade == 2) {
      //triangles
      for (let i = 0; i < 4; i++) {
        beginShape()
        for (let j = 0; j < 3; j++) {
          vertex(
            this.vert2(
              this.basis[i],
              this.basis[this.indices[i][j]],
              this.h
            )[0],
            this.vert2(
              this.basis[i],
              this.basis[this.indices[i][j]],
              this.h
            )[1],
            this.vert2(this.basis[i], this.basis[this.indices[i][j]], this.h)[2]
          )
        }
        endShape(CLOSE)
      }
      //hexagons
      for (let i = 0; i < 4; i++) {
        beginShape()
        for (let j = 0; j < 3; j++) {
          vertex(
            this.vert2(
              this.basis[this.indices[i][j]],
              this.basis[this.indices[i][(j + 2) % 3]],
              this.h
            )[0],
            this.vert2(
              this.basis[this.indices[i][j]],
              this.basis[this.indices[i][(j + 2) % 3]],
              this.h
            )[1],
            this.vert2(
              this.basis[this.indices[i][j]],
              this.basis[this.indices[i][(j + 2) % 3]],
              this.h
            )[2]
          )
          vertex(
            this.vert2(
              this.basis[this.indices[i][j]],
              this.basis[this.indices[i][(j + 4) % 3]],
              this.h
            )[0],
            this.vert2(
              this.basis[this.indices[i][j]],
              this.basis[this.indices[i][(j + 4) % 3]],
              this.h
            )[1],
            this.vert2(
              this.basis[this.indices[i][j]],
              this.basis[this.indices[i][(j + 4) % 3]],
              this.h
            )[2]
          )
        }
        endShape(CLOSE)
      }
    }

    if (this.grade == 3) {
      //triangles
      for (let i = 0; i < 4; i++) {
        beginShape()
        for (let j = 0; j < 3; j++) {
          vertex(
            this.vert3(
              this.basis[this.indices[i][(j + 1) % 3]],
              this.basis[this.indices[i][(j + 2) % 3]],
              this.basis[this.indices[i][j]],
              this.h
            )[0],
            this.vert3(
              this.basis[this.indices[i][(j + 1) % 3]],
              this.basis[this.indices[i][(j + 2) % 3]],
              this.basis[this.indices[i][j]],
              this.h
            )[1],
            this.vert3(
              this.basis[this.indices[i][(j + 1) % 3]],
              this.basis[this.indices[i][(j + 2) % 3]],
              this.basis[this.indices[i][j]],
              this.h
            )[2]
          )
        }
        endShape(CLOSE)
      }
      //hexagons
      for (let i = 0; i < 4; i++) {
        beginShape()
        for (let j = 0; j < 3; j++) {
          vertex(
            this.vert3(
              this.basis[i],
              this.basis[this.indices[i][(2 * j) % 3]],
              this.basis[this.indices[i][(2 * j + 1) % 3]],
              this.h
            )[0],
            this.vert3(
              this.basis[i],
              this.basis[this.indices[i][(2 * j) % 3]],
              this.basis[this.indices[i][(2 * j + 1) % 3]],
              this.h
            )[1],
            this.vert3(
              this.basis[i],
              this.basis[this.indices[i][(2 * j) % 3]],
              this.basis[this.indices[i][(2 * j + 1) % 3]],
              this.h
            )[2]
          )
          vertex(
            this.vert3(
              this.basis[i],
              this.basis[this.indices[i][(2 * j) % 3]],
              this.basis[this.indices[i][(2 * j + 2) % 3]],
              this.h
            )[0],
            this.vert3(
              this.basis[i],
              this.basis[this.indices[i][(2 * j) % 3]],
              this.basis[this.indices[i][(2 * j + 2) % 3]],
              this.h
            )[1],
            this.vert3(
              this.basis[i],
              this.basis[this.indices[i][(2 * j) % 3]],
              this.basis[this.indices[i][(2 * j + 2) % 3]],
              this.h
            )[2]
          )
        }
        endShape(CLOSE)
      }
    }

    if (this.grade == 4) {
      for (let i = 0; i < 4; i++) {
        beginShape()
        for (let j = 0; j < 3; j++) {
          vertex(
            this.vert4(
              this.basis[(this.indices[i][j] + 1) % 4],
              this.basis[(this.indices[i][j] + 2) % 4],
              this.basis[(this.indices[i][j] + 3) % 4],
              this.basis[this.indices[i][j]],
              this.h
            )[0],
            this.vert4(
              this.basis[(this.indices[i][j] + 1) % 4],
              this.basis[(this.indices[i][j] + 2) % 4],
              this.basis[(this.indices[i][j] + 3) % 4],
              this.basis[this.indices[i][j]],
              this.h
            )[1],
            this.vert4(
              this.basis[(this.indices[i][j] + 1) % 4],
              this.basis[(this.indices[i][j] + 2) % 4],
              this.basis[(this.indices[i][j] + 3) % 4],
              this.basis[this.indices[i][j]],
              this.h
            )[2]
          )
        }
        endShape(CLOSE)
      }
    }
    pop()
  }
}
