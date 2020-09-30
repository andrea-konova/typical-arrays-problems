
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    return Math.min(...array);
  }
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    return Math.max.apply(null, array);
  }
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    let sum = array.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
    let arrayLength = array.length;
    return sum / arrayLength;
  }
}


