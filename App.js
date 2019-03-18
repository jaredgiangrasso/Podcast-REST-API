const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Genre = require('./models/genre.js');
Podcast = require('./models/podcast.js');	

mongoose.connect('mongodb://localhost/podcasts', { useMongoClient: true });
var db = mongoose.connection;

//ROUTES
//GET Home
app.get('/', (req, res) => {
	res.send('Please use /api/podcasts or /api/genres');
})

//GET Genres
app.get('/api/genres', (req, res) => {
	Genre.getGenres(function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});
})

//Add Genre
app.post('/api/genres', (req, res) => {
	var genre = req.body;
	Genre.addGenre(genre, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
})

//Update Genre
app.put('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, function(err, genre){
		if(err){
			throw err;
		}
		res.json(genre);
	});
})

//Delete Genres
app.delete('/api/genres/:_id', (req, res) => {
	Genre.deleteGenre(req.params._id, function(err, genres){
		if(err){
			throw err;
		}
		res.json(genres);
	});
})

//GET Podcasts
app.get('/api/podcasts', (req, res) => {
	Podcast.getPodcasts(function(err, podcasts){
		if(err){
			throw err;
		}
		res.json(podcasts);
	});
})

//Add Podcast
app.post('/api/podcasts', (req, res) => {
	var podcast = req.body;
	Podcast.addPodcast(podcast, function(err, podcast){
		if(err){
			throw err;
		}
		res.json(podcast);
	});
})

//GET Podcast By ID
app.get('/api/podcasts/:_id', (req, res) => {
	Podcast.getPodcastById(req.params._id, function(err, podcast){
		if(err){
			throw err;
		}
		res.json(podcast);
	});
})

//Update Podcast
app.put('/api/podcasts/:_id', (req, res) => {
	var id = req.params._id;
	var podcast = req.body;
	Podcast.updatePodcast(id, podcast, {}, function(err, podcast){
		if(err){
			throw err;
		}
		res.json(podcast);
	});
})

//Delete Genres
app.delete('/api/podcasts/:_id', (req, res) => {
	Podcast.deletePodcast(req.params._id, function(err, podcasts){
		if(err){
			throw err;
		}
		res.json(podcasts);
	});
})

app.listen(3000, () => console.log('Running on port 3000...'));