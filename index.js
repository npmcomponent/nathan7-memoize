var _hasOwnProperty = ({}).hasOwnProperty
module.exports =
function memoize(func, resolver) {
  var cache = {}
  return function() {
    var key = String(resolver ? resolver.apply(this, arguments) : arguments[0])
    return _hasOwnProperty.call(cache, key)
      ? cache[key]
      : (cache[key] = func.apply(this, arguments))
  }
}
