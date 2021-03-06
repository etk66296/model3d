class M3dLine extends M3dPixel {
  constructor(va, vb, color) {
    super(va, color)
    this.va = va
    this.vb = vb
    this.va.x = Math.floor(this.va.x)
    this.va.y = Math.floor(this.va.y)
    this.vb.x = Math.floor(this.vb.x)
    this.vb.y = Math.floor(this.vb.y)
    this.color = color
    this.pivot = this.va.add(this.vb).divide(2)
    this.rotMatrix = new M3dRotMatrix2d()
  }

  set(ax, ay, bx, by) {
    this.va.x = Math.floor(ax)
    this.va.y = Math.floor(ay)
    this.vb.x = Math.floor(bx)
    this.vb.y = Math.floor(by)
    return this
  }

  draw (ctx) {
    ctx.fillStyle = this.color

    let dx = this.vb.x - this.va.x
    let dy = this.vb.y - this.va.y

    let incrementX = Math.sign(dx)
    let incrementY = Math.sign(dy)

    if (dx < 0) { dx = dx * -1 }
    if (dy < 0) { dy = dy * -1 }

    // determine the fast direction
    let dXParallel = 0
    let dYParallel = 0
    let dXDiag = incrementX
    let dYDiag = incrementY
    let deltaSlowDir = 0
    let deltaFastDir = 0
    if (dx > dy) { // x ist the fast direction
      dXParallel = incrementX
      dYParallel = 0
      deltaSlowDir = dy
      deltaFastDir = dx
    } else { // y is the fast direction
      dXParallel = 0
      dYParallel = incrementY
      deltaSlowDir = dx
      deltaFastDir = dy
    }


    let x = this.va.x
    let y = this.va.y
    let lineError = deltaFastDir / 2
    // start pixel
    ctx.fillRect(x, y, 1, 1)

    for (let t = 0; t < deltaFastDir; ++t) {
      lineError -= deltaSlowDir

      if (lineError < 0) {
        lineError += deltaFastDir
        x += dXDiag
        y += dYDiag
      } else {
        x += dXParallel
        y += dYParallel
      }
      ctx.fillRect(x, y, 1, 1)
    }

    // add dots to start and stop vactor
    ctx.fillRect(this.va.x - 3, this.va.y - 3, 6, 6)
    ctx.fillRect(this.vb.x - 3, this.vb.y - 3, 6, 6)

  }


  translate(x, y) {
    this.va.x += x
    this.va.y += y
    this.vb.x += x
    this.vb.y += y
  }

  rotate(angle) {
    // first move the start and stop vectors to the origin
    this.va = this.va.sub(this.pivot)
    this.vb = this.vb.sub(this.pivot)

    // change the rotation matrix angle
    this.rotMatrix.rotate(angle)

    // rotate them
    this.va = this.rotMatrix.multiply(this.va)
    this.vb = this.rotMatrix.multiply(this.vb)

    // move them back to their defined position
    this.va = this.va.add(this.pivot)
    this.vb = this.vb.add(this.pivot)
  }

  update() {
  }

}