const fs = require('fs');

//create a file

fs.writeFile('example.txt', "this is an example", (err) => {
	if (err)
		console.log(err);
	else {
		console.log('File succesfully created');
		fs.readFile('example.txt', 'utf8', (err, file) => {
			if (err)
				console.log(err);
			else 
				console.log(file);
		});
	}
});
// console.log('example.txt');
// fs.rename('example.txt', 'example2.txt', (err) => {
// 	if (err)
// 		console.log(err);
// 	else
// 		console.log('Succesfully renamed file');
// });

// fs.appendFile('example2.txt', ' Some data being appended', (err) => {
// 	if (err)
// 		console.log(err);
// 	else
// 		console.log('Succesfully appended');
// });

fs.unlink('example.txt', (err) => {
	if (err)
		console.log(err);
	else
		console.log('Succesfully deleted a file');
});