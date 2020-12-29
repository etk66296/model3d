class M3dPerspectiveProjection extends M3dMatrix4d {
  constructor(cfg) {
    super()

    this.near = 1
    this.far = 10
    this.left = -0.01
    this.right = 0.01
    this.top = -0.02
    this.bottom = 0.02

    // this.va = new M3dVector4d(this.near / (this.right - this.left), 0, 0, 0),
    // this.vb = new M3dVector4d(0, 2 * this.near / (this.top - this.bottom), (this.top + this.bottom) / (this.top - this.bottom), 0),
    // this.vc = new M3dVector4d(0, 0, (this.far + this.near) / (this.near - this.far), 2 * this.far * this.near / (this.near - this.far)),
    // this.vd = new M3dVector4d(0, 0, -1, 0)  

    this.va = new M3dVector4d(2 * this.near / (this.right - this.left), 0, 0, 0),
    this.vb = new M3dVector4d(0, 2 * this.near / (this.top - this.bottom), 0, 0),
    this.vc = new M3dVector4d((this.right + this.left) / (this.right - this.left), (this.top + this.bottom) / (this.top - this.bottom), (-1) * (this.far + this.near) / (this.far - this.near), -1),
    this.vd = new M3dVector4d(0, 0, (-2) * this.far * this.near / (this.far - this.near), 0)

    console.log(this)
  }

  update () {
   
  }

}