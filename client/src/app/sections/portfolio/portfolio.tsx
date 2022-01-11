import { useState, useEffect } from 'react';

import { Container, Text } from 'components';
import { Media } from 'models';
import { fetchInstagramPhotos } from 'services';

import { Styled } from './portfolio.styled';

export const Portfolio = () => {
	const [instagramPhotos, setInstagramPhotos] = useState<Media[] | null>(null);

	useEffect(() => {
		(async () => {
			const res = await fetchInstagramPhotos();
			if (res.success) {
				setInstagramPhotos(res.data.slice(0, 4));
			}
		})();
	}, []);

	if (!instagramPhotos) return <Styled.Hr />;

	return (
		<Container>
			<Styled.Content>
				<Text text='Senaste inlägg på instagram' variant='h3' />
				<Styled.Portfolio id='Portfolio'>
					{instagramPhotos.map((photo, i) =>
						!photo.media_url.includes('video') ? (
							<Styled.InstagramPost key={photo.id} src={photo.media_url} />
						) : (
							<Styled.Video key={photo.id} controls>
								<source src={photo.media_url} />
							</Styled.Video>
						)
					)}
				</Styled.Portfolio>

				<a
					href='https://www.instagram.com/lymercial/'
					target='_blank'
					rel='noreferrer'>
					Se alla inlägg
				</a>
			</Styled.Content>
		</Container>
	);
};
