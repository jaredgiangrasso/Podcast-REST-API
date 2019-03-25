import React, { Component } from 'react';
import add from '../images/add.svg';
import './add_button.css';

class AddButton extends Component {
  render() {
    return (
      <div className="add">
      	<button onClick={() => this.props.showAddForm()} className='addButton' type='button'>
      		<div id='addIconWrapper' />
      		<img src={add} alt='addition icon' id='addIcon' />
      		Add Podcast
      	</button>
      </div>
    );
  }
}

export default AddButton;