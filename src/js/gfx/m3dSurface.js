class M3dSurface extends M3dGfx {
  constructor(cfg) {
    super()
    this.canvas = document.querySelector("#renderSurface")
    this.ctx = this.canvas.getContext("2d")
    this.cfg = cfg

    this.pauseInterval = false

    this.startTime = 0
    this.stopTime = 0
    this.elapsedTime = 0
    this.frameCounter = 0
    this.currentFramesPerSecond = 0
    this.ticks = 0

    // configuration render surface width and height
    if (this.cfg.surface == undefined) {
      this.canvas.width  = window.innerWidth
      this.canvas.height = window.innerHeight
    } else {
      if (Number.isInteger(this.cfg.surface.w) && Number.isInteger(this.cfg.surface.h)) {
        this.canvas.width  = this.cfg.surface.w
        this.canvas.height = this.cfg.surface.h
      } else {
        console.error('check the surface configuration width and height values')
      }
    }

    // configuration frames per second
    if (this.cfg.fps == undefined) {
      this.fps = 30
    } else {
      this.fps = cfg.fps
    }

    // run the intervall method -->
    this.interval(this.update, 1000 / this.fps)


    // draw buffer
    this.drawableIndex = 0
    this.drawableList = []
    this.updateableIndex = 0
    this.updateableList = []

    // do not use gl yet
    // this.gl = canvas.getContext("webgl")
    
    // if (!this.gl) {
    //   alert("Unable to initialize WebGL. Your browser or machine may not support it.")
    //   return;
    // }

    // this.gl.clearColor(0.0, 0.2, 0.2, 1.0)
    // this.gl.clear(this.gl.COLOR_BUFFER_BIT)
  }
  
  interval(func, wait, times) {
    /*
    * interval calls the passed method cyclical
    */
    var interv = ((w, t) => {
      return () => {
        if (typeof t === 'undefined' || t-- > 0) {
          setTimeout(interv, w)
          try {
            if (!this.pauseInterval) {
              func.call(this)
            }
          }
          catch (e){
            t = 0
            throw e.toString()
          }
        }
      }
    })(wait, times)
    setTimeout(interv, wait)
  }

  update () {
    /*
    * update the render surface
    */
    // save the time to measure the difference since the last run
    this.ticks++
    this.startTime = this.stopTime
    this.stopTime = window.performance.now()

    this.ctx.fillStyle = '#000000'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  
    
    this.elapsedTime += (this.stopTime - this.startTime)
    this.frameCounter++

    // draw main content -->
    this.drawableList.forEach(item => {
      item.drawObj.draw(this.ctx)
    })
    // <-- draw main content
    // update main content -->
    this.updateableList.forEach(item => {
      item.updateObj.update()
    })
    // <-- update main content

    
    // after one second
    if (this.elapsedTime >= 1000) {
      this.currentFramesPerSecond = this.frameCounter
      this.frameCounter = 0
      this.elapsedTime = 0
    }

    // print debug data
    if (this.debugMode) {
      this.ctx.fillStyle = '#00ff00'
      this.ctx.font = '12px serif'
      this.ctx.fillText('ticks:' + String(this.ticks), 4, 15)
      this.ctx.fillText('fps:' + String(this.currentFramesPerSecond), 4, 35)
    }
  }

  addDrawable(drawable) {
    this.drawableIndex++
    this.drawableList.push({ drawObj: drawable, dIndex:  this.drawableIndex})
  }
  addUpdateable(updateable) {
    this.updateableIndex++
    this.updateableList.push({ updateObj: updateable, dIndex:  this.updateableIndex})
  }

}