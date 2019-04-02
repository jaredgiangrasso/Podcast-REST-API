import React from 'react';
import './Input.css';

let Input = (props) => {
	return (
		<div className='form-group'>
			<label htmlFor={props.name}>{props.name}</label>
			<input
				className='form-input'
				id={props.name}
				name={props.name}
				type={props.type}
				value={props.value}
				onChange={props.handleChange}
			/>
		</div>
	);
}

export default Input;