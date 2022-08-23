class Counter {
  constructor(element, initialCount) {
    this.element = element;
    this.count = initialCount;
    this.initialValue = initialCount;
    this.btnPlus = this.element.querySelector('.plus');
    this.btnMinus = this.element.querySelector('.minus');
    this.btnReset = this.element.querySelector('.reset');
    this.valueDOM = this.element.querySelector('.number');

    const increment = this.increment.bind(this);
    const decrease = this.decrease.bind(this);
    const reset = this.reset.bind(this);

    this.valueDOM.textContent = this.count;

    console.log(this.btnReset);

    this.btnPlus.addEventListener('click', increment);
    this.btnMinus.addEventListener('click', decrease);
    this.btnReset.addEventListener('click', reset);
  }

  increment() {
    this.count++;
    this.valueDOM.textContent = this.count;
  }

  decrease() {
    this.count--;
    this.valueDOM.textContent = this.count;
  }

  reset() {
    this.count = this.initialValue;
    this.valueDOM.textContent = this.count;
  }
}

const firstCount = new Counter(document.querySelector('.container'), 100);
const secondCounter = new Counter(document.querySelector('.container2'), 5000);
