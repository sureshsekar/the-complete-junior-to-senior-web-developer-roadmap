// boolean
let isCool: boolean = true

//number
let age: number = 56

// string
let eyeColor: string = 'brown'
let favoriteQuote: string = `I'm not old, i'm only ${age}`

// Array
let pets: string[] = ['cat', 'dog', 'pig']
let pets2: Array<string> = ['lion', 'dragon', 'lizard'] 

// Objects
let wizard: object = {
	a: 'John'
}

// null and undefined
let meh: undefined = undefined
let noooo: null = null

// Tuple
let basket: [string, number];
basket = ['basketball', 5]

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 }
let sizeName: number = Size.Small
console.log(sizeName);

// Any - !!!!!!!!!!!! BE CAREFUL
let whatever: any = 'ahhhh nooooo!!!!'
whatever = basket

// void
let sing = (): void => {
	console.log('lalallalala');
}

// never
let error = (): never => {
	throw Error('ooops')
}

// interface
interface RobotArmy {
	count: number,
	type: string,
	magic?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
	console.log('FIGHT!');
}

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
	console.log('FIGHT!');
}
fightRobotArmy({count: 1, type: 'dragon'})

// type assertions
interface CatArmy {
	count: number,
	type: string,
	magic: string
}

let  dog = {} as CatArmy
dog.count

// Function
let fightRobotArmy3 = (robots: RobotArmy): void => {
	console.log('FIGHT!');
}

let fightRobotArmy4 = (robots: {count: number, type: string, magic: string}): number => {
	console.log('FIGHT!');
	return 5
}

// Classes
class Animal {
	private sing: string = 'lalalallal' //default public
	constructor(sound: string) {
		this.sing = sound
}
greet() {
	return `Hello ${this.sing}`
}
}

let lion = new Animal('Raaaaaaar')
lion.greet()
console.log(lion.greet());
// lion.sing

// Union
let confused: string | number | boolean = 1

// inferred
// let x = 4
// x = 'hello'





























