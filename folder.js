const fs = require('fs');
// fs.mkdir('tutorial', (err) => {
// 	if (err)
// 		console.log(err);
// 	else {
// 		console.log('folder succesfully created');
// 		fs.rmdir('tutorial', (err) => {
// 			if (err)
// 				console.log(err);
// 			else 
// 				console.log('Succesfully deleted the folder');
// 		});

// 		fs.writeFile('./tutorial/example.txt', 'hello World', (err) => {
// 			if (err)
// 				console.log(err);
// 			else
// 				console.log('Succesfully created file');
// 		});
// 	}
// });

fs.readdir('tutorial', (err, files) => {
	if (err)
		console.log(err);
	else {
		for (let file of files) {
			fs.unlink('./tutorial/' + file, (err) => {
				if (err)
					console.log(err);
				else 
					console.log('Succesfully delete file');
			})
		}
	}
});