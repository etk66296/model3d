class M3dVector4d extends M3dMath {
  constructor(x = 0, y = 0, z = 0, w = 0) {
    super()
    this.x = x
    this.y = y
    this.z = z
    this.w = w
  }
  set(x = 0, y = 0, z = 0, w = 0) {
    this.x = x
    this.y = y
    this.z = z
    this.w = w
  }

  add(v) {
    return new M3dVector3d(this.x + v.x, this.y + v.y, this.z + v.z, this.w + v.w)
  }

  sub(v) {
    return new M3dVector3d(this.x - v.x, this.y - v.y, this.z - v.z, this.w - v.w)
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
  }

  divide(divisor) {
    return new M3dVector3d(this.x / divisor, this.y / divisor, this.z / divisor, this.w / divisor)
  }

  multiply(factor) {
    return new M3dVector3d(this.x * factor, this.y * factor, this.z * factor, this.w * factor)
  }

}