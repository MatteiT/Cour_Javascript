//* Blue print (plan)
//* Fabriques (factory functions) et constructeurs (constructor functions)

//* Fabriques
// const jhon = {
//   firstName: 'jhon',
//   lastName: 'Doe',
//   siblings: ['anna', 'peter'],
//   greet: function () {
//     console.log(`salut , je appelle ${this.firstName} ${this.lastName}`);
//   },
// };
// const bob = {
//   firstName: 'bob',
//   lastName: 'anderson',
//   siblings: ['anna', 'peter'],
//   greet: function () {
//     console.log(`salut , je appelle ${this.firstName} ${this.lastName}`);
//   },
// };

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
const jhon = createPerson('jhon', 'doe');
jhon.fullName();
const anna = createPerson('anna', 'lee');
anna.fullName();
const susy = createPerson('susy', 'fun');
susy.fullName();
