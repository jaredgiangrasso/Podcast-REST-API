import React, { Component } from 'react';
import PodcastCard from './podcasts_card.js'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import AddButton from './add_button.js';
import AddForm from './add_form.js';
import next from '../images/next.png';
import back from '../images/back.png';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './podcasts.css'

class Podcasts extends Component {

	constructor() {
		super();
		this.state = {
			podcasts: [],
			addButtonClicked: false,
		}
	}

	componentDidMount = () => {
		this.fetchPodcasts();
	}

	fetchPodcasts = () => {
		fetch('/api/podcasts')
			.then(res => res.json())
			.then(podcasts => this.setState({podcasts}, () => console.log(podcasts)))
			.catch(err => console.log(err));
	}

	deletePodcastFromState = (id) => {
		let newPodcasts = this.state.podcasts;
		for(let i = 0; i < this.state.podcasts.length; i++){
			if(newPodcasts[i]['_id'] === id){
				newPodcasts.splice(i, 1);
			}
		}
		this.setState({podcasts: newPodcasts});
	}

	showAddForm = () => {
		this.setState({addButtonClicked: !this.state.addButtonClicked});
	}

	addPodcastToState = (podcast) => {
		this.setState({addButtonClicked: !this.state.addButtonClicked});
		this.fetchPodcasts();
	}

	render() {
		return (
			<div id='podcasts'>
				<AddButton showAddForm={this.showAddForm} />
				<AddForm addButtonClicked={this.state.addButtonClicked} addPodcastToState={this.addPodcastToState} />
				<CarouselProvider
			        naturalSlideWidth={100}
			        naturalSlideHeight={700}
			        totalSlides={this.state.podcasts.length}
			        visibleSlides={7}
			        step={3}
			     >
			     	<Slider className='slider'>
			     		{this.state.podcasts.map((podcast, i) => {
							return <Slide key={podcast._id} index={i}><PodcastCard i={i} deletePodcastFromState={this.deletePodcastFromState} podcast={podcast} /></Slide>
						})}
			     	</Slider>
			     	<ButtonBack id='back'><img alt='back' src={back}/></ButtonBack>
			     	<ButtonNext id='next'><img alt='next' src={next}/></ButtonNext>
			     </CarouselProvider>
			</div>
		);
	}
}

export default Podcasts;