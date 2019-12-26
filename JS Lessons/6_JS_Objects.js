const person = Object.create(
  {
    calculaateAge() {
      console.log("Age", new Date().getFullYear() - this.birthYear);
    }
  },
  {
    name: {
      value: "Viktor",
      enumerable: true,
      writable: true,
      configurable: true
    },
    birthYear: {
      value: 1989,
      enumerable: false,
      writable: false,
      configurable: false
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      set(value) {
        console.log("Set age", value);
      }
    }
  }
);

// const person = {
//     name: "Viktor",
//     birthYear: 1989
// }

//person.name = "Maxim";

for (let key in person) {
  console.log("Key", key, person[key]);
}
