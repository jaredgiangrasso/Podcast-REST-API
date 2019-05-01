var mongoose = require('mongoose');

//Podcast Schema
var podcastSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	genre: {
		type: String,
		required: true
	},
	img_url: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	listen_url: {
		type: String
	}
})

var Podcast = module.exports = mongoose.model('Podcast', podcastSchema);

//Get Podcasts
module.exports.getPodcasts = (callback, limit) => {
	Podcast.find(callback).limit(limit);
}

//Get Podcast By ID
module.exports.getPodcastById = (id, callback) => {
	Podcast.findById(id, callback);
}

//Add Podcast
module.exports.addPodcast = (podcast, callback) => {
	Podcast.create(podcast, callback);
}

//Update Genre
module.exports.updatePodcast = (id, podcast, options, callback) => {
	var query = {_id: id};
	var update = {
		title: podcast.title,
		genre: podcast.genre,
		description: podcast.description,
		img_url: podcast.img_url,
		listen_url: podcast.listen_url,
		station: podcast.station,
	} 
	Podcast.findOneAndUpdate(query, update, options, callback);
}

//Delete Podcast
module.exports.deletePodcast = (id, callback) => {
	var query = {_id: id};
	Podcast.remove(query, callback);
}