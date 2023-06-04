const fs = require('fs');

const read = function (onData, render) {
  const path = 'resource/numbers';
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) console.log('Error: No such file');

    if (!err) {
      onData(data, render);
    }
  })
  return;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const productOfEachDigit = (number) => {
  const digits = number.toString().split('');

  return digits.reduce((multiply));
}

const getMaxProductOfSeries = (rawNumbers, render) => {
  const numbers = rawNumbers.replaceAll('\n', '');
  let max = 0;

  for (let start = 0; start < numbers.length; start++) {
    const currentSeries = +numbers.slice(start, start + 13);
    const currentProduct = productOfEachDigit(currentSeries);

    if (currentProduct > max) {
      max = currentProduct;
    }
  }
  render(max);
}

read(getMaxProductOfSeries, console.log);
exports.read = read;