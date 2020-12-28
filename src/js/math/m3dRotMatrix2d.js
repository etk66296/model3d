class M3dRotMatrix2d extends M3dMatrix2d {
  constructor() {
    super()
    this.angle = 0
    this.va = new M3dVector2d(Math.cos(this.alpha), Math.sin(this.alpha))
    this.vb = new M3dVector2d((-1) * Math.sin(this.alpha), Math.cos(this.alpha))
  }

  rotate(angle) {
    this.angle = angle
    this.va.set(Math.cos(angle), Math.sin(angle))
    this.vb.set((-1) * Math.sin(angle), Math.cos(angle))
  }

}