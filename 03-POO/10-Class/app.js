//* apply - s'éxécute instantanément, 1er argument - this, 2ème argument - array d'items

const jhon = {
  name: 'jhon',
  age: 24,
};

const susan = {
  name: 'susan',
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Bonjour, je suis ${this.name}, j'ai ${this.age}ans et j'habite à ${city}, en ${country}`
  );
}

greet.call(jhon, 'valenciennes', 'France');
greet.apply(susan, ['valenciennes', 'France']);
