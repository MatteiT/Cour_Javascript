//* L'héritage de prototype (prototypal inheritance model)
//* Le JS utilise l'héritage de prototype. Cela signifie que toutes les fonctions/classes constructeurs ont une propriété qui est partagée par chaque instance du constructeur/classe. Donc chaque propriétés et méthodes, ou prototype est accessible par chaque instance. La prop "prototype" retourne un objet
// function Account(name, initialBalance) {
//   this.name = name;
//   this.balance = initialBalance;
//   this.deposit = function (amount) {
//     this.balance += amount;
//     console.log(`Bonjour ${this.name}, votre solde est de ${this.balance}`);
//   };
// }

// // console.log(Account.prototype);
// // //console.log(jhon.bank);

function Account(name, initialBalance) {
  this.name = name;
  this.balance = initialBalance;
}

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  console.log(`Bonjour ${this.name}, votre solde est de ${this.balance}`);
};

Account.prototype.bank = 'LCL';
const jhon = new Account('jhon', 200);
const bob = new Account('bob', 0);
console.log(jhon);
console.log(bob);
jhon.deposit(300);
bob.deposit(300);
