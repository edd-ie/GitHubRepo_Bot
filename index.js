const file = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const path = "./data.json";

// The commit dates

let pastDaysCount = 20;
let pastDate;



for (let i = pastDaysCount; i > -1; i--) {
	pastDate = moment().subtract(i, 'day').format();

	file.writeFile(path, { date: pastDate }, function (err) {
		if (err) {
			console.log(err);
		}
		console.log({ date: pastDate });
	});

	simpleGit().add([path]).commit(pastDate, { '--date': pastDate }).push;

}

