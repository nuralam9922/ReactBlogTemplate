import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function ImageComponent({ width = 140, height = 40, src }) {
	return (
		<LazyLoadImage
			effect="blur"
			src={src}
			width={width + '%'}
			style={{
				width: '100%',
				height: height,
				objectFit: 'cover',
			}}
			className={`bg-zinc-300 rounded-sm object-top object-cover `}
		/>
	);
}

export default ImageComponent;
