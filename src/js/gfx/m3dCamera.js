class M3dCamera extends M3dObject {
  constructor(cfg) {
    super()

    this.eye = new M3dVector3d(0.0, 0.0, 0.0)
    this.target = new M3dVector3d(0, 0, -1)
    this.up = new M3dVector3d(0, 1, 0)

    this.fwd = this.eye.sub(this.target).normalize()
    this.right = this.up.normalVector(this.fwd)
    this.up = this.fwd.crossProduct(this.right)

    // this.right = new M3dVector3d(1, 1, 0).normalize()
    // this.up = new M3dVector3d(0, 1, 0).normalize()
    // this.fwd = new M3dVector3d(0, 0, -1).normalize()

    this.orientation = new M3dMatrix4d(
      new M3dVector4d(this.right.x, this.up.x, this.fwd.x, 0),
      new M3dVector4d(this.right.y, this.up.y, this.fwd.y, 0),
      new M3dVector4d(this.right.z, this.up.z, this.fwd.z, 0),
      new M3dVector4d(0, 0, 0, 1)
    )

    this.translation = new M3dMatrix4d(
      new M3dVector4d(1, 0, 0, 0),
      new M3dVector4d(0, 1, 0, 0),
      new M3dVector4d(0, 0, 1, 0),
      new M3dVector4d((-1) * this.fwd.x, (-1) * this.fwd.y, (-1) * this.fwd.z, 1)
    )

    // keyboard events -->
    window.addEventListener("keydown", (event) => {
      if (event.defaultPrevented) {
        return // Do nothing if the event was already processed
      }
      switch (event.key) {
      case "s":
        this.translation.vd.z -= 0.1
      break
      case "w":
        this.translation.vd.z += 0.1
      break
      case "d":
        this.translation.vd.x++
      break;
      case "a":
        this.translation.vd.x--
      break
      case "ArrowUp":
        this.translation.vd.y++
      break;
      case "ArrowDown":
        this.translation.vd.y--
      break
      default:
        return
      }
      // Cancel the default action to avoid it being handled twice
      event.preventDefault()
    }, true)
  }
  // <-- keyboard events

  update () {

  }

}