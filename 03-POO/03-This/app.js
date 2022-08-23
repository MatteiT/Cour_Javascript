const jhon = {
  firstName: 'jhon',
  lastName: 'Doe',
  siblings: ['anna', 'peter'],
  greet: function () {
    console.log(`salut , je appelle ${this.firstName} ${this.lastName}`);
  },
};
const bob = {
  firstName: 'bob',
  lastName: 'anderson',
  siblings: ['anna', 'peter'],
  greet: function () {
    console.log(`salut , je appelle ${this.firstName} ${this.lastName}`);
  },
};

bob.greet();
jhon.greet();
