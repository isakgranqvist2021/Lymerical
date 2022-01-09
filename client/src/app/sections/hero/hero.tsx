import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import BIRDS from 'vanta/dist/vanta.birds.min';

import { Button, Text } from 'components';

import { VANTA_OPTIONS } from './hero.constants';
import { Styled } from './hero.styled';

export const Hero = () => {
	const [vantaEffect, setVantaEffect] = useState<any>(0);

	const heroRef = useRef(null);

	const onClickHandler = (hash: string) => {
		window.location.hash = hash;
	};

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	useEffect(() => {
		if (!vantaEffect) {
			const newState = {
				el: heroRef.current,
				...VANTA_OPTIONS,
			};

			setVantaEffect(BIRDS(newState));
		}

		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<Styled.Hero id='Home' aria-label='Hero section' ref={heroRef} tabIndex={0}>
			<Styled.HeroContainer>
				<Text variant='h1'>
					<Styled.CompanyLogo src='./static/images/logo.png' />
					<br />
				</Text>

				<Text variant='subtitle1'>En digital marknadsföringsbyrå i Malmö</Text>

				<Button
					aria-label='Bring me to contact'
					data-aos='fade-right'
					onClick={() => onClickHandler('#Contact')}>
					Kontakta Oss
				</Button>
			</Styled.HeroContainer>
		</Styled.Hero>
	);
};
