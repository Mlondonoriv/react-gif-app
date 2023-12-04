//
//
//
//
//

import { GifItem } from './GifItem';
import { useFetchGiffs } from '../hooks/useFetchGiffs';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGiffs(category);

	console.log({ images, isLoading });

	return (
		<>
			<h3>{category}</h3>
			{isLoading && <h2>cargando ...</h2>}

			<div className='card-grid'>
				{/* {images.map(({ id, title }) => (
					<li key={id}>{title}</li>
				))} */}
				{images.map((image) => (
					<GifItem
						key={image.id}
						// title={image.title}
						// url={image.url}

						{...image}
					/>
				))}
			</div>
		</>
	);
};
