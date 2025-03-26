let slide0,
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14
let unit, size
let counter = 0

{
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

  //slide 10 -- projecting 4D to 3D
  {
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
  }
}
//////////////////////////
//////////////////////////
//////////////////////////
//setup

function preload() {
  font = loadFont("font.otf")
}

function setup() {
  //set aspect ratio and screen width
  r = 9 / 16
  w = windowWidth
  createCanvas(w, r * w, WEBGL)
  unit = width / 16

  //set edge length of cubes for slicing/projecting
  size = 2.5 * unit

  // createCanvas(windowWidth, windowHeight, WEBGL);
  slide0 = new Slide0()
  slide1 = new Slide1()
  slide2 = new Slide2()
  slide3 = new Slide3()
  slide4 = new Slide4()
  slide5 = new Slide5()
  slide6 = new Slide6()
  slide7 = new Slide7()
  slide8 = new Slide8()
  slide9 = new Slide9()
  slide10 = new Slide10()
  slide11 = new Slide11()
  slide12 = new Slide12()
  slide13 = new Slide13()
  slide14 = new Slide14()

  frameRate(100)
}

function draw() {
  //general
  {
    // if (keyIsPressed && keyCode === SHIFT) {
    //   orbitControl();
    // }

    if (counter != 13 && counter != 14) {
      background("black")
    }

    // textFont("Arial Black");
    textFont(font)
  }

  //title slide
  if (counter == 0) {
    slide0.show()
  }

  //part 1 title slide
  if (counter == 1) {
    slide1.show()
  }

  //2D
  if (counter == 2) {
    slide2.show()
  }

  //2D table
  if (counter == 3) {
    slide3.show()
  }

  //3D
  if (counter == 4) {
    slide4.show()
  }

  //3D table
  if (counter == 5) {
    slide5.show()
  }

  //general table
  if (counter == 6) {
    slide6.show()
  }

  //part 2 title slide
  if (counter == 7) {
    slide7.show()
  }

  //projecting 3D to 2D
  if (counter == 8) {
    slide8.show()
  }

  //projecting 4D to 3D
  if (counter == 9) {
    slide9.show()
  }

  //slicing 3D with 2D
  if (counter == 10) {
    slide10.show()
  }

  //slicing 4D with 3D
  if (counter == 11) {
    slide11.show()
  }

  //part 3 title slide
  if (counter == 12) {
    slide12.show()
  }

  //RGB space
  if (counter == 13) {
    slide13.show()
  }

  //CMYK space
  if (counter == 14) {
    slide14.show()
  }
}
