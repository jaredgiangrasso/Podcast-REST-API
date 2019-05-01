import React from 'react';
import add from '../../images/add.svg';
import './add_button.css';

let addButton = (props) => {
  return (
    <div className="add">
    	<button onClick={() => props.showAddForm()} className='addButton' type='button'>
    		<div id='addIconWrapper' />
    		<img src={add} alt='addition icon' id='addIcon' />
    		Add Podcast
    	</button>
    </div>
  );
}

export default addButton;