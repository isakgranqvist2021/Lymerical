import { useState, useEffect } from 'react';

import { Media } from 'models';
import { fetchInstagramPhotos } from 'services';

import { Styled } from './portfolio.styled';

export const Portfolio = () => {
	const [instagramPhotos, setInstagramPhotos] = useState<Media[] | null>(null);

	useEffect(() => {
		(async () => {
			const res = await fetchInstagramPhotos();
			if (res.success) {
				setInstagramPhotos(res.data);
				console.log(res);
			}
		})();
	}, []);

	if (!instagramPhotos) return <Styled.Hr />;

	return (
		<Styled.Portfolio id='Portfolio'>
			{instagramPhotos?.map((photo) => (
				<Styled.InstagramPost key={photo.id} src={photo.media_url} />
			))}
		</Styled.Portfolio>
	);
};
