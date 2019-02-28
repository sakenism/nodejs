const EventEmitter = require('events');

class Emitter extends EventEmitter {}

emitter = new Emitter();

emitter.on('knock', () => {
	console.log('Who\'s there?');
});

emitter.on('knock', () => {
	console.log('Go away');
});

emitter.emit('knock');
emitter.removeAllListeners();
emitter.emit('knock');