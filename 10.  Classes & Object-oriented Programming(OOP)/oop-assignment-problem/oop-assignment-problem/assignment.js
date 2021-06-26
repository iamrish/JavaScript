class Course {
    #price;
  constructor(title, len, price) {
    this.title = title;
    this.len = len;
    this.setPrice = price;
  }

  get priceInDollars() {
    return `Rs. ${this.#price}`;
  }

  set setPrice(p) {
    if (p < 0) this.#price = 0;
    else this.#price = p;
  }
  priceThroughput = () => +this.len / +this.#price;

  courseSummary = () =>
    `${this.title} course is of ${+this.len} months and priced at ${+this
      .priceInDollars}`;
}

class PracticalCourse extends Course {
  constructor(title, len, price, num) {
    super(title, len, price);
    this.numOfExercises = num;
  }
}

class TheoreticalCourse extends Course {
  publish() {
    console.log(
      `${this.title} is a theoretical course. It is of ${+this
        .len} months and priced at ${this.priceInDollars}`
    );
  }
}

const thCourse = new TheoreticalCourse("Machine Learning", "4", "50000");
thCourse.publish();
