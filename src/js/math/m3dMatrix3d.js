class M3dMatrix3d extends M3dMath {
  constructor(va, vb, vc) {
    super()
    this.va = va
    this.vb = vb
    this.vc = vc
  }
  
  multiply(m) {
    if (m.constructor.name === 'M3dVector3d') {
      return new M3dVector3d(
        this.va.x * m.x + this.vb.x * m.y + this.vc.x * m.z,
        this.va.y * m.x + this.vb.y * m.y + this.vc.y * m.z,
        this.va.z * m.x + this.vb.z * m.y + this.vc.z * m.z
      )
    } else if (m.constructor.name === 'M3dMatrix3d') {
      return new M3dMatrix3d(
        new M3dVector3d(this.va.x * m.va.x + this.vb.x * m.va.y + this.vc.x * m.va.z, this.va.y * m.va.x + this.vb.y * m.va.y + this.vc.y * m.va.z, this.va.z * m.va.x + this.vb.z * m.va.y + this.vc.z * m.va.z),
        new M3dVector3d(this.va.x * m.vb.x + this.vb.x * m.vb.y + this.vc.x * m.vb.z, this.va.y * m.vb.x + this.vb.y * m.vb.y + this.vc.y * m.vb.z, this.va.z * m.vb.x + this.vb.z * m.vb.y + this.vc.z * m.vb.z),
        new M3dVector3d(this.va.x * m.vc.x + this.vb.x * m.vc.y + this.vc.x * m.vc.z, this.va.y * m.vc.x + this.vb.y * m.vc.y + this.vc.y * m.vc.z, this.va.z * m.vc.x + this.vb.z * m.vc.y + this.vc.z * m.vc.z)
      )
    } else {
      console.error('wrong multiplier for matrix3d')
    }
  }
}