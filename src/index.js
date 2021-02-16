
exports.min = function min(array) {
  if (array) {
    return Math.min(...array);
  } else {
    return 0;
  }
}

exports.max = function max(array) {
  if (array) {
    return Math.max(...array);
  } else {
    return 0;
  }
}

exports.avg = function avg(array) {
  if (array) {
    return array.reduce((a, b) => (a + b)) / array.length;
  } else {
    return 0;
  }
}
