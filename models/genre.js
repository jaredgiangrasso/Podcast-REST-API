var mongoose = require('mongoose');

//Genre Schema
var genreSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
})

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//Get Genres
module.exports.getGenres = (callback, limit) => {
	Genre.find(callback).limit(limit);
}

//Add Genre
module.exports.addGenre = (genre, callback) => {
	Genre.create(genre, callback);
}

//Update Genre
module.exports.updateGenre = (id, genre, options, callback) => {
	var query = {_id: id};
	var update = {
		name: genre.name
	} 
	Genre.findOneAndUpdate(query, update, options, callback);
}

//Delete Genre
module.exports.deleteGenre = (id, callback) => {
	var query = {_id: id};
	Genre.remove(query, callback);
}