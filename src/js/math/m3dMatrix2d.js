class M3dMatrix2d extends M3dMath {
  constructor(va, vb) {
    super()
    this.va = va
    this.vb = vb
  }

  multiply(m) {
    if (m.constructor.name === 'M3dVector2d') {
      return new M3dVector2d(
        this.va.x * m.x + this.vb.x * m.y,
        this.va.y * m.x + this.vb.y * m.y
      )
    } else if (m.constructor.name === 'M3dMatrix2d') {
      return new M3dMatrix2d(
        new M3dVector2d(this.va.x * m.va.x + this.vb.x * m.va.y, this.va.y * m.va.x + this.vb.y * m.va.y),
        new M3dVector2d(this.va.x * m.vb.x + this.vb.x * m.vb.y, this.va.y * m.vb.x + this.vb.y * m.vb.y)
      )
    } else {
      console.error('wrong multiplier for matrix2d')
    }
  }
}