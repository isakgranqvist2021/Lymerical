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
					Välkommen till oss på Ly Mercial - en digital marknadsföringsbyrå i
					Malmö som ökar din försäljning. Vi är redo att välkomna ert företag
					till den digitala världen! Är ni det? Tveka inte, Kontakta oss redan
					idag!
				</Text>

				<Button
					onClick={() => {
						window.location.hash = '#Contact';
					}}>
					Kontakta Oss
				</Button>
			</Styled.AboutContainer>
		</Styled.About>
	);
};
