//  function

function hello() {
  console.log('hello Bob');
  console.log('hello Jhon');
  console.log('hello Susy');
}

hello();
hello();
hello();

// paramètre /arguments

function greet(name = 'Monsieur') {
  console.log('hello' + name);
}

greet();
greet(42);
greet('bob');
greet('susy');
