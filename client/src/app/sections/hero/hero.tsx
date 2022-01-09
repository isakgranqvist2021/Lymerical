import { useEffect } from 'react';
import AOS from 'aos';

import { Button, Link, Text } from 'components';

import { Styled } from './hero.styled';

export const Hero = () => {
	const onClickHandler = (hash: string) => {
		window.location.hash = hash;
	};

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<Styled.Hero id='Home' aria-label='Hero section' tabIndex={0}>
			<Styled.HeroContainer>
				<Text variant='h1'>
					Lymerical
					<br />
				</Text>

				<Text variant='subtitle1'>En digital marknadsföringsbyrå i Malmö</Text>
				<Button
					aria-label='Bring me to contact'
					outlined
					data-aos='fade-right'
					onClick={() => onClickHandler('#Contact')}>
					Kontakta Oss
				</Button>
			</Styled.HeroContainer>
		</Styled.Hero>
	);
};
