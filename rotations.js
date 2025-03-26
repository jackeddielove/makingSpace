//rotates a point in 4-space (v) in the xy plane by a radians, the xz plane by b radians, and the yz plane by c radians
function titleRotation(a, b, c, v) {
  return [
    cos(a) * v[0] -
      sin(a) * sin(b) * v[1] -
      sin(a) * cos(b) * sin(c) * v[2] -
      sin(a) * cos(b) * cos(c) * v[3],
    0 * v[0] + cos(b) * v[1] - sin(b) * sin(c) * v[2] - sin(b) * cos(c) * v[3],
    0 * v[0] + 0 * v[1] + cos(c) * v[2] - sin(c) * v[3],
    sin(a) * v[0] +
      cos(a) * sin(b) * v[1] +
      cos(a) * cos(b) * sin(c) * v[2] +
      cos(a) * cos(b) * cos(c) * v[3],
  ]
}

function Rx(theta, v) {
  c = createVector(
    v.x,
    v.y * cos((theta * PI) / div) - v.z * sin((theta * PI) / div),
    v.y * sin((theta * PI) / div) + v.z * cos((theta * PI) / div)
  )

  return c
}

function Ry(theta, v) {
  c = createVector(
    v.x * cos((theta * PI) / div) + v.z * sin((theta * PI) / div),
    v.y,
    -v.x * sin((theta * PI) / div) + v.z * cos((theta * PI) / div)
  )

  return c
}

function Rz(theta, v) {
  c = createVector(
    v.x * cos((theta * PI) / div) - v.y * sin((theta * PI) / div),
    v.x * sin((theta * PI) / div) + v.y * cos((theta * PI) / div),
    v.z
  )
  return c
}

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
