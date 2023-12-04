//
//
//

import { useState } from 'react';

//
export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setinputValue] = useState('');

	const onInputChange = ({ target }) => {
		setinputValue(target.value.charAt(0).toUpperCase() + target.value.slice(1));
	};

	const onSubmit = (event) => {
		event.preventDefault();

		if (inputValue.trim().length <= 1) return;

		// setCategories((categories) => [inputValue, ...categories]);
		setinputValue('');
		onNewCategory(inputValue.trim());
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='Buscar Gifs'
				value={inputValue}
				// onChange={(event) => onInputChange(event)}
				onChange={onInputChange}
			/>
		</form>
	);
};
