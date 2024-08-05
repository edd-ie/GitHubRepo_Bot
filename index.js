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


let pastDaysCount = 3;
let pastDate;


for (let i = pastDaysCount; i > -1; i--) {
	pastDate = moment().subtract(i, 'days').format();
	simpleGit().add([path]).commit(
		pastDate, { '--date': pastDate }).push();
}

