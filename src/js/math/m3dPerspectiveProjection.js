class M3dPerspectiveProjection extends M3dMatrix4d {
  constructor() {
    super()

    this.near = 0.5
    this.far = 20
    this.left = -0.006
    this.right = 0.006
    this.top = -0.006
    this.bottom = 0.006

    // this.va = new M3dVector4d(this.near / (this.right - this.left), 0, 0, 0),
    // this.vb = new M3dVector4d(0, 2 * this.near / (this.top - this.bottom), (this.top + this.bottom) / (this.top - this.bottom), 0),
    // this.vc = new M3dVector4d(0, 0, (this.far + this.near) / (this.near - this.far), 2 * this.far * this.near / (this.near - this.far)),
    // this.vd = new M3dVector4d(0, 0, -1, 0)  

    // this.va = new M3dVector4d(2 * this.near / (this.right - this.left), 0, 0, 0),
    // this.vb = new M3dVector4d(0, 2 * this.near / (this.top - this.bottom), 0, 0),
    // this.vc = new M3dVector4d((this.right + this.left) / (this.right - this.left), (this.top + this.bottom) / (this.top - this.bottom), (-1) * (this.far + this.near) / (this.far - this.near), -1),
    // this.vd = new M3dVector4d(0, 0, (-2) * this.far * this.near / (this.far - this.near), 0)

    this.va = new M3dVector4d(2 / (this.right - this.left), 0, 0, 0),
    this.vb = new M3dVector4d(0, 2 / (this.top - this.bottom), 0, 0),
    this.vc = new M3dVector4d(0, 0, (-2) / (this.far - this.near), 0),
    this.vd = new M3dVector4d((-1) * (this.right + this.left) / (this.right - this.left), (-1) * (this.top + this.bottom) / (this.top - this.bottom),(-1) * (this.far + this.near) / (this.far - this.near), 1)

  }

  update () {
   
  }

}