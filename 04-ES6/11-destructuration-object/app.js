//* échanger des variables avec la déstructuration
const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: { sister: 'Jane' },
};

// oldschool

// const firstName = bob.first;
// const last = bob.last;
// const sister = bob.siblings.sister;

// destructuration

// const { first: firstname, last, siblings, zip } = bob;
// console.log(firstname, last, siblings, zip);

const {
  first,
  last,
  siblings: { sister: favoriteSiblings },
} = bob;
console.log(favoriteSiblings, first, last);
