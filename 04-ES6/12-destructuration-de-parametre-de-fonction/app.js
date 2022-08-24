const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: { sister: 'Jane' },
};

const printPerson = ({ first, last, city }) => console.log(first, last, city);
printPerson(bob);
