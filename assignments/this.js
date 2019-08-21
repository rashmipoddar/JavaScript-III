/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or global object. When we do not define this it points to the global window object.
* 2. Whenever a function is called with a dot before it the object before the dot becomes this.
* 3. When a constructor function is used this refers to the specific object that was created using the new keyword with the constructor function.
* 4. When we use call or apply or bind we set the value of this to be whatever we want. The implicit value of this gets overridden.
*
* write out a code example of each explanation above
*/

// Principle 1
// Window or global object. When we do not define this it points to the global window object.
// code example for Window Binding
function myName(name) {
  console.log(this);
  return `My name is ${name}`;
}

myName('Rashmi');

// Principle 2
// Whenever a function is called with a dot before it the object before the dot becomes this.

// code example for Implicit Binding
myObject = {
  name: 'Rashmi',
  hobbies: ['Reading', 'Travelling'],
  introduce: function() {
    console.log(this);
    return `${this.name} likes ${this.hobbies[0]} and ${this.hobbies[1]}`;
  }
} 

myObject.introduce();

// Principle 3
// When a constructor function is used this refers to the specific object that was created using the new keyword with the constructor function.

// code example for New Binding
function Animal(animalAttributes){
  this.name = animalAttributes.name;
  this.species = animalAttributes.species;
  this.greet = function() {
    console.log(this);
    console.log(`Hi, my name is ${this.name}`); 
  }
}

let dog = new Animal({
  name: 'Bruno',
  species: 'Dalmation'
});

dog.greet();

let anotherDog = new Animal({
  name: 'Roxy',
  species: 'Pug'
})

anotherDog.greet();

// Principle 4
// When we use call or apply or bind we set the value of this to be whatever we want. The implicit value of this gets overridden.

// code example for Explicit Binding
anotherDog.greet.call(dog);