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

  // textFont("Arial Black");
  textFont(font)
}

function draw() {

  // if (keyIsPressed && keyCode === SHIFT) {
  //   orbitControl();
  // }
  switch (counter) {
    //title slide
    case 0:
      slide0.show()
      break
    //part 1 title slide
    case 1:
      slide1.show()
      break
    //2D
    case 2:
      slide2.show()
      break
    //2D table
    case 3:
      slide3.show()
      break
    //3D
    case 4:
      slide4.show()
      break
    //3D table
    case 5:
      slide5.show()
      break
    //general table
    case 6:
      slide6.show()
      break
    //part 2 title slide
    case 7:
      slide7.show()
      break
    //projecting 3D to 2D
    case 8:
      slide8.show()
      break
    //projecting 4D to 3D
    case 9:
      slide9.show()
      break
    //slicing 3D with 2D
    case 10:
      slide10.show()
      break
    //slicing 4D with 3D
    case 11:
      slide11.show()
      break
    //part 3 title slide
    case 12:
      slide12.show()
      break
    //RGB space
    case 13:
      slide13.show()
      break
    //CMYK space
    case 14:
      slide14.show()
      break
  }
}
