class M3dPixel extends M3dDrawable {
  constructor(v, color) {
    super()
    this.v = v
    this.color = color
  }
  
  draw (ctx) {
    ctx.fillStyle = this.color
    ctx.fillRect(this.v.x, this.v.y, 1, 1)
  }

  update () {
  }
}