const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  }
];

let ages = data
  .filter(animal => {
    return animal.type === "dog";
  })
  .map(val => val.age * 7)
  .reduce((acc, val) => acc + val);

console.log(ages);
