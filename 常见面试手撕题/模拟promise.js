function promise (fn) {
  fn((data) => this.success(data), (error) => this.error(error))
}

promise.prototype.success = function (data) {
  this.success(data)
}

promise.prototype.error = function (error) {
  this.error(error)
}

promise.prototype.then = function (success, error) {
  this.success = success
  this.error = error
}