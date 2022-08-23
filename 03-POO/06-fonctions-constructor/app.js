//* Blue print (plan)
//* Fabriques (factory functions) et constructeurs (constructor functions)

//* Fabriques

function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(
        `Mon nom complet est ${this.firstName} ${this.lastName} et j'ai 25ans`
      );
    },
  };
}
// constructor
// new créé un nouvel object / pointer vers lui

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `Mon nom complet est ${this.firstName} ${this.lastName} et j'ai 25ans`
    );
  };
  console.log(this);
}
const jhon = new Person('jhon', 'doe');
jhon.fullName();
