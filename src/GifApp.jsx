import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifApp = () => {
	const [categories, setCategories] = useState(['fishing']);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);
		// setCategories( cat =>[...categories, "valorant"])
	};

	return (
		<>
			<h1>GifApp</h1>

			<AddCategory
				// setCategories={setCategories}
				onNewCategory={(value) => onAddCategory(value)}
			/>

			{/* <button onClick={onAddCategory}>Agregar</button> */}

			{categories.map((category) => (
				<GifGrid
					key={category}
					category={category}
				/>
			))}
		</>
	);
};
