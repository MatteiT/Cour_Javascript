//  les condfitionelles

if (2 > 1) {
  console.log('hello world');
}

const value = 2 > 1;
if (value) {
  console.log('hello world');
}

// else

if (value) {
  console.log('hello world');
} else {
  console.log('hello people');
}

// else if

const num1 = 4;
const num2 = 6;
const num3 = 6;
const result = num1 === num2;
if (num1 >= num2) {
  console.log('le premier nombre est le plus grand');
} else if (result) {
  console.log('les nombres égaux');
} else {
  ('le premier est plus petit');
}

//  * ! operator
const value2 = true;

if (!value2) {
  console.log('value est false');
}
