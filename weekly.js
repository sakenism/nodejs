var Job = require('./job');

var job = new Job();

job.on('done', (details) => {
	console.log('Weekly email job is completed at', details.completedOn);
});

job.emit('start');