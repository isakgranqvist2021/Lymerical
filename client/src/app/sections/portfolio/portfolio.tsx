import { useState, useEffect } from 'react';

import { fetchInstagramPhotos } from 'services';

import { Styled } from './portfolio.styled';

export const Portfolio = () => {
	const [instagramPhotos, setInstagramPhotos] = useState<string[] | null>(null);

	useEffect(() => {
		(async () => {
			const res = await fetchInstagramPhotos();
			if (res.success) {
				setInstagramPhotos(res.data);
			}
		})();
	}, []);

	if (!instagramPhotos) return <Styled.Hr />;

	return (
		<Styled.Portfolio id='Portfolio'>
			{instagramPhotos?.map((photo) => (
				<Styled.InstagramPost src={photo} />
			))}
		</Styled.Portfolio>
	);
};
