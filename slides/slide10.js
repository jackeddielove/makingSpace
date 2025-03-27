class Slide10 {
  constructor() {
    this.h = 0
    this.cubeSliceTimer = 0
    this.cubeSliceSpeed = 4
    //constants for basis vectors
    this.a = sqrt(2)
    this.b1 = sqrt(3)
    //basis vectors
    this.e1 = createVector(
      size * (1 / this.a),
      size * (-1 / (this.a * this.b1)),
      size * (1 / this.b1)
    )
    this.e2 = createVector(
      size * (-1 / this.a),
      size * (-1 / (this.a * this.b1)),
      size * (1 / this.b1)
    )
    this.e3 = createVector(
      size * 0,
      size * (this.a / this.b1),
      size * (1 / this.b1)
    )
    // origin = createVector(0, 0, 0)
  }

  handleMouseWheel(event) {
    if (event.delta > 0) {
      this.cubeSliceTimer += this.cubeSliceSpeed
    }
    if (event.delta < 0) {
      this.cubeSliceTimer -= this.cubeSliceSpeed
    }
  }
  show() {
    background("black")
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

    //3D drawings
    {
      push()
      rotateX(PI / 3)
      rotateZ(PI / 6)
      scale(1, -1, 1)

      //draw slices
      {
        strokeWeight(unit / 15)
        stroke("lime")
        let sliceColor = color("lime")
        sliceColor.setAlpha(128)
        fill(sliceColor)
        this.h = (3.0 * this.cubeSliceTimer) / (size * this.b1)

        //translate these shapes one pixel above the xy-plane so they show up better
        push()
        translate(0, 0, 1)

        //the bottom third of the cube
        if (this.h > 0 && this.h <= 1) {
          beginShape()
          vertex(this.h * this.e1.x, this.h * this.e1.y, 0)
          vertex(this.h * this.e2.x, this.h * this.e2.y, 0)
          vertex(this.h * this.e3.x, this.h * this.e3.y, 0)
          endShape(CLOSE)
        }
        //the middle third of the cube
        if (this.h > 1 && this.h <= 2) {
          beginShape()
          vertex(
            this.e1.x + (this.h - 1) * this.e3.x,
            this.e1.y + (this.h - 1) * this.e3.y,
            0
          )
          vertex(
            this.e1.x + (this.h - 1) * this.e2.x,
            this.e1.y + (this.h - 1) * this.e2.y,
            0
          )
          vertex(
            this.e2.x + (this.h - 1) * this.e1.x,
            this.e2.y + (this.h - 1) * this.e1.y,
            0
          )
          vertex(
            this.e2.x + (this.h - 1) * this.e3.x,
            this.e2.y + (this.h - 1) * this.e3.y,
            0
          )
          vertex(
            this.e3.x + (this.h - 1) * this.e2.x,
            this.e3.y + (this.h - 1) * this.e2.y,
            0
          )
          vertex(
            this.e3.x + (this.h - 1) * this.e1.x,
            this.e3.y + (this.h - 1) * this.e1.y,
            0
          )
          endShape(CLOSE)
        }
        //the top third of the cube
        if (this.h > 2 && this.h <= 3) {
          beginShape()
          vertex(
            this.e1.x + this.e2.x + (this.h - 2) * this.e3.x,
            this.e1.y + this.e2.y + (this.h - 2) * this.e3.y,
            0
          )
          vertex(
            this.e1.x + this.e3.x + (this.h - 2) * this.e2.x,
            this.e1.y + this.e3.y + (this.h - 2) * this.e2.y,
            0
          )
          vertex(
            this.e2.x + this.e3.x + (this.h - 2) * this.e1.x,
            this.e2.y + this.e3.y + (this.h - 2) * this.e1.y,
            0
          )
          endShape(CLOSE)
        }
        pop()
      }

      //draw cube by faces
      //the notation face(a,b,c) means the square with vertices a, a+b, a+c, a+b+c, where 0 means orgin and i means e_i

      fill(255, 128)
      strokeWeight(unit / 30)
      stroke("magenta")

      //face1(0,1,2)
      {
        beginShape()
        vertex(0, 0, 0 - this.cubeSliceTimer)
        vertex(this.e1.x, this.e1.y, this.e1.z - this.cubeSliceTimer)
        vertex(
          vecSum(this.e1, this.e2).x,
          vecSum(this.e1, this.e2).y,
          vecSum(this.e1, this.e2).z - this.cubeSliceTimer
        )
        vertex(this.e2.x, this.e2.y, this.e2.z - this.cubeSliceTimer)
        endShape(CLOSE)
      }

      //face2(0,1,3)
      {
        beginShape()
        vertex(0, 0, 0 - this.cubeSliceTimer)
        vertex(this.e1.x, this.e1.y, this.e1.z - this.cubeSliceTimer)
        vertex(
          vecSum(this.e1, this.e3).x,
          vecSum(this.e1, this.e3).y,
          vecSum(this.e1, this.e3).z - this.cubeSliceTimer
        )
        vertex(this.e3.x, this.e3.y, this.e3.z - this.cubeSliceTimer)
        endShape(CLOSE)
      }

      //face3(0,2,3)
      {
        beginShape()
        vertex(0, 0, 0 - this.cubeSliceTimer)
        vertex(this.e2.x, this.e2.y, this.e2.z - this.cubeSliceTimer)
        vertex(
          vecSum(this.e2, this.e3).x,
          vecSum(this.e2, this.e3).y,
          vecSum(this.e2, this.e3).z - this.cubeSliceTimer
        )
        vertex(this.e3.x, this.e3.y, this.e3.z - this.cubeSliceTimer)
        endShape(CLOSE)
      }

      //face4(1,2,3)
      {
        beginShape()
        vertex(this.e1.x, this.e1.y, this.e1.z - this.cubeSliceTimer)
        vertex(
          vecSum(this.e1, this.e2).x,
          vecSum(this.e1, this.e2).y,
          vecSum(this.e1, this.e2).z - this.cubeSliceTimer
        )
        vertex(
          vecSum(this.e1, vecSum(this.e2, this.e3)).x,
          vecSum(this.e1, vecSum(this.e2, this.e3)).y,
          vecSum(this.e1, vecSum(this.e2, this.e3)).z - this.cubeSliceTimer
        )
        vertex(
          vecSum(this.e1, this.e3).x,
          vecSum(this.e1, this.e3).y,
          vecSum(this.e1, this.e3).z - this.cubeSliceTimer
        )
        endShape(CLOSE)
      }

      //face5(3,1,2)
      {
        beginShape()
        vertex(this.e3.x, this.e3.y, this.e3.z - this.cubeSliceTimer)
        vertex(
          vecSum(this.e3, this.e2).x,
          vecSum(this.e3, this.e2).y,
          vecSum(this.e3, this.e2).z - this.cubeSliceTimer
        )
        vertex(
          vecSum(this.e1, vecSum(this.e2, this.e3)).x,
          vecSum(this.e1, vecSum(this.e2, this.e3)).y,
          vecSum(this.e1, vecSum(this.e2, this.e3)).z - this.cubeSliceTimer
        )
        vertex(
          vecSum(this.e1, this.e3).x,
          vecSum(this.e1, this.e3).y,
          vecSum(this.e1, this.e3).z - this.cubeSliceTimer
        )
        endShape(CLOSE)
      }

      //face6(2,1,3)
      {
        beginShape()
        vertex(this.e2.x, this.e2.y, this.e2.z - this.cubeSliceTimer)
        vertex(
          vecSum(this.e3, this.e2).x,
          vecSum(this.e3, this.e2).y,
          vecSum(this.e3, this.e2).z - this.cubeSliceTimer
        )
        vertex(
          vecSum(this.e1, vecSum(this.e2, this.e3)).x,
          vecSum(this.e1, vecSum(this.e2, this.e3)).y,
          vecSum(this.e1, vecSum(this.e2, this.e3)).z - this.cubeSliceTimer
        )
        vertex(
          vecSum(this.e1, this.e2).x,
          vecSum(this.e1, this.e2).y,
          vecSum(this.e1, this.e2).z - this.cubeSliceTimer
        )
        endShape(CLOSE)
      }

      pop()
    }

    //2D drawings
    {
      push()
      translate(-0.35 * width, -0.25 * height)
      scale(1, -1, 1)

      //cube slices
      scale(0.75, 0.75, 1)
      stroke("lime")
      strokeWeight(unit / 20)
      const sliceColor = color("lime")
      sliceColor.setAlpha(128)
      fill(sliceColor)

      if (this.h > 0 && this.h <= 1) {
        beginShape()
        vertex(this.h * this.e1.x, this.h * this.e1.y, 0)
        vertex(this.h * this.e2.x, this.h * this.e2.y, 0)
        vertex(this.h * this.e3.x, this.h * this.e3.y, 0)
        endShape(CLOSE)
      }
      if (this.h > 1 && this.h <= 2) {
        beginShape()
        vertex(
          this.e1.x + (this.h - 1) * this.e3.x,
          this.e1.y + (this.h - 1) * this.e3.y,
          0
        )
        vertex(
          this.e1.x + (this.h - 1) * this.e2.x,
          this.e1.y + (this.h - 1) * this.e2.y,
          0
        )
        vertex(
          this.e2.x + (this.h - 1) * this.e1.x,
          this.e2.y + (this.h - 1) * this.e1.y,
          0
        )
        vertex(
          this.e2.x + (this.h - 1) * this.e3.x,
          this.e2.y + (this.h - 1) * this.e3.y,
          0
        )
        vertex(
          this.e3.x + (this.h - 1) * this.e2.x,
          this.e3.y + (this.h - 1) * this.e2.y,
          0
        )
        vertex(
          this.e3.x + (this.h - 1) * this.e1.x,
          this.e3.y + (this.h - 1) * this.e1.y,
          0
        )
        endShape(CLOSE)
      }
      if (this.h > 2 && this.h <= 3) {
        beginShape()
        vertex(
          this.e1.x + this.e2.x + (this.h - 2) * this.e3.x,
          this.e1.y + this.e2.y + (this.h - 2) * this.e3.y,
          0
        )
        vertex(
          this.e1.x + this.e3.x + (this.h - 2) * this.e2.x,
          this.e1.y + this.e3.y + (this.h - 2) * this.e2.y,
          0
        )
        vertex(
          this.e2.x + this.e3.x + (this.h - 2) * this.e1.x,
          this.e2.y + this.e3.y + (this.h - 2) * this.e1.y,
          0
        )
        endShape(CLOSE)
      }
      pop()
    }
  }
}
