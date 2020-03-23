class Suffix {
  suffix(year) {
    this.year = year.toString();

    if (this.year.length > 0) {
      this.prefix = this.year.slice(this.year.length - 1);
    }

    switch (this.prefix) {
      case '0':
      case '6':
        this.suffix = 'cı';
        break;

      case '1':
      case '2':
      case '5':
      case '7':
      case '8':
        this.suffix = 'ci';
        break;

      case '3':
      case '4':
        this.suffix = 'cü';
        break;

      case '9':
        this.suffix = 'cu';
        break;

      default:
        break;
    }

    if (this.year.length > 1) {
      this.prefix = this.year.slice(this.year.length - 2);
    }

    switch (this.prefix) {
      case '10':
      case '30':
        this.suffix = 'cu';
        break;

      case '20':
      case '40':
      case '50':
      case '60':
      case '70':
      case '80':
      case '90':
        this.suffix = 'ci';
        break;

      default:
        break;
    }

    this.value = this.suffix;

    return this;
  }

  symbol() {
    this.value = `- ${this.value}`;

    return this;
  }

  symbolYear() {
    this.value += ` il`;

    return this;
  }

  get() {
    return `${this.year} ${this.value}`;
  }
}

const suffix = new Suffix();

console.log(
  suffix
    .suffix(263)
    .symbol()
    .symbolYear()
    .get()
);
