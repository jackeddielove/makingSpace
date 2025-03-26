class Slide8 {
  constructor() {
    // NOTE FROM WENDY: JACK I COMMENTED THIS OUT AND CHANGED
    // REFERENCES TO rotated_1 to rotated, because there
    // were no conditions checking rotated_1
    //fixes bug that makes cube disappear if the first button
    //is clicked and unclicked without rotation occuring
    // this.rotated_1 = false

    this.rotated = false

    //setup for 3D projections
    //initialize a_i vectors; they keep track of the u_i during rotation
    this.a1 = createVector(0, 0, 0)
    this.a2 = createVector(0, 0, 0)
    this.a3 = createVector(0, 0, 0)

    //initialize u_i
    this.u1 = createVector(size, 0, 0)
    this.u2 = createVector(0, size, 0)
    this.u3 = createVector(0, 0, size)

    //divisor of pi for rotations: higher number = smoother animation
    this.div = 32

    //intialize buttons
    this.Xbutton = false
    this.Ybutton = false
    this.Zbutton = false

    //initialize angles
    this.xTheta = 0
    this.yTheta = 0
    this.zTheta = 0

    //rotated unit vectors
    this.d1 = this.Rx(
      this.xTheta,
      this.Ry(this.yTheta, this.Rz(this.zTheta, this.u1))
    )
    this.d2 = this.Rx(
      this.xTheta,
      this.Ry(this.yTheta, this.Rz(this.zTheta, this.u2))
    )
    this.d3 = this.Rx(
      this.xTheta,
      this.Ry(this.yTheta, this.Rz(this.zTheta, this.u3))
    )

    //cube vertices
    this.v0 = createVector(0, 0, 0)
    this.v1 = this.d1
    this.v2 = vecSum(this.d1, this.d2)
    this.v3 = this.d2
    this.v4 = this.d3
    this.v5 = vecSum(this.d1, this.d3)
    this.v6 = vecSum(vecSum(this.d1, this.d2), this.d3)
    this.v7 = vecSum(this.d2, this.d3)
  }

  Rx(theta, v) {
    return createVector(
      v.x,
      v.y * cos((theta * PI) / this.div) - v.z * sin((theta * PI) / this.div),
      v.y * sin((theta * PI) / this.div) + v.z * cos((theta * PI) / this.div)
    )
  }

  Ry(theta, v) {
    return createVector(
      v.x * cos((theta * PI) / this.div) + v.z * sin((theta * PI) / this.div),
      v.y,
      -v.x * sin((theta * PI) / this.div) + v.z * cos((theta * PI) / this.div)
    )
  }

  Rz(theta, v) {
    return createVector(
      v.x * cos((theta * PI) / this.div) - v.y * sin((theta * PI) / this.div),
      v.x * sin((theta * PI) / this.div) + v.y * cos((theta * PI) / this.div),
      v.z
    )
  }
  handleMouseClicked() {
    //Xbutton
    if (
      dist(
        mouseToWorld(mouseX, mouseY)[0],
        mouseToWorld(mouseX, mouseY)[1],
        -6,
        -1.25
      ) < 0.75
    ) {
      if (this.Xbutton == true && this.rotated == true) {
        this.u1 = this.a1
        this.u2 = this.a2
        this.u3 = this.a3
        this.xTheta = 0
        this.yTheta = 0
        this.zTheta = 0
      }
      if (this.Ybutton == false && this.Zbutton == false) {
        this.Xbutton = !this.Xbutton
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
      if (this.Ybutton == true && this.rotated == true) {
        this.u1 = this.a1
        this.u2 = this.a2
        this.u3 = this.a3
        this.xTheta = 0
        this.yTheta = 0
        this.zTheta = 0
      }
      if (this.Xbutton == false && this.Zbutton == false) {
        this.Ybutton = !this.Ybutton
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
      if (this.Zbutton == true && this.rotated == true) {
        this.u1 = this.a1
        this.u2 = this.a2
        this.u3 = this.a3
        this.xTheta = 0
        this.yTheta = 0
        this.zTheta = 0
      }
      if (this.Xbutton == false && this.Ybutton == false) {
        this.Zbutton = !this.Zbutton
      }
    }
  }
  handleMouseWheel(event) {
    if (this.Xbutton == true) {
      if (event.delta > 0) {
        this.xTheta--
        this.rotated = true
      }
      if (event.delta < 0) {
        this.xTheta++
        this.rotated = true
      }
      this.a1 = this.Rx(this.xTheta, this.u1)
      this.a2 = this.Rx(this.xTheta, this.u2)
      this.a3 = this.Rx(this.xTheta, this.u3)

      this.v1 = this.a1
      this.v2 = vecSum(this.a1, this.a2)
      this.v3 = this.a2
      this.v4 = this.a3
      this.v5 = vecSum(this.a1, this.a3)
      this.v6 = vecSum(vecSum(this.a1, this.a2), this.a3)
      this.v7 = vecSum(this.a2, this.a3)
    }

    if (this.Ybutton == true) {
      if (event.delta > 0) {
        this.yTheta--
        this.rotated = true
      }
      if (event.delta < 0) {
        this.yTheta++
        this.rotated = true
      }
      this.a1 = this.Ry(this.yTheta, this.u1)
      this.a2 = this.Ry(this.yTheta, this.u2)
      this.a3 = this.Ry(this.yTheta, this.u3)

      this.v1 = this.a1
      this.v2 = vecSum(this.a1, this.a2)
      this.v3 = this.a2
      this.v4 = this.a3
      this.v5 = vecSum(this.a1, this.a3)
      this.v6 = vecSum(vecSum(this.a1, this.a2), this.a3)
      this.v7 = vecSum(this.a2, this.a3)
    }

    if (this.Zbutton == true) {
      if (event.delta > 0) {
        this.zTheta--
        this.rotated = true
      }
      if (event.delta < 0) {
        this.zTheta++
        this.rotated = true
      }
      this.a1 = this.Rz(this.zTheta, this.u1)
      this.a2 = this.Rz(this.zTheta, this.u2)
      this.a3 = this.Rz(this.zTheta, this.u3)

      this.v1 = this.a1
      this.v2 = vecSum(this.a1, this.a2)
      this.v3 = this.a2
      this.v4 = this.a3
      this.v5 = vecSum(this.a1, this.a3)
      this.v6 = vecSum(vecSum(this.a1, this.a2), this.a3)
      this.v7 = vecSum(this.a2, this.a3)
    }
  }
  show() {
    //buttons
    {
      rectMode(CENTER)
      textAlign(CENTER)

      //shape
      stroke("white")
      strokeWeight(0.02 * unit)

      noFill()
      if (this.Xbutton == true) {
        fill("white")
      }
      rect(-6 * unit, 1.25 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)
      noFill()
      if (this.Ybutton == true) {
        fill("white")
      }
      rect(-6 * unit, 2.25 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)
      noFill()
      if (this.Zbutton == true) {
        fill("white")
      }
      rect(-6 * unit, 3.25 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

      //label
      textSize(0.35 * unit)
      fill("white")
      if (this.Xbutton == true) {
        fill("black")
      }
      text("rotate X", -6 * unit, 1.35 * unit)
      fill("white")
      if (this.Ybutton == true) {
        fill("black")
      }
      text("rotate Y", -6 * unit, 2.35 * unit)
      fill("white")
      if (this.Zbutton == true) {
        fill("black")
      }
      text("rotate Z", -6 * unit, 3.35 * unit)
    }

    //3D drawing template
    {
      push()
      rotateX(PI / 3)
      rotateZ(PI / 6)
      scale(1, -1, 1)

      //x-y-z axes
      stroke("white")
      strokeWeight(1)
      line(-10 * unit, 0, 0, 10 * unit, 0, 0)
      line(0, -10 * unit, 0, 0, 10 * unit, 0)
      line(0, 0, -10 * unit, 0, 0, 10 * unit)

      //xy-plane
      fill(255, 128)
      beginShape()
      vertex(5 * unit, 5 * unit, 0)
      vertex(5 * unit, -5 * unit, 0)
      vertex(-5 * unit, -5 * unit, 0)
      vertex(-5 * unit, 5 * unit, 0)
      endShape(CLOSE)
      pop()
    }

    //2D drawing template
    {
      push()
      translate(-0.35 * width, -0.25 * height, -1)
      fill(128)
      rectMode(CENTER)
      rect(0, 0, 4 * unit, 4 * unit, 20)
      stroke("white")
      strokeWeight(unit / 30)
      line(2 * unit, 0, -2 * unit, 0)
      line(0, 2 * unit, 0, -2 * unit)
      pop()
    }

    //3D drawing
    {
      push()
      rotateX(PI / 3)
      rotateZ(PI / 6)
      scale(1, -1, 1)

      //cube
      {
        fill(255, 128)
        strokeWeight(0.05 * unit)
        stroke("magenta")

        //face 0123
        beginShape()
        vertex(this.v0.x, this.v0.y, this.v0.z)
        vertex(this.v1.x, this.v1.y, this.v1.z)
        vertex(this.v2.x, this.v2.y, this.v2.z)
        vertex(this.v3.x, this.v3.y, this.v3.z)
        endShape(CLOSE)

        //face 0154
        beginShape()
        vertex(this.v0.x, this.v0.y, this.v0.z)
        vertex(this.v1.x, this.v1.y, this.v1.z)
        vertex(this.v5.x, this.v5.y, this.v5.z)
        vertex(this.v4.x, this.v4.y, this.v4.z)
        endShape(CLOSE)

        //face 0374
        beginShape()
        vertex(this.v0.x, this.v0.y, this.v0.z)
        vertex(this.v3.x, this.v3.y, this.v3.z)
        vertex(this.v7.x, this.v7.y, this.v7.z)
        vertex(this.v4.x, this.v4.y, this.v4.z)
        endShape(CLOSE)

        //face 1265
        beginShape()
        vertex(this.v1.x, this.v1.y, this.v1.z)
        vertex(this.v2.x, this.v2.y, this.v2.z)
        vertex(this.v6.x, this.v6.y, this.v6.z)
        vertex(this.v5.x, this.v5.y, this.v5.z)
        endShape(CLOSE)

        //face 2376
        beginShape()
        vertex(this.v2.x, this.v2.y, this.v2.z)
        vertex(this.v3.x, this.v3.y, this.v3.z)
        vertex(this.v7.x, this.v7.y, this.v7.z)
        vertex(this.v6.x, this.v6.y, this.v6.z)
        endShape(CLOSE)

        //face 4567
        beginShape()
        vertex(this.v4.x, this.v4.y, this.v4.z)
        vertex(this.v5.x, this.v5.y, this.v5.z)
        vertex(this.v6.x, this.v6.y, this.v6.z)
        vertex(this.v7.x, this.v7.y, this.v7.z)
        endShape(CLOSE)
      }

      //projection
      {
        stroke("lime")
        noFill()

        //face 0123
        beginShape()
        vertex(this.v0.x, this.v0.y)
        vertex(this.v1.x, this.v1.y)
        vertex(this.v2.x, this.v2.y)
        vertex(this.v3.x, this.v3.y)
        endShape(CLOSE)

        //face 0154
        beginShape()
        vertex(this.v0.x, this.v0.y)
        vertex(this.v1.x, this.v1.y)
        vertex(this.v5.x, this.v5.y)
        vertex(this.v4.x, this.v4.y)
        endShape(CLOSE)

        //face 0374
        beginShape()
        vertex(this.v0.x, this.v0.y)
        vertex(this.v3.x, this.v3.y)
        vertex(this.v7.x, this.v7.y)
        vertex(this.v4.x, this.v4.y)
        endShape(CLOSE)

        //face 1265
        beginShape()
        vertex(this.v1.x, this.v1.y)
        vertex(this.v2.x, this.v2.y)
        vertex(this.v6.x, this.v6.y)
        vertex(this.v5.x, this.v5.y)
        endShape(CLOSE)

        //face 2376
        beginShape()
        vertex(this.v2.x, this.v2.y)
        vertex(this.v3.x, this.v3.y)
        vertex(this.v7.x, this.v7.y)
        vertex(this.v6.x, this.v6.y)
        endShape(CLOSE)

        //face 4567
        beginShape()
        vertex(this.v4.x, this.v4.y)
        vertex(this.v5.x, this.v5.y)
        vertex(this.v6.x, this.v6.y)
        vertex(this.v7.x, this.v7.y)
        endShape(CLOSE)
      }

      pop()
    }

    //2D drawing
    {
      push()
      translate(-0.35 * width, -0.25 * height, -1)

      scale(0.5, -0.5)
      stroke("lime")
      strokeWeight(0.1 * unit)
      noFill()

      //face 0123
      beginShape()
      vertex(this.v0.x, this.v0.y)
      vertex(this.v1.x, this.v1.y)
      vertex(this.v2.x, this.v2.y)
      vertex(this.v3.x, this.v3.y)
      endShape(CLOSE)

      //face 0154
      beginShape()
      vertex(this.v0.x, this.v0.y)
      vertex(this.v1.x, this.v1.y)
      vertex(this.v5.x, this.v5.y)
      vertex(this.v4.x, this.v4.y)
      endShape(CLOSE)

      //face 0374
      beginShape()
      vertex(this.v0.x, this.v0.y)
      vertex(this.v3.x, this.v3.y)
      vertex(this.v7.x, this.v7.y)
      vertex(this.v4.x, this.v4.y)
      endShape(CLOSE)

      //face 1265
      beginShape()
      vertex(this.v1.x, this.v1.y)
      vertex(this.v2.x, this.v2.y)
      vertex(this.v6.x, this.v6.y)
      vertex(this.v5.x, this.v5.y)
      endShape(CLOSE)

      //face 2376
      beginShape()
      vertex(this.v2.x, this.v2.y)
      vertex(this.v3.x, this.v3.y)
      vertex(this.v7.x, this.v7.y)
      vertex(this.v6.x, this.v6.y)
      endShape(CLOSE)

      //face 4567
      beginShape()
      vertex(this.v4.x, this.v4.y)
      vertex(this.v5.x, this.v5.y)
      vertex(this.v6.x, this.v6.y)
      vertex(this.v7.x, this.v7.y)
      endShape(CLOSE)

      pop()
    }
  }
}
