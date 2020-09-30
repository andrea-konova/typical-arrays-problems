
exports.min = function min (array) {
  if (!arguments) {
    return 0;
  } else if (array.length > 0) {
    return Math.min(...array);
  }
  
}

exports.max = function max (array) {
  if (arguments || arguments.length > 0) {
    return Math.max.apply(null, array);
  } else {
    return 0;
  }
  
}

exports.avg = function avg (array) {
  // return 0;
  let sum = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  let arrayLength = array.length;
  return sum / arrayLength;
}
