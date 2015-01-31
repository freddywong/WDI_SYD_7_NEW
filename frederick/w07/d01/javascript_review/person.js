var Person = function(attributes) {
  this.name = attributes.name;
  this.age = attributes.age;
  this.gender = attributes.gender;
};

Person.prototype.speak = function(){
  console.log(this.name + " says I am saying something.")
};

Person.prototype.walk = function(){
  console.log(this.name + " says I am walking somewhere.")
};

var fred = new Person({
  name: "Freddy Wong",
  age: 27,
  gender: "Male"
});

fred.speak();
fred.walk();



