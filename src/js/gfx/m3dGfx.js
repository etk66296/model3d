class M3dGfx extends M3dObject {
  constructor() {
    super()
    this.canvas = document.querySelector("#renderSurface")
    this.ctx = this.canvas.getContext("2d")
    this.canvas.width  = window.innerWidth
    this.canvas.height = window.innerHeight

    this.ctx.fillStyle = '#000000'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.ctx.fillStyle = '#00ff00'
    this.ctx.fillRect(1, 1, 1, 1)

    // intervall function -->
    function interval(func, wait, times) {
      var interv = function(w, t) {
        return function() {
          if (typeof t === 'undefined' || t-- > 0) {
            setTimeout(interv, w)
            try {
              func.call(null)
            }
            catch (e){
              t = 0
              throw e.toString()
            }
          }
        }
      }(wait, times)
      setTimeout(interv, wait)
    }
    interval(this.update, 1000 / 30)
  // <-- intervall function
    // do not use gl yet
    // this.gl = canvas.getContext("webgl")
    
    // if (!this.gl) {
    //   alert("Unable to initialize WebGL. Your browser or machine may not support it.")
    //   return;
    // }

    // this.gl.clearColor(0.0, 0.2, 0.2, 1.0)
    // this.gl.clear(this.gl.COLOR_BUFFER_BIT)
  }
  update () {
    console.log('hello')
  }
}