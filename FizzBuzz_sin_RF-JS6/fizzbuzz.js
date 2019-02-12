function GenerarfizzbuzzDel1al100() {

console.log(exports.recorrer(1,100));

}

exports.getResult = function(value) {
  var results = [];
  if (value % 3 === 0) results.push('Fizz');
  if (value % 5 === 0) results.push('Buzz');
  if (!results.length) results.push(value);
  return results;
};
exports.recorrer = function(min, max) {
  var vec = [];

  for (var i = min; i < max; i++) {
    vec[i] = exports.getResult(i);
  }

  return vec;
};
fizzbuzz()