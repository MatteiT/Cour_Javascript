let car = new Object();

car.key = 'Michel';
car.model = 'toyota';
car.year = 2000;
car.colors = ['bleu', 'rouge', 'jaune'];
car.hybrid = true;

console.table(car);

const car1 = {
  key: 'Michel',
  make: 'toyota',
  model: 'yaris',
  year: 2000,
  colors: 'bleu',
  hybrid: true,
  stop() {
    return 'je stop ! ';
  },
  drive() {
    return 'je conduis';
  },
};

console.log(car1.make);
console.log(car1.stop());
console.log(car1.drive());
