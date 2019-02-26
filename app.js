const EventEmmitter = require('events');
const eventEmmitter = new EventEmmitter();

eventEmmitter.on('tutorial', (num1, num2) => {
	console.log(num1  + num2);
});

eventEmmitter.emit('tutorial', 1, 2);

class Person extends EventEmmitter {
	constructor(name) {
		super();
		this._name = name;
	}

	get name() {
		return this._name;
	}
}

let pedro = new Person('Pedro');
let chris = new Person('Chris');
chris.on('name', () => {
	console.log('my name is ' + chris.name);
});
pedro.on('name', () => {
	console.log('my name is ' + pedro.name);
});

pedro.emit('name');
chris.emit('name');