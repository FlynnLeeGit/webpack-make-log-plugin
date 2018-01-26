const MakeLogPlugin = class {
  constructor(config) {
    this.config = config
    this.message = config.message || ''
  }
  apply(compiler) {
    compiler.plugin('make', (compilation, callback) => {
      console.log(this.message)
      callback()
    })
  }
}

module.exports = MakeLogPlugin