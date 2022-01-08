import { useEffect } from 'react';
import AOS from 'aos';

import { Text } from 'components';

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
				<Styled.FlexItem>
					<Text text='isakgranqvist.com' variant='h2' data-aos='fade-down' />
					<Text variant='body1' data-aos='fade-up'>
						The primary purpose of my business is to deliver reliable, scalable,
						and high-quality software - at affordable prices.
					</Text>
					<Text variant='body1' data-aos='fade-up'>
						I mostly deliver custom software and applications tailored to
						specific business requirements. Primarily web applications.
					</Text>
					<Text variant='body1' data-aos='fade-up'>
						Software infrastructure is an essential part of many businesses and
						reliability should be the highest priority for anyone seeking
						longevity.
					</Text>
				</Styled.FlexItem>
				<Styled.FlexItem data-aos='fade-left' aria-label='Info icon'>
					<svg
						width='1162'
						height='1162'
						viewBox='0 0 1162 1162'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M581 0C260.143 0 0 260.143 0 581C0 901.857 260.143 1162 581 1162C901.857 1162 1162 901.857 1162 581C1162 260.143 901.857 0 581 0ZM482.569 775.151C509.876 688.533 561.585 584.777 570.736 558.535C583.953 520.431 560.52 503.533 486.491 568.654L470.029 537.667C554.468 445.821 728.332 425.05 669.167 567.347C632.225 656.191 605.789 716.179 590.683 762.466C568.654 829.91 624.285 802.555 678.753 752.25C686.161 764.354 688.582 768.276 695.99 782.22C575.045 897.355 440.785 907.522 482.569 775.151V775.151ZM712.161 379.635C686.403 401.568 648.251 401.084 626.899 378.57C605.547 356.056 609.13 320.083 634.839 298.15C660.597 276.217 698.749 276.75 720.101 299.215C741.356 321.777 737.87 357.751 712.161 379.635Z'
							fill='#ffffff'
						/>
					</svg>
				</Styled.FlexItem>
			</Styled.AboutContainer>
		</Styled.About>
	);
};
