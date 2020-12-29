class M3dMatrix4d extends M3dMath {
  constructor(va, vb, vc, vd) {
    super()
    this.va = va
    this.vb = vb
    this.vc = vc
    this.vd = vd
  }
  
  multiply(m) {
    if (m.constructor.name === 'M3dVector4d') {
      return new M3dVector4d(
        this.va.x * m.x + this.vb.x * m.y + this.vc.x * m.z + this.vd.x * m.w,
        this.va.y * m.x + this.vb.y * m.y + this.vc.y * m.z + this.vd.y * m.w,
        this.va.z * m.x + this.vb.z * m.y + this.vc.z * m.z + this.vd.z * m.w,
        this.va.w * m.x + this.vb.w * m.y + this.vc.w * m.z + this.vd.w * m.w
      )
    } else if (m.constructor.name === 'M3dMatrix4d') {
      return new M3dMatrix4d(
        new M3dVector4d(
          this.va.x * m.va.x + this.vb.x * m.va.y + this.vc.x * m.va.z + this.vd.x * m.va.w,
          this.va.y * m.va.x + this.vb.y * m.va.y + this.vc.y * m.va.z + this.vd.y * m.va.w,
          this.va.z * m.va.x + this.vb.z * m.va.y + this.vc.z * m.va.z + this.vd.z * m.va.w,
          this.va.w * m.va.x + this.vb.w * m.va.y + this.vc.w * m.va.z + this.vd.w * m.va.w
        ),
        new M3dVector4d(
          this.va.x * m.vb.x + this.vb.x * m.vb.y + this.vc.x * m.vb.z + this.vd.x * m.vb.w,
          this.va.y * m.vb.x + this.vb.y * m.vb.y + this.vc.y * m.vb.z + this.vd.y * m.vb.w,
          this.va.z * m.vb.x + this.vb.z * m.vb.y + this.vc.z * m.vb.z + this.vd.z * m.vb.w,
          this.va.w * m.vb.x + this.vb.w * m.vb.y + this.vc.w * m.vb.z + this.vd.w * m.vb.w
        ),
        new M3dVector4d(
          this.va.x * m.vc.x + this.vb.x * m.vc.y + this.vc.x * m.vc.z + this.vd.x * m.vc.w,
          this.va.y * m.vc.x + this.vb.y * m.vc.y + this.vc.y * m.vc.z + this.vd.y * m.vc.w,
          this.va.z * m.vc.x + this.vb.z * m.vc.y + this.vc.z * m.vc.z + this.vd.z * m.vc.w,
          this.va.w * m.vc.x + this.vb.w * m.vc.y + this.vc.w * m.vc.z + this.vd.w * m.vc.w
        ),
        new M3dVector4d(
          this.va.x * m.vd.x + this.vb.x * m.vd.y + this.vc.x * m.vd.z + this.vd.x * m.vd.w,
          this.va.y * m.vd.x + this.vb.y * m.vd.y + this.vc.y * m.vd.z + this.vd.y * m.vd.w,
          this.va.z * m.vd.x + this.vb.z * m.vd.y + this.vc.z * m.vd.z + this.vd.z * m.vd.w,
          this.va.w * m.vd.x + this.vb.w * m.vd.y + this.vc.w * m.vd.z + this.vd.w * m.vd.w
        )
      )
    } else {
      console.error('wrong multiplier for matrix4d')
    }
  }

  transpose() {
    return new M3dMatrix3d(
      new M3dVector4d(this.va.x, this.vb.x, this.vc.x, this.vd.x),
      new M3dVector4d(this.va.y, this.vb.y, this.vc.y, this.vd.y),
      new M3dVector4d(this.va.z, this.vb.z, this.vc.z, this.vd.z),
      new M3dVector4d(this.va.w, this.vb.w, this.vc.w, this.vd.w)
    )
  }

}