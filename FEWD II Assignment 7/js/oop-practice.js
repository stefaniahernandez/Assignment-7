/*eslint-env browser*/

//STEP 1
/*
function Cat() {}
var Dog = function() {}
*/
//STEP 2
/*
function Cat() {
    "use strict";
    var tabby = new Cat();
}

var Dog = function() {
    "use strict";
    var pug = new Dog();
}
*/
//OR
/*
function Animal(cat, dog) {
    "use strict";
    this.cat = tabby;
    this.dog = pug;
}
*/
//STEP 3
/*
function Animal() {
    "use strict";
    window.console.log("The Animal has been created.");
}
*/
//STEP 4
/*
function Animal() {
    "use strict";
    window.console.log("The Animal has been created.");
}
var pup = new Animal();
window.console.log(pup.constructor);
*/
//STEP 5
/*
function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}
var cat = new Animal("cat", "tabby", "gray", "18 inches", "22 inches");
window.console.log(Cat.breed);
*/
//STEP 6
/*
function Animal(type, breed, color, height, length) {
    "use strict";
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
}
var x;
var cat = new Animal("cat", "tabby", "gray", "18 inches", "22 inches"); 
for (x in cat) {
        window.console.log(x);
}
*/