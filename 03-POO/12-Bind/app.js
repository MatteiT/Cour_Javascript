//* bind - s'assigne, s'utilise plus tard, 1er argument - this, 2ème argument - liste d'items

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

// assigner pour appeler plutard

const susanGreet = greet.bind(susan, 'valenciennes', 'France');
// du code

susanGreet();
