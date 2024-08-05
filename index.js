const file = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const path = "./data.json";
const Date = moment().format();
const data = {
	date: Date
};

file.writeFile(path, data, function (err) {
	if (err) {
		console.log(err);
	}
});

// The commit dates


let pastDaysCount = 1;
let pastDate;


for (let i = 0; i < pastDaysCount + 1; i++) {
	pastDate = moment().subtract(i, 'd').format();
	simpleGit().add([path]).commit(
		pastDate, { '--date': pastDate });
	console.log(pastDate);

}

