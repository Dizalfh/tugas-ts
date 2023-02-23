class Animal {
  constructor(
    public name: string,
    public age: number,
    public isMammal: boolean
  ) {
    // this.name = name;
    // this.age = age;
    // this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name: string, age: number) {
    super(name, age, true);
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}
