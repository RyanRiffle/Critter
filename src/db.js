const low = window.require('lowdb');
const FileSync = window.require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

window.db = db;

db.defaults({
	hops: [],
	yeast: [],
	grains: [],
	extract: [],
	recipes: []
});

exports.default = db;