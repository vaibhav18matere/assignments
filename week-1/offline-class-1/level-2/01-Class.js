// class => structure that is re-usable at multiple places; used to group

class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


let dog = new Animal("Dog", 4);
console.log(dog);


let rat = new Animal("Rat", 2);
console.log(rat);


// what is "static function" ?