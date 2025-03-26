//fix 23, rotate 01
function R_xy(theta, v) {
  return [
    cos(theta) * v[0] - sin(theta) * v[1],
    sin(theta) * v[0] + cos(theta) * v[1],
    v[2],
    v[3],
  ]
}

//fix 13, rotate 02
function R_xz(theta, v) {
  return [
    cos(theta) * v[0] - sin(theta) * v[2],
    v[1],
    sin(theta) * v[0] + cos(theta) * v[2],
    v[3],
  ]
}

//fix 12, rotate 03
function R_xw(theta, v) {
  return [
    cos(theta) * v[0] - sin(theta) * v[3],
    v[1],
    v[2],
    sin(theta) * v[0] + cos(theta) * v[3],
  ]
}

//fix 03, rotate 12
function R_yz(theta, v) {
  return [
    v[0],
    cos(theta) * v[1] - sin(theta) * v[2],
    sin(theta) * v[1] + cos(theta) * v[2],
    v[3],
  ]
}

//fix 02, rotate 13
function R_yw(theta, v) {
  return [
    v[0],
    cos(theta) * v[1] - sin(theta) * v[3],
    v[2],
    sin(theta) * v[1] + cos(theta) * v[3],
  ]
}

//fix 01, rotate 23
function R_zw(theta, v) {
  return [
    v[0],
    v[1],
    cos(theta) * v[2] - sin(theta) * v[3],
    sin(theta) * v[2] + cos(theta) * v[3],
  ]
}
