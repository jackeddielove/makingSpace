let slide0, slide1, slide2
{
  //slide 3 -- 2D table
  {
    //bullet points state
    bullets = [false, false, false]
  }

  //slide 4 -- 3D
  {
    //button states
    buttons = [0, 0, 0]
    //starting coordinates of point
    ptCoords = [3, 0, 0]
    //starting coefficients of plane
    plCoefficients = [1, 1, -1, 0]
  }

  //slide 5 -- 3D table
  {
    //bullet points state
    bullets_3d = [false, false, false]
  }

  //slide 6 -- general table
  {
    //horizontal scroll
    h = 0
    hSpeed = 20
  }

  //slide 7 -- part 2 title

  //slide 8 -- projecting 3D to 2D
  {
    //fixes bug that makes cube disappear if the first button
    //is clicked and unclicked without rotation occuring
    rotated_1 = false

    rotated = false

    //divisor of pi for rotations: higher number = smoother animation
    div = 32

    //intialize buttons
    Xbutton = false
    Ybutton = false
    Zbutton = false

    //initialize angles
    xTheta = 0
    yTheta = 0
    zTheta = 0
  }

  //slide 9 -- slicing 3D with 2D
  {
    cubeSliceTimer = 0
    cubeSliceSpeed = 4
  }

  //slide 10 -- projecting 4D to 3D
  {
    //intialize button states
    xyButton = false
    xzButton = false
    xwButton = false
    yzButton = false
    ywButton = false
    zwButton = false

    //initialize angles
    xyTheta = 0
    xzTheta = 0
    xwTheta = 0
    yzTheta = 0
    ywTheta = 0
    zwTheta = 0

    //edge poset
    p_0 = [0, 0, 0, 0]
    gr_0 = [p_0]
    p_1 = [0, 0, 0, 1]
    p_2 = [0, 0, 1, 0]
    p_3 = [0, 1, 0, 0]
    p_4 = [1, 0, 0, 0]
    gr_1 = [p_1, p_2, p_3, p_4]
    p_5 = [0, 0, 1, 1]
    p_6 = [0, 1, 0, 1]
    p_7 = [0, 1, 1, 0]
    p_8 = [1, 0, 0, 1]
    p_9 = [1, 0, 1, 0]
    p_10 = [1, 1, 0, 0]
    gr_2 = [p_5, p_6, p_7, p_8, p_9, p_10]
    p_11 = [0, 1, 1, 1]
    p_12 = [1, 0, 1, 1]
    p_13 = [1, 1, 0, 1]
    p_14 = [1, 1, 1, 0]
    gr_3 = [p_11, p_12, p_13, p_14]
    p_15 = [1, 1, 1, 1]
    gr_4 = [p_15]
    grs = [gr_0, gr_1, gr_2, gr_3, gr_4]

    //this is used on title slide
    P = [
      p_0,
      p_1,
      p_2,
      p_3,
      p_4,
      p_5,
      p_6,
      p_7,
      p_8,
      p_9,
      p_10,
      p_11,
      p_12,
      p_13,
      p_14,
      p_15,
    ]

    rotationSpeed = 0.05
  }

  //slide 11 -- slicing 4D with 3D
  {
    //functions that return points on the edges between two grades of the face poset of the 4-cube, projected onto 3-space
    {
      //this is for grade 1; returns the vertex h*u as an array
      function vert1(u, h) {
        return [h * u[0], h * u[1], h * u[2]]
      }

      //this is for grade 2, returns the vertex u+h*v as an array
      function vert2(u, v, h) {
        return [
          u[0] + h * v[0],
          u[1] + h * v[1],
          u[2] + h * v[2],
          u[3] + h * v[3],
        ]
      }

      //this is for grade 3, returns the vertex (u+v)+h*w as an array
      function vert3(u, v, w, h) {
        return [
          u[0] + v[0] + h * w[0],
          u[1] + v[1] + h * w[1],
          u[2] + v[2] + h * w[2],
          u[3] + v[3] + h * w[3],
        ]
      }

      //this is for grade 4, returns the vector (u+v+w)+h*x
      function vert4(u, v, w, x, h) {
        return [
          u[0] + v[0] + w[0] + h * x[0],
          u[1] + v[1] + w[1] + h * x[1],
          u[2] + v[2] + w[2] + h * x[2],
          u[3] + v[3] + w[3] + h * x[3],
        ]
      }
    }

    //initialize grade
    grade = 0

    //set animation speed
    s = 5
  }

  //slide 12 -- part 3 title

  //slide 13 -- RGB space
  {
    rd = 0
    gr = 0
    bl = 0
    rgbTimer = 0
    rgbSpeed = 0.05

    rgb = false
    curve1 = false
    curve2 = false
    curve3 = false

    //conversions
    {
      //convert slider location (-7 to -4) with color value (0 to 255), and vice versa
      function sliderToRgb(x) {
        return round((x + 7) * (255 / 3), 0)
      }

      function rgbToSlider(x) {
        return x * (3 / 255) - 7
      }
    }
  }

  //slide 14 -- CMYK space
  {
    cy = 1
    mg = 1
    yw = 1
    bk = 1

    cmykTimer = 0
    cmykSpeed = 0.05

    cmyk = false
    cmykCurve1 = false
  }
}
//////////////////////////
//////////////////////////
//////////////////////////
//setup
{
  function preload() {
    font = loadFont("font.otf")
  }

  function setup() {
    //set aspect ratio and screen width
    r = 9 / 16
    w = windowWidth
    createCanvas(w, r * w, WEBGL)
    // createCanvas(windowWidth, windowHeight, WEBGL);

    frameRate(100)

    unit = width / 16

    //set edge length of cubes for slicing/projecting
    size = 2.5 * unit

    //setup for 3D projections
    {
      //initialize a_i vectors; they keep track of the u_i during rotation
      a1 = createVector(0, 0, 0)
      a2 = createVector(0, 0, 0)
      a3 = createVector(0, 0, 0)

      //initialize u_i
      u1 = createVector(size, 0, 0)
      u2 = createVector(0, size, 0)
      u3 = createVector(0, 0, size)
    }

    //setup for 3D slices
    {
      //constants for basis vectors
      a = sqrt(2)
      b1 = sqrt(3)
      //basis vectors
      e1 = createVector(size * (1 / a), size * (-1 / (a * b1)), size * (1 / b1))
      e2 = createVector(
        size * (-1 / a),
        size * (-1 / (a * b1)),
        size * (1 / b1)
      )
      e3 = createVector(size * 0, size * (a / b1), size * (1 / b1))
      origin = createVector(0, 0, 0)
    }

    //setup for 4D projections
    {
      //initialize a_i vectors; they keep track of the e_i during rotation
      a_1 = [0, 0, 0, 0]
      a_2 = [0, 0, 0, 0]
      a_3 = [0, 0, 0]
      a_4 = [0, 0, 0, 0]

      //unit vectors
      e_1 = [0, 0, 0, size]
      e_2 = [0, 0, size, 0]
      e_3 = [0, size, 0, 0]
      e_4 = [size, 0, 0, 0]
    }

    //setup for 4d slices
    {
      //constants for basis vectors
      a = (size * 1) / sqrt(2)
      b = (size * 1) / 2

      //initiate t, which will be controlled by up and down arrows
      t = 0
    }
  }
}

function draw() {
  //general
  {
    // if (keyIsPressed && keyCode === SHIFT) {
    //   orbitControl();
    // }

    if (counter == 13) {
      background(rd, gr, bl)
    }

    if (counter == 14) {
      background(
        cmykToRgb(cy, mg, yw, bk)[0],
        cmykToRgb(cy, mg, yw, bk)[1],
        cmykToRgb(cy, mg, yw, bk)[2]
      )
    }
    if (counter != 13 && counter != 14) {
      background("black")
    }

    // textFont("Arial Black");
    textFont(font)
  }

  //title slide
  if (counter == 0) {
    slide0 = new Slide0()
    slide0.show()
  }

  //part 1 title slide
  if (counter == 1) {
    slide1 = new Slide1()
    slide1.show()
  }

  //2D
  if (counter == 2) {
    slide2 = new Slide2()
    slide2.show()
  }

  //2D table
  if (counter == 3) {
    //table borders
    stroke("white")
    strokeWeight(unit / 50)
    line(-width / 2, -3.1 * unit, width / 2, -3.1 * unit)
    line(0, -height / 2, 0, height / 2)

    //headers
    textSize(unit)
    textAlign(LEFT)
    stroke("white")
    text("2D Space", -6.5 * unit, -3.5 * unit)
    text("Numbers", 1.5 * unit, -3.5 * unit)

    //bullets
    noFill()
    strokeWeight(unit / 50)
    stroke("white")

    circle(-width / 2 + 0.5 * unit, -2.3 * unit, 0.25 * unit)
    circle(-width / 2 + 0.5 * unit, -0.3 * unit, 0.25 * unit)
    circle(-width / 2 + 0.5 * unit, 1.7 * unit, 0.25 * unit)

    //rows
    textSize(unit / 2.5)
    noStroke()
    fill("white")

    //row 1
    text("point", -4 * unit, -1.15 * unit, 6 * unit, 2 * unit)

    if (bullets[0] === true) {
      circle(-width / 2 + 0.5 * unit, -2.3 * unit, 0.25 * unit)
      text(
        "a pair of numbers (x, y)",
        4 * unit,
        -1.15 * unit,
        6 * unit,
        2 * unit
      )
    }

    //row 2
    text("line", -4 * unit, 0.8 * unit, 6 * unit, 2 * unit)
    if (bullets[1] === true) {
      circle(-width / 2 + 0.5 * unit, -0.3 * unit, 0.25 * unit)

      text(
        "pairs (x, y) that fit a linear condition ax + by = c",
        4 * unit,
        0.8 * unit,
        6 * unit,
        2 * unit
      )
    }

    //row 3
    text("unit square", -4 * unit, 2.8 * unit, 6 * unit, 2 * unit)
    if (bullets[2] === true) {
      circle(-width / 2 + 0.5 * unit, 1.7 * unit, 0.25 * unit)

      text(
        "has vertices (0, 0)   (0, 1)   (1, 0)   (1, 1)",
        4 * unit,
        2.8 * unit,
        3 * unit,
        2 * unit
      )
    }
  }

  //3D
  if (counter == 4) {
    //buttons
    {
      rectMode(CENTER)
      textAlign(CENTER)

      //point button (buttons[0])
      //button shape
      noFill()
      strokeWeight(unit / 50)
      stroke("white")
      rect(-6 * unit, -3.75 * unit, 1.5 * unit, 0.75 * unit, 0.25 * unit)

      //button label
      fill("white")
      textSize(unit / 3)
      text("point", -6 * unit, -3.65 * unit)

      //show point coordinates when button on
      if (buttons[0] % 2 == 1) {
        //point coordinates
        fill("white")
        textSize(unit / 2)
        text(
          "( " +
            round(ptCoords[0], 1) +
            " , " +
            round(ptCoords[1], 1) +
            " , " +
            round(ptCoords[2], 1) +
            " )",
          -6 * unit,
          -2.65 * unit
        )
      }

      //plane button (buttons[1])
      //button shape
      noFill()
      stroke("white")
      strokeWeight(unit / 50)
      rect(-4 * unit, -3.75 * unit, 1.5 * unit, 0.75 * unit, 0.25 * unit)

      //button label
      fill("white")
      textSize(unit / 3)
      text("plane", -4 * unit, -3.65 * unit)

      //show equation when button on
      if (buttons[1] % 2 == 1) {
        fill("white")
        textSize(unit / 2)
        text(
          plCoefficients[0] +
            " x + " +
            plCoefficients[1] +
            " y + " +
            plCoefficients[2] +
            " z = " +
            plCoefficients[3],
          -4 * unit,
          -2 * unit
        )
      }

      //cube button (buttons[2])
      //button shape
      noFill()
      stroke("white")
      strokeWeight(unit / 50)
      rect(-2 * unit, -3.75 * unit, 1.5 * unit, 0.75 * unit, 0.25 * unit)

      //button label
      fill("white")
      textSize(unit / 3)
      text("cube", -2 * unit, -3.65 * unit)
    }

    //set the view of 3d space
    push()
    rotateX(PI / 3)
    rotateZ(PI / 6)
    scale(1.5, -1.5, 1.5)

    //draw the xyz-axes
    stroke("white")
    strokeWeight(unit / 50)
    line(-20 * unit, 0, 0, 20 * unit, 0, 0)
    line(0, -20 * unit, 0, 0, 20 * unit, 0)
    line(0, 0, -20 * unit, 0, 0, 20 * unit)

    //draw point
    if (buttons[0] % 2 == 1) {
      fill("dodgerblue")
      noStroke()
      push()
      translate(ptCoords[0] * unit, ptCoords[1] * unit, ptCoords[2] * unit)
      sphere(0.1 * unit)
      pop()
    }

    //draw plane
    {
      if (buttons[1] % 2 == 1) {
        A = plCoefficients[0]
        B = plCoefficients[1]
        C = plCoefficients[2]
        D = plCoefficients[3]
        r = sqrt(A ** 2 + B ** 2)
        s = sqrt(A ** 2 + B ** 2 + C ** 2)

        l = 4 * unit

        planeColor = color("lime")
        stroke("lime")
        planeColor.setAlpha(128)
        fill(planeColor)

        if ([A, B, C] != [0, 0, 0]) {
          push()
          if (D == 0) {
            if (A >= 0) {
              rotateZ(asin(B / r))
            }
            if (A < 0) {
              rotateZ(PI - asin(B / r))
            }
            rotateY(acos(C / s))
          }
          if (D != 0) {
            if (C != 0) {
              translate(0, 0, (unit * D) / C)
              if (A >= 0) {
                rotateZ(asin(B / r))
              }
              if (A < 0) {
                rotateZ(PI - asin(B / r))
              }
              rotateY(acos(C / s))
            }
            if (C == 0) {
              if (A >= 0) {
                rotateZ(asin(B / r))
              }
              if (A < 0) {
                rotateZ(PI - asin(B / r))
              }
              rotateY(acos(C / s))
              translate(0, 0, (unit * D) / r)
            }
          }
          beginShape()
          vertex(-l, -l, 0)
          vertex(-l, l, 0)
          vertex(l, l, 0)
          vertex(l, -l, 0)
          endShape(CLOSE)
          pop()
        }
      }
    }

    //draw cube
    if (buttons[2] % 3 != 0) {
      cubeColor = color("fuchsia")
      noStroke()
      cubeColor.setAlpha(128)
      fill(cubeColor)
      push()
      translate(unit / 2, unit / 2, unit / 2)
      box(unit)
      noFill()
      stroke("fuchsia")
      strokeWeight(unit / 20)
      box(unit)
      pop()
    }

    //vertices
    if (buttons[2] % 3 == 2) {
      fill("fuchsia")
      for (i = 0; i < 2; i++) {
        for (j = 0; j < 2; j++) {
          for (k = 0; k < 2; k++) {
            push()
            translate(i * unit, j * unit, k * unit)
            sphere(0.1 * unit)
            pop()

            textSize(0.2 * unit)
            textAlign(CENTER)
            push()
            rotateX(-PI / 2)
            translate(-0.5 * unit + i * 2 * unit, -j * unit, k * unit)
            fill("white")
            text("(" + i + "," + j + "," + k + ")", 0, 0)
            pop()
          }
        }
      }
    }
    pop()
  }

  //3D table
  if (counter == 5) {
    //table borders
    stroke("white")
    strokeWeight(0.02 * unit)
    line(-width / 2, -3.1 * unit, width / 2, -3.1 * unit)
    line(0, -height / 2, 0, height / 2)

    //headers
    textSize(unit)
    textAlign(LEFT)
    stroke("white")
    text("3D Space", -6.5 * unit, -3.5 * unit)
    text("Numbers", 1.5 * unit, -3.5 * unit)

    //bullets
    noFill()
    strokeWeight(unit / 50)
    stroke("white")

    circle(-width / 2 + 0.5 * unit, -2.3 * unit, 0.25 * unit)
    circle(-width / 2 + 0.5 * unit, -0.3 * unit, 0.25 * unit)
    circle(-width / 2 + 0.5 * unit, 1.7 * unit, 0.25 * unit)

    //rows
    textSize(unit / 2.5)
    noStroke()
    fill("white")

    //row 1
    text("point", -4 * unit, -1.15 * unit, 6 * unit, 2 * unit)

    if (bullets_3d[0] === true) {
      circle(-width / 2 + 0.5 * unit, -2.3 * unit, 0.25 * unit)
      text(
        "a triple of numbers (x, y, z)",
        4 * unit,
        -1.15 * unit,
        6 * unit,
        2 * unit
      )
    }

    //row 2
    text("plane", -4 * unit, 0.8 * unit, 6 * unit, 2 * unit)
    if (bullets_3d[1] === true) {
      circle(-width / 2 + 0.5 * unit, -0.3 * unit, 0.25 * unit)

      text(
        "triples (x, y, z) that fit a linear condition                      ax + by + cz = d",
        4 * unit,
        0.4 * unit,
        6 * unit,
        2 * unit
      )
    }

    //row 3
    text("unit cube", -4 * unit, 2.8 * unit, 6 * unit, 2 * unit)
    if (bullets_3d[2] === true) {
      circle(-width / 2 + 0.5 * unit, 1.7 * unit, 0.25 * unit)

      text(
        "has vertices      (0, 0, 0)   (0, 0, 1)   (0, 1, 0)   (0, 1, 1)  (1, 0, 0)   (1, 0, 1)   (1, 1, 0)   (1, 1, 1)",
        2.9 * unit,
        2.8 * unit,
        3.75 * unit,
        2.5 * unit
      )
    }
  }

  //general table
  if (counter == 6) {
    //fixed part of table
    //black background
    push()
    translate(0, 0, -0.1)
    fill("black")
    noStroke()
    rectMode(CORNERS)
    rect(-width / 2, -height / 2, -4 * unit, height / 2)
    pop()

    //borders
    stroke("white")
    strokeWeight(0.08 * unit)
    line(-width / 2, -3.1 * unit, width / 2, -3.1 * unit)
    line(-4 * unit, -height / 2, -4 * unit, height / 2)
    strokeWeight(0.04 * unit)
    line(-4 * unit, -2.5 * unit, width / 2, -2.5 * unit)

    //headers
    textAlign(CENTER)

    //columns
    textSize(unit)
    text("Space", -6 * unit, -3.5 * unit)
    text("Numbers", 2 * unit, -3.5 * unit)

    //rows
    textSize(0.4 * unit)
    text("point", -6 * unit, -1.5 * unit)
    text("plane", -6 * unit, 0.75 * unit)
    text("cube", -6 * unit, 3 * unit)

    //scrolling part of table
    push()
    translate(h, 0, -0.15)
    for (i = 0; i < 5; i++) {
      line(
        -4 * unit + i * 6 * unit,
        -3.1 * unit,
        -4 * unit + i * 6 * unit,
        5 * unit
      )
      dim = i + 2
      text(dim + "D", -unit + i * 6 * unit, -2.65 * unit)
    }
    //2D column
    text("(x, y)", -unit, -1.5 * unit)
    text("ax + by = c", -unit, 0.75 * unit)
    text(
      "(0, 0)    (0, 1)    (1, 0)    (1, 1)",
      -unit,
      5 * unit,
      3 * unit,
      4 * unit
    )

    //3D column
    text("(x, y, z)", 5 * unit, -1.5 * unit)
    text("ax + by + cz = d", 5 * unit, 0.75 * unit)
    text(
      "(0, 0, 0)    (0, 0, 1)    (0, 1, 0)    (0, 1, 1)    (1, 0, 0)    (1, 0, 1)    (1, 1, 0)    (1, 1, 1)",
      5 * unit,
      4.5 * unit,
      4 * unit,
      4 * unit
    )

    //4D column
    text("(x, y, z, w)", 11 * unit, -1.5 * unit)
    text("ax + by + cz + dw = e", 11 * unit, 0.75 * unit)
    textSize(0.3 * unit)
    text(
      "(0, 0, 0, 0)    (0, 0, 0, 1)    (0, 0, 1, 0)    (0, 0, 1, 1)    (0, 1, 0, 0)    (0, 1, 0, 1)    (0, 1, 1, 0)    (0, 1, 1, 1)    (1, 0, 0, 0)    (1, 0, 0, 1)    (1, 0, 1, 0)    (1, 0, 1, 1)    (1, 1, 0, 0)    (1, 1, 0, 1)    (1, 1, 1, 0)    (1, 1, 1, 1)",
      11 * unit,
      3.7 * unit,
      3.8 * unit,
      4 * unit
    )

    //5D column
    //point
    textSize(0.4 * unit)
    text("(", 15.2 * unit, -1.5 * unit)
    text(")", 18.7 * unit, -1.5 * unit)

    for (i = 0; i < 5; i++) {
      textSize(0.4 * unit)
      text("x", 15.5 * unit + i * 0.7 * unit, -1.5 * unit)
      if (i < 4) {
        text(",", 15.9 * unit + i * 0.7 * unit, -1.5 * unit)
      }
      textSize(0.25 * unit)
      text(i + 1, 15.7 * unit + i * 0.7 * unit, -1.4 * unit)
    }

    //plane
    for (i = 0; i < 5; i++) {
      textSize(0.35 * unit)
      text("x", 14.6 * unit + i * 1.1 * unit, 0.75 * unit)
      text("a", 14.2 * unit + i * 1.1 * unit, 0.75 * unit)

      if (i < 4) {
        text("+", 15.0 * unit + i * 1.1 * unit, 0.75 * unit)
      }

      textSize(0.2 * unit)
      text(i + 1, 14.8 * unit + i * 1.1 * unit, 0.85 * unit)
      text(i + 1, 14.4 * unit + i * 1.1 * unit, 0.85 * unit)
    }

    textSize(0.35 * unit)
    text("= a", 19.5 * unit, 0.75 * unit)
    textSize(0.2 * unit)
    text(6, 19.8 * unit, 0.85 * unit)

    text(
      "(0, 0, 0, 0, 0)    (0, 0, 0, 0, 1)    (0, 0, 0, 1, 0)    (0, 0, 0, 1, 1)    (0, 0, 1, 0, 0)    (0, 0, 1, 0, 1)    (0, 0, 1, 1, 0)    (0, 0, 1, 1, 1)    (0, 1, 0, 0, 0)    (0, 1, 0, 0, 1)    (0, 1, 0, 1, 0)    (0, 1, 0, 1, 1)    (0, 1, 1, 0, 0)    (0, 1, 1, 0, 1)    (0, 1, 1, 1, 0)    (0, 1, 1, 1, 1)    (1, 0, 0, 0, 0)    (1, 0, 0, 0, 1)    (1, 0, 0, 1, 0)    (1, 0, 0, 1, 1)    (1, 0, 1, 0, 0)    (1, 0, 1, 0, 1)    (1, 0, 1, 1, 0)    (1, 0, 1, 1, 1)    (1, 1, 0, 0, 0)    (1, 1, 0, 0, 1)    (1, 1, 0, 1, 0)    (1, 1, 0, 1, 1)    (1, 1, 1, 0, 0)    (1, 1, 1, 0, 1)    (1, 1, 1, 1, 0)    (1, 1, 1, 1, 1)",
      17 * unit,
      3.7 * unit,
      4.7 * unit,
      4 * unit
    )

    pop()
  }

  //part 2 title slide
  if (counter == 7) {
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

  //projecting 3D to 2D
  if (counter == 8) {
    //some variables
    {
      //rotated unit vectors
      d1 = Rx(xTheta, Ry(yTheta, Rz(zTheta, u1)))
      d2 = Rx(xTheta, Ry(yTheta, Rz(zTheta, u2)))
      d3 = Rx(xTheta, Ry(yTheta, Rz(zTheta, u3)))

      //cube vertices
      v0 = createVector(0, 0, 0)
      v1 = d1
      v2 = vecSum(d1, d2)
      v3 = d2
      v4 = d3
      v5 = vecSum(d1, d3)
      v6 = vecSum(vecSum(d1, d2), d3)
      v7 = vecSum(d2, d3)
    }

    //buttons
    {
      rectMode(CENTER)
      textAlign(CENTER)

      //shape
      stroke("white")
      strokeWeight(0.02 * unit)

      noFill()
      if (Xbutton == true) {
        fill("white")
      }
      rect(-6 * unit, 1.25 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)
      noFill()
      if (Ybutton == true) {
        fill("white")
      }
      rect(-6 * unit, 2.25 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)
      noFill()
      if (Zbutton == true) {
        fill("white")
      }
      rect(-6 * unit, 3.25 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

      //label
      textSize(0.35 * unit)
      fill("white")
      if (Xbutton == true) {
        fill("black")
      }
      text("rotate X", -6 * unit, 1.35 * unit)
      fill("white")
      if (Ybutton == true) {
        fill("black")
      }
      text("rotate Y", -6 * unit, 2.35 * unit)
      fill("white")
      if (Zbutton == true) {
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
        vertex(v0.x, v0.y, v0.z)
        vertex(v1.x, v1.y, v1.z)
        vertex(v2.x, v2.y, v2.z)
        vertex(v3.x, v3.y, v3.z)
        endShape(CLOSE)

        //face 0154
        beginShape()
        vertex(v0.x, v0.y, v0.z)
        vertex(v1.x, v1.y, v1.z)
        vertex(v5.x, v5.y, v5.z)
        vertex(v4.x, v4.y, v4.z)
        endShape(CLOSE)

        //face 0374
        beginShape()
        vertex(v0.x, v0.y, v0.z)
        vertex(v3.x, v3.y, v3.z)
        vertex(v7.x, v7.y, v7.z)
        vertex(v4.x, v4.y, v4.z)
        endShape(CLOSE)

        //face 1265
        beginShape()
        vertex(v1.x, v1.y, v1.z)
        vertex(v2.x, v2.y, v2.z)
        vertex(v6.x, v6.y, v6.z)
        vertex(v5.x, v5.y, v5.z)
        endShape(CLOSE)

        //face 2376
        beginShape()
        vertex(v2.x, v2.y, v2.z)
        vertex(v3.x, v3.y, v3.z)
        vertex(v7.x, v7.y, v7.z)
        vertex(v6.x, v6.y, v6.z)
        endShape(CLOSE)

        //face 4567
        beginShape()
        vertex(v4.x, v4.y, v4.z)
        vertex(v5.x, v5.y, v5.z)
        vertex(v6.x, v6.y, v6.z)
        vertex(v7.x, v7.y, v7.z)
        endShape(CLOSE)
      }

      //projection
      {
        stroke("lime")
        noFill()

        //face 0123
        beginShape()
        vertex(v0.x, v0.y)
        vertex(v1.x, v1.y)
        vertex(v2.x, v2.y)
        vertex(v3.x, v3.y)
        endShape(CLOSE)

        //face 0154
        beginShape()
        vertex(v0.x, v0.y)
        vertex(v1.x, v1.y)
        vertex(v5.x, v5.y)
        vertex(v4.x, v4.y)
        endShape(CLOSE)

        //face 0374
        beginShape()
        vertex(v0.x, v0.y)
        vertex(v3.x, v3.y)
        vertex(v7.x, v7.y)
        vertex(v4.x, v4.y)
        endShape(CLOSE)

        //face 1265
        beginShape()
        vertex(v1.x, v1.y)
        vertex(v2.x, v2.y)
        vertex(v6.x, v6.y)
        vertex(v5.x, v5.y)
        endShape(CLOSE)

        //face 2376
        beginShape()
        vertex(v2.x, v2.y)
        vertex(v3.x, v3.y)
        vertex(v7.x, v7.y)
        vertex(v6.x, v6.y)
        endShape(CLOSE)

        //face 4567
        beginShape()
        vertex(v4.x, v4.y)
        vertex(v5.x, v5.y)
        vertex(v6.x, v6.y)
        vertex(v7.x, v7.y)
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
      vertex(v0.x, v0.y)
      vertex(v1.x, v1.y)
      vertex(v2.x, v2.y)
      vertex(v3.x, v3.y)
      endShape(CLOSE)

      //face 0154
      beginShape()
      vertex(v0.x, v0.y)
      vertex(v1.x, v1.y)
      vertex(v5.x, v5.y)
      vertex(v4.x, v4.y)
      endShape(CLOSE)

      //face 0374
      beginShape()
      vertex(v0.x, v0.y)
      vertex(v3.x, v3.y)
      vertex(v7.x, v7.y)
      vertex(v4.x, v4.y)
      endShape(CLOSE)

      //face 1265
      beginShape()
      vertex(v1.x, v1.y)
      vertex(v2.x, v2.y)
      vertex(v6.x, v6.y)
      vertex(v5.x, v5.y)
      endShape(CLOSE)

      //face 2376
      beginShape()
      vertex(v2.x, v2.y)
      vertex(v3.x, v3.y)
      vertex(v7.x, v7.y)
      vertex(v6.x, v6.y)
      endShape(CLOSE)

      //face 4567
      beginShape()
      vertex(v4.x, v4.y)
      vertex(v5.x, v5.y)
      vertex(v6.x, v6.y)
      vertex(v7.x, v7.y)
      endShape(CLOSE)

      pop()
    }
  }

  //projecting 4D to 3D
  if (counter == 9) {
    //buttons
    {
      rectMode(CENTER)
      textAlign(CENTER)

      //shape
      stroke("white")
      strokeWeight(0.02 * unit)

      noFill()
      if (xyButton == true) {
        fill("white")
      }
      rect(-6 * unit, -3.125 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

      noFill()
      if (xzButton == true) {
        fill("white")
      }
      rect(-6 * unit, -1.875 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

      noFill()
      if (xwButton == true) {
        fill("white")
      }
      rect(-6 * unit, -0.625 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

      noFill()
      if (yzButton == true) {
        fill("white")
      }
      rect(-6 * unit, 0.625 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

      noFill()
      if (ywButton == true) {
        fill("white")
      }
      rect(-6 * unit, 1.875 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

      noFill()
      if (zwButton == true) {
        fill("white")
      }
      rect(-6 * unit, 3.125 * unit, 2 * unit, 0.75 * unit, 0.25 * unit)

      //labels
      textSize(0.35 * unit)
      fill("white")
      if (xyButton == true) {
        fill("black")
      }
      text("rotate XY", -6 * unit, -3.025 * unit)

      fill("white")
      if (xzButton == true) {
        fill("black")
      }
      text("rotate XZ", -6 * unit, -1.775 * unit)

      fill("white")
      if (xwButton == true) {
        fill("black")
      }
      text("rotate XW", -6 * unit, -0.525 * unit)

      fill("white")
      if (yzButton == true) {
        fill("black")
      }
      text("rotate YZ", -6 * unit, 0.725 * unit)

      fill("white")
      if (ywButton == true) {
        fill("black")
      }
      text("rotate YW", -6 * unit, 1.975 * unit)

      fill("white")
      if (zwButton == true) {
        fill("black")
      }
      text("rotate ZW", -6 * unit, 3.225 * unit)
    }

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
    {
      d_1 = R_xy(
        xyTheta,
        R_xz(
          xzTheta,
          R_xw(xwTheta, R_yz(yzTheta, R_yw(ywTheta, R_zw(zwTheta, e_1))))
        )
      )

      d_2 = R_xy(
        xyTheta,
        R_xz(
          xzTheta,
          R_xw(xwTheta, R_yz(yzTheta, R_yw(ywTheta, R_zw(zwTheta, e_2))))
        )
      )

      d_3 = R_xy(
        xyTheta,
        R_xz(
          xzTheta,
          R_xw(xwTheta, R_yz(yzTheta, R_yw(ywTheta, R_zw(zwTheta, e_3))))
        )
      )

      d_4 = R_xy(
        xyTheta,
        R_xz(
          xzTheta,
          R_xw(xwTheta, R_yz(yzTheta, R_yw(ywTheta, R_zw(zwTheta, e_4))))
        )
      )
    }

    //cube vertices
    {
      //grade 0
      v_0000 = [0, 0, 0, 0]
      grade_0 = [v_0000]

      //grade 1
      v_0001 = d_1
      v_0010 = d_2
      v_0100 = d_3
      v_1000 = d_4
      grade_1 = [v_0001, v_0010, v_0100, v_1000]

      //grade 2
      v_0011 = arrSum(d_1, d_2)
      v_0101 = arrSum(d_1, d_3)
      v_0110 = arrSum(d_2, d_3)
      v_1001 = arrSum(d_1, d_4)
      v_1010 = arrSum(d_2, d_4)
      v_1100 = arrSum(d_3, d_4)
      grade_2 = [v_0011, v_0101, v_0110, v_1001, v_1010, v_1100]

      //grade 3
      v_0111 = arrSum(arrSum(d_1, d_2), d_3)
      v_1011 = arrSum(arrSum(d_1, d_2), d_4)
      v_1101 = arrSum(arrSum(d_1, d_3), d_4)
      v_1110 = arrSum(arrSum(d_2, d_3), d_4)
      grade_3 = [v_0111, v_1011, v_1101, v_1110]

      //grade 4
      v_1111 = arrSum(arrSum(arrSum(d_1, d_2), d_3), d_4)
      grade_4 = [v_1111]
    }

    grades = [grade_0, grade_1, grade_2, grade_3, grade_4]

    strokeWeight(0.05 * unit)
    stroke("lime")

    for (i = 0; i < grades.length - 1; i++) {
      for (j = 0; j < grades[i].length; j++) {
        for (k = 0; k < grades[i + 1].length; k++) {
          if (arrComp(grs[i][j], grs[i + 1][k]) == true) {
            edge(grades[i][j], grades[i + 1][k])
          }
        }
      }
    }

    pop()
  }

  //slicing 3D with 2D
  if (counter == 10) {
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
        sliceColor = color("lime")
        sliceColor.setAlpha(128)
        fill(sliceColor)
        h = (3.0 * cubeSliceTimer) / (size * b1)

        //translate these shapes one pixel above the xy-plane so they show up better
        push()
        translate(0, 0, 1)

        //the bottom third of the cube
        if (h > 0 && h <= 1) {
          beginShape()
          vertex(h * e1.x, h * e1.y, 0)
          vertex(h * e2.x, h * e2.y, 0)
          vertex(h * e3.x, h * e3.y, 0)
          endShape(CLOSE)
        }
        //the middle third of the cube
        if (h > 1 && h <= 2) {
          beginShape()
          vertex(e1.x + (h - 1) * e3.x, e1.y + (h - 1) * e3.y, 0)
          vertex(e1.x + (h - 1) * e2.x, e1.y + (h - 1) * e2.y, 0)
          vertex(e2.x + (h - 1) * e1.x, e2.y + (h - 1) * e1.y, 0)
          vertex(e2.x + (h - 1) * e3.x, e2.y + (h - 1) * e3.y, 0)
          vertex(e3.x + (h - 1) * e2.x, e3.y + (h - 1) * e2.y, 0)
          vertex(e3.x + (h - 1) * e1.x, e3.y + (h - 1) * e1.y, 0)
          endShape(CLOSE)
        }
        //the top third of the cube
        if (h > 2 && h <= 3) {
          beginShape()
          vertex(e1.x + e2.x + (h - 2) * e3.x, e1.y + e2.y + (h - 2) * e3.y, 0)
          vertex(e1.x + e3.x + (h - 2) * e2.x, e1.y + e3.y + (h - 2) * e2.y, 0)
          vertex(e2.x + e3.x + (h - 2) * e1.x, e2.y + e3.y + (h - 2) * e1.y, 0)
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
        vertex(0, 0, 0 - cubeSliceTimer)
        vertex(e1.x, e1.y, e1.z - cubeSliceTimer)
        vertex(
          vecSum(e1, e2).x,
          vecSum(e1, e2).y,
          vecSum(e1, e2).z - cubeSliceTimer
        )
        vertex(e2.x, e2.y, e2.z - cubeSliceTimer)
        endShape(CLOSE)
      }

      //face2(0,1,3)
      {
        beginShape()
        vertex(0, 0, 0 - cubeSliceTimer)
        vertex(e1.x, e1.y, e1.z - cubeSliceTimer)
        vertex(
          vecSum(e1, e3).x,
          vecSum(e1, e3).y,
          vecSum(e1, e3).z - cubeSliceTimer
        )
        vertex(e3.x, e3.y, e3.z - cubeSliceTimer)
        endShape(CLOSE)
      }

      //face3(0,2,3)
      {
        beginShape()
        vertex(0, 0, 0 - cubeSliceTimer)
        vertex(e2.x, e2.y, e2.z - cubeSliceTimer)
        vertex(
          vecSum(e2, e3).x,
          vecSum(e2, e3).y,
          vecSum(e2, e3).z - cubeSliceTimer
        )
        vertex(e3.x, e3.y, e3.z - cubeSliceTimer)
        endShape(CLOSE)
      }

      //face4(1,2,3)
      {
        beginShape()
        vertex(e1.x, e1.y, e1.z - cubeSliceTimer)
        vertex(
          vecSum(e1, e2).x,
          vecSum(e1, e2).y,
          vecSum(e1, e2).z - cubeSliceTimer
        )
        vertex(
          vecSum(e1, vecSum(e2, e3)).x,
          vecSum(e1, vecSum(e2, e3)).y,
          vecSum(e1, vecSum(e2, e3)).z - cubeSliceTimer
        )
        vertex(
          vecSum(e1, e3).x,
          vecSum(e1, e3).y,
          vecSum(e1, e3).z - cubeSliceTimer
        )
        endShape(CLOSE)
      }

      //face5(3,1,2)
      {
        beginShape()
        vertex(e3.x, e3.y, e3.z - cubeSliceTimer)
        vertex(
          vecSum(e3, e2).x,
          vecSum(e3, e2).y,
          vecSum(e3, e2).z - cubeSliceTimer
        )
        vertex(
          vecSum(e1, vecSum(e2, e3)).x,
          vecSum(e1, vecSum(e2, e3)).y,
          vecSum(e1, vecSum(e2, e3)).z - cubeSliceTimer
        )
        vertex(
          vecSum(e1, e3).x,
          vecSum(e1, e3).y,
          vecSum(e1, e3).z - cubeSliceTimer
        )
        endShape(CLOSE)
      }

      //face6(2,1,3)
      {
        beginShape()
        vertex(e2.x, e2.y, e2.z - cubeSliceTimer)
        vertex(
          vecSum(e3, e2).x,
          vecSum(e3, e2).y,
          vecSum(e3, e2).z - cubeSliceTimer
        )
        vertex(
          vecSum(e1, vecSum(e2, e3)).x,
          vecSum(e1, vecSum(e2, e3)).y,
          vecSum(e1, vecSum(e2, e3)).z - cubeSliceTimer
        )
        vertex(
          vecSum(e1, e2).x,
          vecSum(e1, e2).y,
          vecSum(e1, e2).z - cubeSliceTimer
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
      sliceColor = color("lime")
      sliceColor.setAlpha(128)
      fill(sliceColor)

      if (h > 0 && h <= 1) {
        beginShape()
        vertex(h * e1.x, h * e1.y, 0)
        vertex(h * e2.x, h * e2.y, 0)
        vertex(h * e3.x, h * e3.y, 0)
        endShape(CLOSE)
      }
      if (h > 1 && h <= 2) {
        beginShape()
        vertex(e1.x + (h - 1) * e3.x, e1.y + (h - 1) * e3.y, 0)
        vertex(e1.x + (h - 1) * e2.x, e1.y + (h - 1) * e2.y, 0)
        vertex(e2.x + (h - 1) * e1.x, e2.y + (h - 1) * e1.y, 0)
        vertex(e2.x + (h - 1) * e3.x, e2.y + (h - 1) * e3.y, 0)
        vertex(e3.x + (h - 1) * e2.x, e3.y + (h - 1) * e2.y, 0)
        vertex(e3.x + (h - 1) * e1.x, e3.y + (h - 1) * e1.y, 0)
        endShape(CLOSE)
      }
      if (h > 2 && h <= 3) {
        beginShape()
        vertex(e1.x + e2.x + (h - 2) * e3.x, e1.y + e2.y + (h - 2) * e3.y, 0)
        vertex(e1.x + e3.x + (h - 2) * e2.x, e1.y + e3.y + (h - 2) * e2.y, 0)
        vertex(e2.x + e3.x + (h - 2) * e1.x, e2.y + e3.y + (h - 2) * e1.y, 0)
        endShape(CLOSE)
      }
      pop()
    }
  }

  //slicing 4D with 3D
  if (counter == 11) {
    //set h and grade for each interval of t-values
    if (t >= 0 && t < 100) {
      h = t / 100
      grade = 1
    }

    if (t >= 100 && t < 200) {
      h = (t - 100) / 100
      grade = 2
    }

    if (t >= 200 && t < 300) {
      h = (t - 200) / 100
      grade = 3
    }

    if (t >= 300 && t <= 400) {
      h = (t - 300) / 100
      grade = 4
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

    //define the basis vectors
    f1 = [a, 0, -b]
    f2 = [0, a, b]
    f3 = [-a, 0, -b]
    f4 = [0, -a, b]

    basis = [f1, f2, f3, f4]

    //create indices omitting one each of 0, 1, 2, 3, to call when drawing slices.
    indices = [
      [1, 2, 3],
      [0, 2, 3],
      [0, 1, 3],
      [0, 1, 2],
    ]

    fill("aqua")
    stroke("magenta")
    strokeWeight(unit / 20)

    if (grade == 1) {
      for (i = 0; i < 4; i++) {
        beginShape()
        for (j = 0; j < 3; j++) {
          vertex(
            vert1(basis[indices[i][j]], h)[0],
            vert1(basis[indices[i][j]], h)[1],
            vert1(basis[indices[i][j]], h)[2]
          )
        }
        endShape(CLOSE)
      }
    }

    if (grade == 2) {
      //triangles
      for (i = 0; i < 4; i++) {
        beginShape()
        for (j = 0; j < 3; j++) {
          vertex(
            vert2(basis[i], basis[indices[i][j]], h)[0],
            vert2(basis[i], basis[indices[i][j]], h)[1],
            vert2(basis[i], basis[indices[i][j]], h)[2]
          )
        }
        endShape(CLOSE)
      }
      //hexagons
      for (i = 0; i < 4; i++) {
        beginShape()
        for (j = 0; j < 3; j++) {
          vertex(
            vert2(basis[indices[i][j]], basis[indices[i][(j + 2) % 3]], h)[0],
            vert2(basis[indices[i][j]], basis[indices[i][(j + 2) % 3]], h)[1],
            vert2(basis[indices[i][j]], basis[indices[i][(j + 2) % 3]], h)[2]
          )
          vertex(
            vert2(basis[indices[i][j]], basis[indices[i][(j + 4) % 3]], h)[0],
            vert2(basis[indices[i][j]], basis[indices[i][(j + 4) % 3]], h)[1],
            vert2(basis[indices[i][j]], basis[indices[i][(j + 4) % 3]], h)[2]
          )
        }
        endShape(CLOSE)
      }
    }

    if (grade == 3) {
      //triangles
      for (i = 0; i < 4; i++) {
        beginShape()
        for (j = 0; j < 3; j++) {
          vertex(
            vert3(
              basis[indices[i][(j + 1) % 3]],
              basis[indices[i][(j + 2) % 3]],
              basis[indices[i][j]],
              h
            )[0],
            vert3(
              basis[indices[i][(j + 1) % 3]],
              basis[indices[i][(j + 2) % 3]],
              basis[indices[i][j]],
              h
            )[1],
            vert3(
              basis[indices[i][(j + 1) % 3]],
              basis[indices[i][(j + 2) % 3]],
              basis[indices[i][j]],
              h
            )[2]
          )
        }
        endShape(CLOSE)
      }
      //hexagons
      for (i = 0; i < 4; i++) {
        beginShape()
        for (j = 0; j < 3; j++) {
          vertex(
            vert3(
              basis[i],
              basis[indices[i][(2 * j) % 3]],
              basis[indices[i][(2 * j + 1) % 3]],
              h
            )[0],
            vert3(
              basis[i],
              basis[indices[i][(2 * j) % 3]],
              basis[indices[i][(2 * j + 1) % 3]],
              h
            )[1],
            vert3(
              basis[i],
              basis[indices[i][(2 * j) % 3]],
              basis[indices[i][(2 * j + 1) % 3]],
              h
            )[2]
          )
          vertex(
            vert3(
              basis[i],
              basis[indices[i][(2 * j) % 3]],
              basis[indices[i][(2 * j + 2) % 3]],
              h
            )[0],
            vert3(
              basis[i],
              basis[indices[i][(2 * j) % 3]],
              basis[indices[i][(2 * j + 2) % 3]],
              h
            )[1],
            vert3(
              basis[i],
              basis[indices[i][(2 * j) % 3]],
              basis[indices[i][(2 * j + 2) % 3]],
              h
            )[2]
          )
        }
        endShape(CLOSE)
      }
    }

    if (grade == 4) {
      for (i = 0; i < 4; i++) {
        beginShape()
        for (j = 0; j < 3; j++) {
          vertex(
            vert4(
              basis[(indices[i][j] + 1) % 4],
              basis[(indices[i][j] + 2) % 4],
              basis[(indices[i][j] + 3) % 4],
              basis[indices[i][j]],
              h
            )[0],
            vert4(
              basis[(indices[i][j] + 1) % 4],
              basis[(indices[i][j] + 2) % 4],
              basis[(indices[i][j] + 3) % 4],
              basis[indices[i][j]],
              h
            )[1],
            vert4(
              basis[(indices[i][j] + 1) % 4],
              basis[(indices[i][j] + 2) % 4],
              basis[(indices[i][j] + 3) % 4],
              basis[indices[i][j]],
              h
            )[2]
          )
        }
        endShape(CLOSE)
      }
    }

    pop()
  }

  //part 3 title slide
  if (counter == 12) {
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

  //RGB space
  if (counter == 13) {
    if (rgbTimer < 0) {
      rgbTimer = 0
    }

    //buttons
    {
      rectMode(CENTER)
      textAlign(CENTER)
      textSize(unit / 3)

      //rgb space button
      //button shape
      noFill()
      if ((rd + gr + bl) / 3 < 128) {
        stroke("white")
      }
      if ((rd + gr + bl) / 3 >= 128) {
        stroke("black")
      }
      strokeWeight(unit / 50)
      rect(-4.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit)

      //button label
      if ((rd + gr + bl) / 3 < 128) {
        fill("white")
      }
      if ((rd + gr + bl) / 3 >= 128) {
        fill("black")
      }
      text("RGB space", -4.5 * unit, 3.1 * unit)

      //curve 1 button
      //button shape
      noFill()
      if ((rd + gr + bl) / 3 < 128) {
        stroke("white")
      }
      if ((rd + gr + bl) / 3 >= 128) {
        stroke("black")
      }
      strokeWeight(unit / 50)
      rect(-1.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit)

      //button label
      if ((rd + gr + bl) / 3 < 128) {
        fill("white")
      }
      if ((rd + gr + bl) / 3 >= 128) {
        fill("black")
      }
      text("curve 1", -1.5 * unit, 3.1 * unit)

      //curve 2 button
      //button shape
      noFill()
      if ((rd + gr + bl) / 3 < 128) {
        stroke("white")
      }
      if ((rd + gr + bl) / 3 >= 128) {
        stroke("black")
      }
      strokeWeight(unit / 50)
      rect(1.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit)

      //button label
      if ((rd + gr + bl) / 3 < 128) {
        fill("white")
      }
      if ((rd + gr + bl) / 3 >= 128) {
        fill("black")
      }
      text("curve 2", 1.5 * unit, 3.1 * unit)

      //curve 3 button
      //button shape
      noFill()
      if ((rd + gr + bl) / 3 < 128) {
        stroke("white")
      }
      if ((rd + gr + bl) / 3 >= 128) {
        stroke("black")
      }
      strokeWeight(unit / 50)
      rect(4.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit)

      //button label
      if ((rd + gr + bl) / 3 < 128) {
        fill("white")
      }
      if ((rd + gr + bl) / 3 >= 128) {
        fill("black")
      }
      text("curve 3", 4.5 * unit, 3.1 * unit)
    }

    //sliders
    {
      rectMode(CENTER)
      stroke(255)
      strokeWeight(0.05 * unit)

      //bars
      fill(255, 0, 0)
      rect(-5.5 * unit, -1 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      fill(0, 255, 0)
      rect(-5.5 * unit, 0 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      fill(0, 0, 255)
      rect(-5.5 * unit, 1 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      //handles
      push()
      translate(0, 0, 1)
      strokeWeight(0.025 * unit)
      fill(128)
      rect(
        rgbToSlider(rd) * unit,
        -1 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      rect(rgbToSlider(gr) * unit, 0 * unit, 0.2 * unit, 0.5 * unit, 0.1 * unit)
      rect(rgbToSlider(bl) * unit, 1 * unit, 0.2 * unit, 0.5 * unit, 0.1 * unit)
      pop()

      //text
      textSize(0.5 * unit)
      if ((rd + gr + bl) / 3 < 128) {
        fill("white")
      }
      if ((rd + gr + bl) / 3 >= 128) {
        fill("black")
      }
      textAlign(LEFT)
      text(round(rd, 0), -3.5 * unit, -0.8 * unit)
      text(round(gr, 0), -3.5 * unit, 0.2 * unit)
      text(round(bl, 0), -3.5 * unit, 1.2 * unit)
    }

    //controls
    {
      if (curve1 == false && curve2 == false && curve3 == false) {
        //red
        {
          if (
            dist(
              rgbToSlider(rd),
              1,
              mouseToWorld(mouseX, mouseY)[0],
              mouseToWorld(mouseX, mouseY)[1]
            ) < 0.5 &&
            mouseIsPressed
          ) {
            if (mouseToWorld(mouseX, mouseY)[0] < -7) {
              rd = 0
            }
            if (mouseToWorld(mouseX, mouseY)[0] > -4) {
              rd = 255
            }
            if (
              mouseToWorld(mouseX, mouseY)[0] >= -7 &&
              mouseToWorld(mouseX, mouseY)[0] <= -4
            ) {
              rd = sliderToRgb(mouseToWorld(mouseX, mouseY)[0])
            }
          }
        }

        //green
        {
          if (
            dist(
              rgbToSlider(gr),
              0,
              mouseToWorld(mouseX, mouseY)[0],
              mouseToWorld(mouseX, mouseY)[1]
            ) < 0.5 &&
            mouseIsPressed
          ) {
            if (mouseToWorld(mouseX, mouseY)[0] < -7) {
              gr = 0
            }
            if (mouseToWorld(mouseX, mouseY)[0] > -4) {
              gr = 255
            }
            if (
              mouseToWorld(mouseX, mouseY)[0] >= -7 &&
              mouseToWorld(mouseX, mouseY)[0] <= -4
            ) {
              gr = sliderToRgb(mouseToWorld(mouseX, mouseY)[0])
            }
          }
        }

        //blue
        {
          if (
            dist(
              rgbToSlider(bl),
              -1,
              mouseToWorld(mouseX, mouseY)[0],
              mouseToWorld(mouseX, mouseY)[1]
            ) < 0.5 &&
            mouseIsPressed
          ) {
            if (mouseToWorld(mouseX, mouseY)[0] < -7) {
              bl = 0
            }
            if (mouseToWorld(mouseX, mouseY)[0] > -4) {
              bl = 255
            }
            if (
              mouseToWorld(mouseX, mouseY)[0] >= -7 &&
              mouseToWorld(mouseX, mouseY)[0] <= -4
            ) {
              bl = sliderToRgb(mouseToWorld(mouseX, mouseY)[0])
            }
          }
        }
      }
    }

    //graph
    {
      push()
      rotateX(PI / 3)
      rotateZ(PI / 6)
      translate(1 * unit, 1 * unit, 0)
      scale(2.5, -2.5, 2.5)

      if (rgb == true) {
        //cube
        {
          if ((rd + gr + bl) / 3 < 128) {
            stroke("white")
          }
          if ((rd + gr + bl) / 3 >= 128) {
            stroke("black")
          }
          strokeWeight(0.04 * unit)
          //front
          line(0, 0, 0, 0, 0, unit)
          line(0, 0, 0, unit, 0, 0)
          line(unit, 0, 0, unit, 0, unit)
          line(unit, 0, unit, 0, 0, unit)

          //back
          line(0, unit, 0, 0, unit, unit)
          line(0, unit, 0, unit, unit, 0)
          line(unit, unit, 0, unit, unit, unit)
          line(unit, unit, unit, 0, unit, unit)

          //connectors
          line(unit, 0, 0, unit, unit, 0)
          line(unit, 0, unit, unit, unit, unit)
          line(0, 0, unit, 0, unit, unit)
          line(0, 0, 0, 0, unit, 0)

          if (curve1 == false && curve2 == false && curve3 == false) {
            push()
            translate((rd / 255) * unit, (gr / 255) * unit, (bl / 255) * unit)
            sphere(0.05 * unit)
            pop()
          }
        }
      }

      if (curve1 == true) {
        for (p = 0; p < 1; p += 0.001) {
          point(p * unit, p * unit, p * unit)
        }
        push()
        translate(rgbTimer * unit, rgbTimer * unit, rgbTimer * unit)
        sphere(0.05 * unit)
        pop()
        rd = rgbTimer * 255
        gr = rgbTimer * 255
        bl = rgbTimer * 255
      }

      if (curve2 == true) {
        for (p = 0; p < 1; p += 0.001) {
          point(p * unit, p ** 2 * unit, p ** 3 * unit)
        }
        push()
        translate(rgbTimer * unit, rgbTimer ** 2 * unit, rgbTimer ** 3 * unit)
        sphere(0.05 * unit)
        pop()

        rd = rgbTimer * 255
        gr = rgbTimer ** 2 * 255
        bl = rgbTimer ** 3 * 255
      }

      if (curve3 == true) {
        for (p = 0; p < 1; p += 0.001) {
          point(
            p * unit,
            unit * ((sin(p * 2 * PI) + 1) / 2),
            unit * ((cos(p * 2 * PI) + 1) / 2)
          )
        }
        push()
        translate(
          rgbTimer * unit,
          unit * ((sin(rgbTimer * 2 * PI) + 1) / 2),
          unit * ((cos(rgbTimer * 2 * PI) + 1) / 2)
        )
        sphere(0.05 * unit)
        pop()

        gr = ((sin(rgbTimer * 2 * PI) + 1) / 2) * 255
        bl = ((cos(rgbTimer * 2 * PI) + 1) / 2) * 255
        rd = rgbTimer * 255
      }
      pop()
    }
  }

  //CMYK space
  if (counter == 14) {
    // //buttons
    // {
    //   rectMode(CENTER);
    //   textAlign(CENTER);
    //   textSize(unit / 3);

    //   //cmyk space button
    //   {
    //     //button shape
    //     noFill();
    //     if ((cmykToRgb(cy, mg, yw, bk)[0] + cmykToRgb(cy, mg, yw, bk)[1] + cmykToRgb(cy, mg, yw, bk)[2]) / 3 < 128) {
    //       stroke("white");
    //     }
    //     if ((cmykToRgb(cy, mg, yw, bk)[0] + cmykToRgb(cy, mg, yw, bk)[1] + cmykToRgb(cy, mg, yw, bk)[2]) / 3 >= 128) {
    //       stroke("black");
    //     }
    //     strokeWeight(unit / 50);
    //     rect(-4.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit);

    //     //button label
    //     if ((cmykToRgb(cy, mg, yw, bk)[0] + cmykToRgb(cy, mg, yw, bk)[1] + cmykToRgb(cy, mg, yw, bk)[2]) / 3 < 128) {
    //       fill("white");
    //     }
    //     if ((cmykToRgb(cy, mg, yw, bk)[0] + cmykToRgb(cy, mg, yw, bk)[1] + cmykToRgb(cy, mg, yw, bk)[2]) / 3 >= 128) {
    //       fill("black");
    //     }
    //   } text("CMYK space", -4.5 * unit, 3.1 * unit);

    //   //   //curve 1 button
    //   //   {
    //   //   //button shape
    //   //   noFill();
    //   //   if ((rd + gr + bl) / 3 < 128) {
    //   //       stroke("white");
    //   //   }
    //   //   if ((rd + gr + bl) / 3 >= 128) {
    //   //       stroke("black");
    //   //   } strokeWeight(unit / 50);
    //   //   rect(-1.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit);

    //   //   //button label
    //   //   if ((rd + gr + bl) / 3 < 128) {
    //   //       fill("white");
    //   //   }
    //   //   if ((rd + gr + bl) / 3 >= 128) {
    //   //       fill("black");
    //   //   } text("curve 1", -1.5 * unit, 3.1 * unit);
    //   // }

    //   //   //curve 2 button
    //   //   {
    //   //   //button shape
    //   //   noFill();
    //   //   if ((rd + gr + bl) / 3 < 128) {
    //   //       stroke("white");
    //   //   }
    //   //   if ((rd + gr + bl) / 3 >= 128) {
    //   //       stroke("black");
    //   //   } strokeWeight(unit / 50);
    //   //   rect(1.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit);

    //   //   //button label
    //   //   if ((rd + gr + bl) / 3 < 128) {
    //   //       fill("white");
    //   //   }
    //   //   if ((rd + gr + bl) / 3 >= 128) {
    //   //       fill("black");
    //   //   } text("curve 2", 1.5 * unit, 3.1 * unit);
    //   // }

    //   //   //curve 3 button
    //   //   {
    //   //   //button shape
    //   //   noFill();
    //   //   if ((rd + gr + bl) / 3 < 128) {
    //   //       stroke("white");
    //   //   }
    //   //   if ((rd + gr + bl) / 3 >= 128) {
    //   //       stroke("black");
    //   //   } strokeWeight(unit / 50);
    //   //   rect(4.5 * unit, 3 * unit, 2.25 * unit, 0.75 * unit, 0.25 * unit);

    //   //   //button label
    //   //   if ((rd + gr + bl) / 3 < 128) {
    //   //       fill("white");
    //   //   }
    //   //   if ((rd + gr + bl) / 3 >= 128) {
    //   //       fill("black");
    //   //   } text("curve 3", 4.5 * unit, 3.1 * unit);
    //   // }
    // }

    //sliders
    {
      rectMode(CENTER)
      stroke(255)
      strokeWeight(0.05 * unit)

      //bars
      fill(0, 255, 255)
      rect(-5.5 * unit, -1.5 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      fill(255, 0, 255)
      rect(-5.5 * unit, -0.5 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      fill(255, 255, 0)
      rect(-5.5 * unit, 0.5 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      fill(0, 0, 0)
      rect(-5.5 * unit, 1.5 * unit, 3 * unit, 0.1 * unit, 0.1 * unit)

      //handles
      push()
      translate(0, 0, 1)
      strokeWeight(0.025 * unit)
      fill(128)
      rect(
        cmykToSlider(cy) * unit,
        -1.5 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      rect(
        cmykToSlider(mg) * unit,
        -0.5 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      rect(
        cmykToSlider(yw) * unit,
        0.5 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      rect(
        cmykToSlider(bk) * unit,
        1.5 * unit,
        0.2 * unit,
        0.5 * unit,
        0.1 * unit
      )
      pop()

      //text
      textSize(0.5 * unit)
      if (
        (cmykToRgb(cy, mg, yw, bk)[0] +
          cmykToRgb(cy, mg, yw, bk)[1] +
          cmykToRgb(cy, mg, yw, bk)[2]) /
          3 <
        128
      ) {
        fill("white")
      }
      if (
        (cmykToRgb(cy, mg, yw, bk)[0] +
          cmykToRgb(cy, mg, yw, bk)[1] +
          cmykToRgb(cy, mg, yw, bk)[2]) /
          3 >=
        128
      ) {
        fill("black")
      }
      textAlign(LEFT)
      text(round(cy, 3), -3.5 * unit, -1.3 * unit)
      text(round(mg, 3), -3.5 * unit, -0.3 * unit)
      text(round(yw, 3), -3.5 * unit, 0.7 * unit)
      text(round(bk, 3), -3.5 * unit, 1.7 * unit)
    }

    //controls
    {
      //cyan
      {
        if (
          dist(
            cmykToSlider(cy),
            1.5,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.5 &&
          mouseIsPressed
        ) {
          if (mouseToWorld(mouseX, mouseY)[0] < -7) {
            cy = 0
          }
          if (mouseToWorld(mouseX, mouseY)[0] > -4) {
            cy = 1
          }
          if (
            mouseToWorld(mouseX, mouseY)[0] >= -7 &&
            mouseToWorld(mouseX, mouseY)[0] <= -4
          ) {
            cy = sliderToCmyk(mouseToWorld(mouseX, mouseY)[0])
          }
        }
      }

      //magenta
      {
        if (
          dist(
            cmykToSlider(mg),
            0.5,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.5 &&
          mouseIsPressed
        ) {
          if (mouseToWorld(mouseX, mouseY)[0] < -7) {
            mg = 0
          }
          if (mouseToWorld(mouseX, mouseY)[0] > -4) {
            mg = 1
          }
          if (
            mouseToWorld(mouseX, mouseY)[0] >= -7 &&
            mouseToWorld(mouseX, mouseY)[0] <= -4
          ) {
            mg = sliderToCmyk(mouseToWorld(mouseX, mouseY)[0])
          }
        }
      }

      //yellow
      {
        if (
          dist(
            cmykToSlider(yw),
            -0.5,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.5 &&
          mouseIsPressed
        ) {
          if (mouseToWorld(mouseX, mouseY)[0] < -7) {
            yw = 0
          }
          if (mouseToWorld(mouseX, mouseY)[0] > -4) {
            yw = 1
          }
          if (
            mouseToWorld(mouseX, mouseY)[0] >= -7 &&
            mouseToWorld(mouseX, mouseY)[0] <= -4
          ) {
            yw = sliderToCmyk(mouseToWorld(mouseX, mouseY)[0])
          }
        }
      }

      //black
      {
        if (
          dist(
            cmykToSlider(bk),
            -1.5,
            mouseToWorld(mouseX, mouseY)[0],
            mouseToWorld(mouseX, mouseY)[1]
          ) < 0.5 &&
          mouseIsPressed
        ) {
          if (mouseToWorld(mouseX, mouseY)[0] < -7) {
            bk = 0
          }
          if (mouseToWorld(mouseX, mouseY)[0] > -4) {
            bk = 1
          }
          if (
            mouseToWorld(mouseX, mouseY)[0] >= -7 &&
            mouseToWorld(mouseX, mouseY)[0] <= -4
          ) {
            bk = sliderToCmyk(mouseToWorld(mouseX, mouseY)[0])
          }
        }
      }
    }

    //graph
    {
      //cube
      {
        //set edgelength
        edgeLength = 2.5 * unit

        //stroke settings
        {
          if (
            (cmykToRgb(cy, mg, yw, bk)[0] +
              cmykToRgb(cy, mg, yw, bk)[1] +
              cmykToRgb(cy, mg, yw, bk)[2]) /
              3 <
            128
          ) {
            stroke("white")
          }
          if (
            (cmykToRgb(cy, mg, yw, bk)[0] +
              cmykToRgb(cy, mg, yw, bk)[1] +
              cmykToRgb(cy, mg, yw, bk)[2]) /
              3 >=
            128
          ) {
            stroke("black")
          }
          strokeWeight(0.04 * unit)
        }

        //black = 0 face and dotted connectors and (c,m,y,k) point
        {
          push()

          rotateX(PI / 3)
          rotateZ(PI / 6)
          scale(1, -1, 1)
          translate(0.5 * unit, -2.5 * unit, -0.5 * unit)

          //front
          line(0, 0, 0, 0, 0, edgeLength)
          line(0, 0, 0, edgeLength, 0, 0)
          line(edgeLength, 0, 0, edgeLength, 0, edgeLength)
          line(edgeLength, 0, edgeLength, 0, 0, edgeLength)

          //back
          line(0, edgeLength, 0, 0, edgeLength, edgeLength)
          line(0, edgeLength, 0, edgeLength, edgeLength, 0)
          line(edgeLength, edgeLength, 0, edgeLength, edgeLength, edgeLength)
          line(edgeLength, edgeLength, edgeLength, 0, edgeLength, edgeLength)

          //connectors
          line(edgeLength, 0, 0, edgeLength, edgeLength, 0)
          line(edgeLength, 0, edgeLength, edgeLength, edgeLength, edgeLength)
          line(0, 0, edgeLength, 0, edgeLength, edgeLength)
          line(0, 0, 0, 0, edgeLength, 0)

          //dotted connectors
          n = 20
          strokeWeight(0.05 * unit)
          cubeVerts = [
            [0, 0, 0],
            [0, 0, 1],
            [0, 1, 0],
            [0, 1, 1],
            [1, 0, 0],
            [1, 0, 1],
            [1, 1, 0],
            [1, 1, 1],
          ]
          for (j = 0; j < 8; j++) {
            for (i = 1; i < n; i++) {
              point(
                cubeVerts[j][0] * edgeLength + (i / n) * 1 * unit,
                cubeVerts[j][1] * edgeLength + (i / n) * 1.5 * unit,
                cubeVerts[j][2] * edgeLength + (i / n) * 1.25 * unit
              )
            }
          }

          //(c,m,y,k) point
          push()
          translate(
            cy * edgeLength + bk * 1 * unit,
            mg * edgeLength + bk * 1.5 * unit,
            yw * edgeLength + bk * 1.25 * unit
          )
          sphere(0.1 * unit)
          pop()
          pop()
        }

        //black = 1 face
        {
          strokeWeight(0.04 * unit)

          push()

          rotateX(PI / 3)
          rotateZ(PI / 6)
          scale(1, -1, 1)
          translate(1.5 * unit, -1.0 * unit, 0.75 * unit)

          //front
          line(0, 0, 0, 0, 0, edgeLength)
          line(0, 0, 0, edgeLength, 0, 0)
          line(edgeLength, 0, 0, edgeLength, 0, edgeLength)
          line(edgeLength, 0, edgeLength, 0, 0, edgeLength)

          //back
          line(0, edgeLength, 0, 0, edgeLength, edgeLength)
          line(0, edgeLength, 0, edgeLength, edgeLength, 0)
          line(edgeLength, edgeLength, 0, edgeLength, edgeLength, edgeLength)
          line(edgeLength, edgeLength, edgeLength, 0, edgeLength, edgeLength)

          //connectors
          line(edgeLength, 0, 0, edgeLength, edgeLength, 0)
          line(edgeLength, 0, edgeLength, edgeLength, edgeLength, edgeLength)
          line(0, 0, edgeLength, 0, edgeLength, edgeLength)
          line(0, 0, 0, 0, edgeLength, 0)

          pop()
        }

        //(c,m,y,k) point
      }
    }
  }
}
