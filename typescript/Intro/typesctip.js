// boolean
var isCool = true;
//number
var age = 56;
// string
var eyeColor = 'brown';
var favoriteQuote = "I'm not old, i'm only " + age;
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Objects
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noooo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size.Small;
console.log(sizeName);
// Any - !!!!!!!!!!!! BE CAREFUL
var whatever = 'ahhhh nooooo!!!!';
whatever = basket;
// void
var sing = function () {
    console.log('lalallalala');
};
// never
var error = function () {
    throw Error('ooops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
fightRobotArmy({ count: 1, type: 'dragon' });
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT!');
    return 5;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalallal'; //default public
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('Raaaaaaar');
lion.greet();
console.log(lion.greet());
// lion.sing
// Union
var confused = 1;
// inferred
// let x = 4
// x = 'hello'
