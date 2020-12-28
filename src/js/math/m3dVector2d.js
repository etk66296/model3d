class M3dVector2d extends M3dMath {
  constructor(x = 0, y = 0) {
    super()
    this.x = x
    this.y = y
  }

  set(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  add(v) {
    return new M3dVector2d(this.x + v.x, this.y + v.y)
  }

  sub(v) {
    return new M3dVector2d(this.x - v.x, this.y - v.y)
  }

  divide(divisor) {
    return new M3dVector2d(this.x / divisor, this.y / divisor)
  }

  multiply(factor) {
    return new M3dVector2d(this.x * factor, this.y * factor)
  }
}