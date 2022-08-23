//* call - s'éxécute instantanément, 1er argument - this, 2ème argument - liste d'items

const jhon = {
  name: 'jhon',
  age: 24,

  greet: function () {
    console.log(this);
    console.log(`Bonjour ${this.name}, j'ai ${this.age}`);
  },
};

const susan = {
  name: 'susan',
  age: 21,
};

function greet() {
  console.log(this);
  console.log(`Bonjour ${this.name}, j'ai ${this.age}`);
}
// jhon.greet();

// susan.greet();
const secondGreet = jhon.greet;
secondGreet();

//* call

greet.call(jhon);
greet.call(susan);
greet.call({ name: 'peter', age: 25 });
jhon.greet.call(susan);
