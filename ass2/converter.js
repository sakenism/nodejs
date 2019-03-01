const csv = require('csvtojson');
const path = require('path');
const fs = require('fs');

const csvFilePath = path.join(__dirname, 'customer-data.csv');
console.log(csvFilePath);

let tmp = 0;
let str = '';
let arr = []
csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
	//arr.push(jsonObj);
	console.log(jsonObj);
})

//console.log(arr);
// .on('done', (error) => {
// 	if (error) return process.exit(1);
// 	console.log(arr);
// 	fs.writeFile('customer-data.json', JSON.stringify(arr, null, 2), (err) => {
// 		if (error) return process.exit(1);
// 		console.log('done');
// 		process.exit(0);
// 	});
// });
