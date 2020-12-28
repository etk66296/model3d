class M3dLine extends M3dPixel {
  constructor(va, vb, color) {
    super()
    this.va = va
    this.vb = vb
    this.color = color
    this.pivot = this.va.add(this.vb).divide(2)
    this.rotMatrix = new M3dRotMatrix2d()
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
    // this.translate(-1, 0)
    // this.rotate(0.01)
  }

}