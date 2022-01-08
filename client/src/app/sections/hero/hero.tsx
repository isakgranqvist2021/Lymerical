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
				<Styled.HeroContent>
					<Text variant='h1'>
						High Quality Software
						<br /> At Affordable Prices
					</Text>

					<Text variant='subtitle1'>
						I build professional websites, modern mobile applications and
						reliable server software. <Link href='#Contact'>Contact me</Link>{' '}
						for a quote or further information.
					</Text>
					<Styled.HeroActions>
						<Button
							aria-label='Bring me to contact'
							outlined
							data-aos='fade-right'
							onClick={() => onClickHandler('#Contact')}>
							Get in touch
						</Button>
						<Button
							aria-label='Bring me to technologies'
							data-aos='fade-left'
							onClick={() => onClickHandler('#Technology')}>
							Technology
						</Button>
					</Styled.HeroActions>
				</Styled.HeroContent>
			</Styled.HeroContainer>
			<Styled.Phone src='/phone.svg' aria-label='Smartphone icon' />
			<Styled.Artboard
				src='/artboard.svg'
				aria-label='Webpage image with icons'
			/>
		</Styled.Hero>
	);
};
