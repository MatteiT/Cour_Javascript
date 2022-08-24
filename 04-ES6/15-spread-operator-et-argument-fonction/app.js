console.log(Math.max(4, 5, 6, 88));

const numbers = [23, 45, 66, 88, 2345];

// console.log(Math.max(...numbers));

const jhon = ['jhon', 'doe'];

const sayHello = (name, lastName) => {
  console.log(`salut ${name} ${lastName}`);
};

sayHello(jhon[0], jhon[1]);
sayHello(...jhon);
