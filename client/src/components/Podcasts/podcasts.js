import React, { Component } from 'react';
import PodcastCard from './podcasts_card.js'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import AddButton from '../AddForm/add_button.js';
import AddForm from '../AddForm/add_form.js';
import next from '../../images/next.png';
import back from '../../images/back.png';
import Background from '../Background/background';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './podcasts.css'

class Podcasts extends Component {

	constructor(props) {
		super(props);

		this.state = {
			podcasts: [],
			addButtonClicked: false,
		}
	}

	componentDidMount = () => {
		this.fetchPodcasts();
	}

	//fetch podcasts from database
	fetchPodcasts = () => {
		fetch('/api/podcasts')
			.then(res => res.json())
			.then(podcasts => this.setState({podcasts}, () => console.log(podcasts)))
			.catch(err => console.log(err));
	}

	//remove podcast by id from state to refresh component
	deletePodcastFromState = (id) => {
		let newPodcasts = this.state.podcasts;
		for(let i = 0; i < this.state.podcasts.length; i++){
			if(newPodcasts[i]['_id'] === id){
				newPodcasts.splice(i, 1);
			}
		}
		this.setState({podcasts: newPodcasts});
	}

	//show addform based on addButtonClicked
	showAddForm = () => {
		this.setState({addButtonClicked: !this.state.addButtonClicked});
	}

	//add podcast to state to refreshc component
	addPodcastToState = (podcast) => {
		this.setState({addButtonClicked: !this.state.addButtonClicked});
		this.fetchPodcasts();
	}

	render() {
		return (
			<div id='podcasts'>
				<div id='add-container'>
					<AddButton showAddForm={this.showAddForm} />
					<AddForm addButtonClicked={this.state.addButtonClicked} addPodcastToState={this.addPodcastToState} />
				</div>
				<CarouselProvider
			        naturalSlideWidth={100}
			        naturalSlideHeight={700}
			        totalSlides={this.state.podcasts.length}
			        visibleSlides={4}
			        step={3}
			     >
			     	<Slider className='slider'>
			     		{this.state.podcasts.map((podcast, i) => {
							return <Slide key={podcast._id} index={i}><PodcastCard i={i} deletePodcastFromState={this.deletePodcastFromState} podcast={podcast} /></Slide>
						})}
			     	</Slider>
			     	<ButtonBack id='back'><img alt='back' src={back}/></ButtonBack>
			     	<ButtonNext id='next'><img alt='next' src={next}/></ButtonNext>
			     	<Background />
			     </CarouselProvider>
			</div>
		);
	}
}

export default Podcasts;