import React, { Component } from 'react';
import './add_form.css';

class AddForm extends Component {

  constructor(){
    super();
    this.state = {
      title: '',
      genre: '',
      description: '',
      img_url: ''
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit = (e) => {
    fetch(`/api/podcasts`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));

    console.log(this.state); 
    this.props.addPodcastToState(this.state);
    this.setState({
      title: '',
      genre: '',
      description: '',
      img_url: ''
    });

    e.preventDefault();
  }

  render() {
    return (
      <div className="AddForm">
      	{this.props.addButtonClicked 
          ? 
          <div id='addFormWrapper'>
            <form onSubmit={this.handleSubmit} id='addForm' autocomplete='off'>
              <label htmlFor='title'>
                Title:
              </label>
              <input value={this.state.title} onChange={this.handleChange} type="text" name="title" id='title' />
              <label htmlFor='genre'>
                Genre:
              </label>
              <input value={this.state.genre} onChange={this.handleChange} type="text" name="genre" id='genre' />
              <label htmlFor='description'>
                Description:
              </label>
              <input value={this.state.description} onChange={this.handleChange} type="text" name="description" id='description' />
              <label htmlFor='img_url'>
                Image URL:
              </label>
              <input value={this.state.img_url} onChange={this.handleChange} type="text" name="img_url" id='img_url' />
              <input type="submit" value="Submit" />
            </form>
          </div>
          : null}
      </div>
    );
  }
}

export default AddForm;
