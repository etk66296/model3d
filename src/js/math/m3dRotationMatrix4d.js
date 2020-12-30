class M3dRotationMatrix4d extends M3dMatrix4d {
  constructor(axis, angle = 0) {
    super()

    this.angle = angle

    this.axis = axis

    this.va = null
    this.vb = null
    this.vc = null
    this.vd = null

    if (axis === 'x') {
      this.va = new M3dVector4d(1, 0, 0, 0),
      this.vb = new M3dVector4d(0, Math.cos(this.angle), (-1) * Math.sin(this.angle), 0),
      this.vc = new M3dVector4d(0, Math.sin(this.angle), Math.cos(this.angle), 0),
      this.vd = new M3dVector4d(0, 0, 0, 1)
    } else if (axis === 'y') {
      this.va = new M3dVector4d(Math.cos(this.angle), 0, Math.sin(this.angle), 0),
      this.vb = new M3dVector4d(0, 1, 0, 0),
      this.vc = new M3dVector4d((-1) * Math.sin(this.angle), 0, Math.cos(this.angle), 0),
      this.vd = new M3dVector4d(0, 0, 0, 1)
    } else {
      this.va = new M3dVector4d(Math.cos(this.angle), Math.sin(this.angle), 0, 0),
      this.vb = new M3dVector4d((-1) * Math.sin(this.angle), Math.cos(this.angle), 0, 0),
      this.vc = new M3dVector4d(0, 0, 1, 0),
      this.vd = new M3dVector4d(0, 0, 0, 1)
    }
  }

  rotate(angle) {
    this.angle += angle
    if (this.axis === 'x') {
      this.va.set(1, 0, 0, 0)
      this.vb.set(0, Math.cos(this.angle), (-1) * Math.sin(this.angle), 0)
      this.vc.set(0, Math.sin(this.angle), Math.cos(this.angle), 0)
      this.vd.set(0, 0, 0, 1)
    } else if (this.axis === 'y') {
      this.va.set(Math.cos(this.angle), 0, Math.sin(this.angle), 0)
      this.vb.set(0, 1, 0, 0)
      this.vc.set((-1) * Math.sin(this.angle), 0, Math.cos(this.angle), 0)
      this.vd.set(0, 0, 0, 1)
    } else {
      this.va.set(Math.cos(this.angle), Math.sin(this.angle), 0, 0)
      this.vb.set((-1) * Math.sin(this.angle), Math.cos(this.angle), 0, 0)
      this.vc.set(0, 0, 1, 0)
      this.vd.set(0, 0, 0, 1)
    }
  }

  update () {
   
  }

}