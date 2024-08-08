const file = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const path = "./data.json";

// The commit dates

let pastDaysCount = 17;
let pastDate;



for (let i = pastDaysCount; i > 0; i--) {
	pastDate = moment().subtract(i, 'days').format();

	file.writeFile(path, { date: pastDate }, function (err) {
		if (err) {
			console.log(err);
		}
		console.log(pastDate + " " + i);
	});

	simpleGit().add([path]).commit(pastDate, { '--date': pastDate });
}

