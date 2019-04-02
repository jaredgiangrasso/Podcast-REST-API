import React, { Component } from 'react';
import './podcasts_card.css'

class PodcastCard extends Component {

	constructor(props){
		super(props);

		this.state = {
			cardDescriptionClicked: false,
		}
	}

	//when description is clicked, set cardDescriptionClicked to true 
	//to display full description
	changeCardHeight = () => {
		return this.setState({cardDescriptionClicked: !this.state.cardDescriptionClicked});
	}

	//delete request to remove podcast by id from database
	deletePodcast = () => {
		fetch(`/api/podcasts/${this.props.podcast._id}`, {method: 'DELETE'})
		.then(res => res.json())
		.catch(err => console.log(err));

		this.props.deletePodcastFromState(this.props.podcast._id);
	}

	render() {
		let podcast = this.props.podcast;

		//change style based on status of this.state.cardDescriptionClicked
		const styles = {
			podcastCardStyle: {
				height: this.state.cardDescriptionClicked ? 500 : 400,
			},
			deleteButtonStyle: {
				top: this.state.cardDescriptionClicked ? 445 : 345
			},
			fadeStyle: {
				top: this.state.cardDescriptionClicked ? 420 : 325
			}
		}

		return (
			<div style={styles.podcastCardStyle} className='podcast-card'>
				<img alt='podcast' src={podcast.img_url} />
				<h1 className='title'>{podcast.title}</h1>
				<div style={styles.fadeStyle} className='fade'></div>
				<div onClick={() => this.changeCardHeight()} className='description-container'>
					<p className='description'>{podcast.description}</p>
				</div>
				<button onClick={() => this.deletePodcast()} style={styles.deleteButtonStyle} className='delete'>Remove</button>
			</div>
		);
	}
}

export default PodcastCard;