class M3dVector3d extends M3dMath {
  constructor(x = 0, y = 0, z = 0) {
    super()
    this.x = x
    this.y = y
    this.z = z
  }
  set(x = 0, y = 0) {
    this.x = x
    this.y = y
    this.z = z
  }

  add(v) {
    return new M3dVector3d(this.x + v.x, this.y + v.y, this.z + v.z)
  }

  sub(v) {
    return new M3dVector3d(this.x - v.x, this.y - v.y, this.z - v.z)
  }

  divide(divisor) {
    return new M3dVector3d(this.x / divisor, this.y / divisor, this.z / divisor)
  }

  multiply(factor) {
    return new M3dVector3d(this.x * factor, this.y * factor, this.z * factor)
  }

  normalize() {
    let norm = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    return this.divide(norm)
  }

  dotProduct(v) { 
    return (this.x * v.x + this.y * v.y + this.z * v.z)
  }

  crossProduct(v) { 
    return new M3dVector3d(
      (this.y * v.z) - (v.y * this.z),
      (this.z * v.x) - (v.z * this.x),
      (this.x * v.y) - (v.x * this.y)
    )
  }

}