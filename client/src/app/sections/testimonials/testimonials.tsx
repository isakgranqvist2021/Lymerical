import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import { Container, Text } from 'components';

import { TESTIMONIALS, BREAKPOINTS } from './testimonials.constants';
import { Styled } from './testimonials.styled';

export const Testimonials = () => {
	return (
		<Styled.Testimonials id='Testimonials'>
			<Container>
				<Text text='Vad våra kunder säger om oss' variant='h2' />

				<Swiper breakpoints={BREAKPOINTS} navigation modules={[Navigation]}>
					{TESTIMONIALS.map((testimonial, i) => {
						return (
							<SwiperSlide key={i}>
								<Styled.Slide>
									<img src={testimonial.logo} alt='' />
									<Text text={testimonial.name} variant='h3' />
									<Text text={testimonial.body} variant='body2' />
								</Styled.Slide>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Container>
		</Styled.Testimonials>
	);
};
