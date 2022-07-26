// return par féfaut est undefined

const wallheight = 80;

function calculate(value) {
  const newValue = value * 2.254;
  console.log('la valeuyr en cm est de ' + newValue + 'cm');

  return newValue;
}

const width = calculate(100);
const height = calculate(wallheight);

const dimensions = [width, height];
console.log(dimensions);
