import { useEffect } from 'react';
import AOS from 'aos';

import { Button, Text } from 'components';

import { Styled } from './about.styled';

export const About = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<Styled.About id='About' aria-label='About section' tabIndex={3}>
			<Styled.AboutContainer>
				<Text text='Välkommen!' variant='h2' data-aos='fade-down' />
				<Text variant='body1' data-aos='fade-up'>
					Warg Media är ditt företags nya raketbränsle som sätter kunden i
					fokus. Vår kärna är att utveckla webbplatser och andra digitaliserade
					lösningar som garanterar dig ett ökat resultat!
				</Text>

				<Button
					onClick={() => {
						window.location.hash = '#Portfolio';
					}}>
					Tidigare arbeten
				</Button>
			</Styled.AboutContainer>
		</Styled.About>
	);
};
