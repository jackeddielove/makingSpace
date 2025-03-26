class Slide9 {
  constructor() {
    this.rotated = false
    this.rotationSpeed = 0.05

    //intialize button states
    this.xyButton = false
    this.xzButton = false
    this.xwButton = false
    this.yzButton = false
    this.ywButton = false
    this.zwButton = false

    //initialize angles
    this.xyTheta = 0
    this.xzTheta = 0
    this.xwTheta = 0
    this.yzTheta = 0
    this.ywTheta = 0
    this.zwTheta = 0

    //setup for 4D projections
    //initialize a_i vectors; they keep track of the e_i during rotation
    this.a_1 = [0, 0, 0, 0]
    this.a_2 = [0, 0, 0, 0]
    this.a_3 = [0, 0, 0]
    this.a_4 = [0, 0, 0, 0]

    //unit vectors
    this.e_1 = [0, 0, 0, size]
    this.e_2 = [0, 0, size, 0]
    this.e_3 = [0, size, 0, 0]
    this.e_4 = [size, 0, 0, 0]
  }

  handleMouseWheel(event) {
    if (this.xyButton == true) {
      if (event.delta > 0) {
        this.xyTheta -= this.rotationSpeed
        this.rotated = true
      }
      if (event.delta < 0) {
        this.xyTheta += this.rotationSpeed
        this.rotated = true
      }
      this.a_1 = this.R_xy(this.xyTheta, this.e_1)
      this.a_2 = this.R_xy(this.xyTheta, this.e_2)
      this.a_3 = this.R_xy(this.xyTheta, this.e_3)
      this.a_4 = this.R_xy(this.xyTheta, this.e_4)
    }

    if (this.xzButton == true) {
      if (event.delta > 0) {
        this.xzTheta -= this.rotationSpeed
        this.rotated = true
      }
      if (event.delta < 0) {
        this.xzTheta += this.rotationSpeed
        this.rotated = true
      }
      this.a_1 = this.R_xz(this.xzTheta, this.e_1)
      this.a_2 = this.R_xz(this.xzTheta, this.e_2)
      this.a_3 = this.R_xz(this.xzTheta, this.e_3)
      this.a_4 = this.R_xz(this.xzTheta, this.e_4)
    }

    if (this.xwButton == true) {
      if (event.delta > 0) {
        this.xwTheta -= this.rotationSpeed
        this.rotated = true
      }
      if (event.delta < 0) {
        this.xwTheta += this.rotationSpeed
        this.rotated = true
      }
      this.a_1 = this.R_xw(this.xwTheta, this.e_1)
      this.a_2 = this.R_xw(this.xwTheta, this.e_2)
      this.a_3 = this.R_xw(this.xwTheta, this.e_3)
      this.a_4 = this.R_xw(this.xwTheta, this.e_4)
    }

    if (this.yzButton == true) {
      if (event.delta > 0) {
        this.yzTheta -= this.rotationSpeed
        this.rotated = true
      }
      if (event.delta < 0) {
        this.yzTheta += this.rotationSpeed
        this.rotated = true
      }
      this.a_1 = this.R_yz(this.yzTheta, this.e_1)
      this.a_2 = this.R_yz(this.yzTheta, this.e_2)
      this.a_3 = this.R_yz(this.yzTheta, this.e_3)
      this.a_4 = this.R_yz(this.yzTheta, this.e_4)
    }

    if (this.ywButton == true) {
      if (event.delta > 0) {
        this.ywTheta -= this.rotationSpeed
        this.rotated = true
      }
      if (event.delta < 0) {
        this.ywTheta += this.rotationSpeed
        this.rotated = true
      }
      this.a_1 = this.R_yw(this.ywTheta, this.e_1)
      this.a_2 = this.R_yw(this.ywTheta, this.e_2)
      this.a_3 = this.R_yw(this.ywTheta, this.e_3)
      this.a_4 = this.R_yw(this.ywTheta, this.e_4)
    }

    if (this.zwButton == true) {
      if (event.delta > 0) {
        this.zwTheta -= this.rotationSpeed
        this.rotated = true
      }
      if (event.delta < 0) {
        this.zwTheta += this.rotationSpeed
        this.rotated = true
      }
      this.a_1 = this.R_zw(this.zwTheta, this.e_1)
      this.a_2 = this.R_zw(this.zwTheta, this.e_2)
      this.a_3 = this.R_zw(this.zwTheta, this.e_3)
      this.a_4 = this.R_zw(this.zwTheta, this.e_4)
    }
  }

  handleMouseClicked() {
    //this.xyButton
    {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -6,
          3.125
        ) < 0.75
      ) {
        if (this.xyButton == true && this.rotated == true) {
          this.e_1 = this.a_1
          this.e_2 = this.a_2
          this.e_3 = this.a_3
          this.e_4 = this.a_4

          this.xyTheta = 0
          this.xzTheta = 0
          this.xwTheta = 0
          this.yzTheta = 0
          this.ywTheta = 0
          this.zwTheta = 0
        }
        if (
          this.xzButton == false &&
          this.xwButton == false &&
          this.yzButton == false &&
          this.ywButton == false &&
          this.zwButton == false
        ) {
          this.xyButton = !this.xyButton
        }
      }
    }

    //this.xzButton
    {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -6,
          1.875
        ) < 0.75
      ) {
        if (this.xzButton == true && this.rotated == true) {
          this.e_1 = this.a_1
          this.e_2 = this.a_2
          this.e_3 = this.a_3
          this.e_4 = this.a_4

          this.xyTheta = 0
          this.xzTheta = 0
          this.xwTheta = 0
          this.yzTheta = 0
          this.ywTheta = 0
          this.zwTheta = 0
        }
        if (
          this.xyButton == false &&
          this.xwButton == false &&
          this.yzButton == false &&
          this.ywButton == false &&
          this.zwButton == false
        ) {
          this.xzButton = !this.xzButton
        }
      }
    }

    //this.xwButton
    {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -6,
          0.625
        ) < 0.75
      ) {
        if (this.xwButton == true && this.rotated == true) {
          this.e_1 = this.a_1
          this.e_2 = this.a_2
          this.e_3 = this.a_3
          this.e_4 = this.a_4

          this.xyTheta = 0
          this.xzTheta = 0
          this.xwTheta = 0
          this.yzTheta = 0
          this.ywTheta = 0
          this.zwTheta = 0
        }
        if (
          this.xyButton == false &&
          this.xzButton == false &&
          this.yzButton == false &&
          this.ywButton == false &&
          this.zwButton == false
        ) {
          this.xwButton = !this.xwButton
        }
      }
    }

    //this.yzButton
    {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -6,
          -0.625
        ) < 0.75
      ) {
        if (this.yzButton == true && this.rotated == true) {
          this.e_1 = this.a_1
          this.e_2 = this.a_2
          this.e_3 = this.a_3
          this.e_4 = this.a_4

          this.xyTheta = 0
          this.xzTheta = 0
          this.xwTheta = 0
          this.yzTheta = 0
          this.ywTheta = 0
          this.zwTheta = 0
        }
        if (
          this.xyButton == false &&
          this.xzButton == false &&
          this.xwButton == false &&
          this.ywButton == false &&
          this.zwButton == false
        ) {
          this.yzButton = !this.yzButton
        }
      }
    }

    //this.ywButton
    {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -6,
          -1.875
        ) < 0.75
      ) {
        if (this.ywButton == true && this.rotated == true) {
          this.e_1 = this.a_1
          this.e_2 = this.a_2
          this.e_3 = this.a_3
          this.e_4 = this.a_4

          this.xyTheta = 0
          this.xzTheta = 0
          this.xwTheta = 0
          this.yzTheta = 0
          this.ywTheta = 0
          this.zwTheta = 0
        }
        if (
          this.xyButton == false &&
          this.xzButton == false &&
          this.xwButton == false &&
          this.yzButton == false &&
          this.zwButton == false
        ) {
          this.ywButton = !this.ywButton
        }
      }
    }

    //this.zwButton
    {
      if (
        dist(
          mouseToWorld(mouseX, mouseY)[0],
          mouseToWorld(mouseX, mouseY)[1],
          -6,
          -3.125
        ) < 0.75
      ) {
        if (this.zwButton == true && this.rotated == true) {
          this.e_1 = this.a_1
          this.e_2 = this.a_2
          this.e_3 = this.a_3
          this.e_4 = this.a_4

          this.xyTheta = 0
          this.xzTheta = 0
          this.xwTheta = 0
          this.yzTheta = 0
          this.ywTheta = 0
          this.zwTheta = 0
        }
        if (
          this.xyButton == false &&
          this.xzButton == false &&
          this.xwButton == false &&
          this.yzButton == false &&
          this.ywButton == false
        ) {
          this.zwButton = !this.zwButton
        }
      }
    }
  }

  //fix 23, rotate 01
  R_xy(theta, v) {
    return [
      cos(theta) * v[0] - sin(theta) * v[1],
      sin(theta) * v[0] + cos(theta) * v[1],
      v[2],
      v[3],
    ]
  }

  //fix 13, rotate 02
  R_xz(theta, v) {
    return [
      cos(theta) * v[0] - sin(theta) * v[2],
      v[1],
      sin(theta) * v[0] + cos(theta) * v[2],
      v[3],
    ]
  }

  //fix 12, rotate 03
  R_xw(theta, v) {
    return [
      cos(theta) * v[0] - sin(theta) * v[3],
      v[1],
      v[2],
      sin(theta) * v[0] + cos(theta) * v[3],
    ]
  }

  //fix 03, rotate 12
  R_yz(theta, v) {
    return [
      v[0],
      cos(theta) * v[1] - sin(theta) * v[2],
      sin(theta) * v[1] + cos(theta) * v[2],
      v[3],
    ]
  }

  //fix 02, rotate 13
  R_yw(theta, v) {
    return [
      v[0],
      cos(theta) * v[1] - sin(theta) * v[3],
      v[2],
      sin(theta) * v[1] + cos(theta) * v[3],
    ]
  }

  //fix 01, rotate 23
  R_zw(theta, v) {
    return [
      v[0],
      v[1],
      cos(theta) * v[2] - sin(theta) * v[3],
      sin(theta) * v[2] + cos(theta) * v[3],
    ]
  }

  show() {
    //buttons
    rectMode(CENTER)
    textAlign(CENTER)

    //shape
    stroke("white")
    strokeWeight(0.02 * unit)

    noFill()
    if (this.xyButton == true) {
      fill("white")
    }
    rect(-6 * unit, -3.125 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

    noFill()
    if (this.xzButton == true) {
      fill("white")
    }
    rect(-6 * unit, -1.875 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

    noFill()
    if (this.xwButton == true) {
      fill("white")
    }
    rect(-6 * unit, -0.625 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

    noFill()
    if (this.yzButton == true) {
      fill("white")
    }
    rect(-6 * unit, 0.625 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

    noFill()
    if (this.ywButton == true) {
      fill("white")
    }
    rect(-6 * unit, 1.875 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

    noFill()
    if (this.zwButton == true) {
      fill("white")
    }
    rect(-6 * unit, 3.125 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

    //labels
    textSize(0.35 * unit)
    fill("white")
    if (this.xyButton == true) {
      fill("black")
    }
    text("rotate XY", -6 * unit, -3.025 * unit)

    fill("white")
    if (this.xzButton == true) {
      fill("black")
    }
    text("rotate XZ", -6 * unit, -1.775 * unit)

    fill("white")
    if (this.xwButton == true) {
      fill("black")
    }
    text("rotate XW", -6 * unit, -0.525 * unit)

    fill("white")
    if (this.yzButton == true) {
      fill("black")
    }
    text("rotate YZ", -6 * unit, 0.725 * unit)

    fill("white")
    if (this.ywButton == true) {
      fill("black")
    }
    text("rotate YW", -6 * unit, 1.975 * unit)

    fill("white")
    if (this.zwButton == true) {
      fill("black")
    }
    text("rotate ZW", -6 * unit, 3.225 * unit)

    //3D drawing template
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

    //rotated unit vectors
    const d_1 = this.R_xy(
      this.xyTheta,
      this.R_xz(
        this.xzTheta,
        this.R_xw(
          this.xwTheta,
          this.R_yz(
            this.yzTheta,
            this.R_yw(this.ywTheta, this.R_zw(this.zwTheta, this.e_1))
          )
        )
      )
    )

    const d_2 = this.R_xy(
      this.xyTheta,
      this.R_xz(
        this.xzTheta,
        this.R_xw(
          this.xwTheta,
          this.R_yz(
            this.yzTheta,
            this.R_yw(this.ywTheta, this.R_zw(this.zwTheta, this.e_2))
          )
        )
      )
    )

    const d_3 = this.R_xy(
      this.xyTheta,
      this.R_xz(
        this.xzTheta,
        this.R_xw(
          this.xwTheta,
          this.R_yz(
            this.yzTheta,
            this.R_yw(this.ywTheta, this.R_zw(this.zwTheta, this.e_3))
          )
        )
      )
    )

    const d_4 = this.R_xy(
      this.xyTheta,
      this.R_xz(
        this.xzTheta,
        this.R_xw(
          this.xwTheta,
          this.R_yz(
            this.yzTheta,
            this.R_yw(this.ywTheta, this.R_zw(this.zwTheta, this.e_4))
          )
        )
      )
    )

    //cube vertices
    //grade 0
    const v_0000 = [0, 0, 0, 0]
    const grade_0 = [v_0000]

    //grade 1
    const v_0001 = d_1
    const v_0010 = d_2
    const v_0100 = d_3
    const v_1000 = d_4
    const grade_1 = [v_0001, v_0010, v_0100, v_1000]

    //grade 2
    const v_0011 = arrSum(d_1, d_2)
    const v_0101 = arrSum(d_1, d_3)
    const v_0110 = arrSum(d_2, d_3)
    const v_1001 = arrSum(d_1, d_4)
    const v_1010 = arrSum(d_2, d_4)
    const v_1100 = arrSum(d_3, d_4)
    const grade_2 = [v_0011, v_0101, v_0110, v_1001, v_1010, v_1100]

    //grade 3
    const v_0111 = arrSum(arrSum(d_1, d_2), d_3)
    const v_1011 = arrSum(arrSum(d_1, d_2), d_4)
    const v_1101 = arrSum(arrSum(d_1, d_3), d_4)
    const v_1110 = arrSum(arrSum(d_2, d_3), d_4)
    const grade_3 = [v_0111, v_1011, v_1101, v_1110]

    //grade 4
    const v_1111 = arrSum(arrSum(arrSum(d_1, d_2), d_3), d_4)
    const grade_4 = [v_1111]

    const grades = [grade_0, grade_1, grade_2, grade_3, grade_4]

    strokeWeight(0.05 * unit)
    stroke("lime")

    for (let i = 0; i < grades.length - 1; i++) {
      for (let j = 0; j < grades[i].length; j++) {
        for (let k = 0; k < grades[i + 1].length; k++) {
          if (arrComp(grs[i][j], grs[i + 1][k]) == true) {
            edge(grades[i][j], grades[i + 1][k])
          }
        }
      }
    }

    pop()
  }
}
