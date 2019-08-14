/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when you don't use apply or call or bind, "this" applies to the window or global object
* 2. Implicit Binding is when this is implied, whatever is left of the . is "this"
* 3. New Binding is when you pass a new object through "this"
* 4. Explicit binding is when you use call , apply, or bind to pass "this"
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
printMe = function () 
{ console.log(this); 
} 
printMe()



// Principle 2
// code example for Implicit Binding
let MyObject = function () {
    this.name = 'Coding';
    this.property = 'property';
};
MyObject.prototype.dostuff = function(action) {
    console.log(this.name + ' is ' + action + '!');
}
let obj = new MyObject();

obj.dostuff('awesome');


// Principle 3
// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();



// Principle 4
// code example for Explicit Binding
let nameObj = { 
    firstName:"Richard", 
    lastName:"Machado" 
  };
  
  let greeting = function(city, state, country){
      return "Welcome, "+ this.firstName + " " + this.lastName + ", to " + city + ", " + state + ", " + country;
  };
  
  console.log(greeting.call(nameObj,"San Diego","CA","US"));