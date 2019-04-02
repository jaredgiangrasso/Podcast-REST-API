import React, { Component } from 'react';
import Input from './Input'
import './add_form.css';

class AddForm extends Component {

  constructor(props){
    super(props);
    //state needs to be set for controlled form component
    this.state = {
      title: '',
      genre: '',
      description: '',
      img_url: ''
    }
  }

  //update state on form change
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    });
  }

  //post podcast to database
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

    //pass podcast up to parent component to set state and rerender components
    this.props.addPodcastToState(this.state);

    //set form state to clear inputs
    this.setState({
      title: '',
      genre: '',
      description: '',
      img_url: ''
    });

    e.preventDefault();
  }

  //render controlled form inputs
  render() {
    return (
      <div className="addForm">
      	{this.props.addButtonClicked 
          ? 
          <div id='addFormWrapper'>
            <form onSubmit={this.handleSubmit} id='form' autocomplete='on'>
              <Input value={this.state.title} handleChange={this.handleChange} type="text" name="title" />
              <Input value={this.state.genre} handleChange={this.handleChange} type="text" name="genre" />
              <Input id='description' value={this.state.description} onChange={this.handleChange} type="text" name="description" />
              <Input value={this.state.img_url} onChange={this.handleChange} type="text" name="img_url" />
              <Input type="submit" value="Submit" />
            </form>
          </div>
          : null}
      </div>
    );
  }
}

export default AddForm;
