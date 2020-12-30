class M3dTranslationMatrix4d extends M3dMatrix4d {
  constructor(x, y, z) {
    super()

    this.dx = x
    this.dy = y
    this.dz = z

    this.va = new M3dVector4d(1, 0, 0, 0),
    this.vb = new M3dVector4d(0, 1, 0, 0),
    this.vc = new M3dVector4d(0, 0, 1, 0),
    this.vd = new M3dVector4d(this.dx, this.dy, this.dz, 1)

  }

  update () {
   
  }

}