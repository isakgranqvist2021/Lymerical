import styled from 'styled-components';

const Testimonials = styled('div')`
	padding: 100px 0;
	background-color: #333;

	h2 {
		color: #ed902d;
		text-align: center;
		margin-bottom: 100px;
		text-transform: capitalize;
	}

	.swiper-button-prev,
	.swiper-button-next {
		color: #ed902d;
	}
`;

const Slide = styled('div')`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	color: #fff;
	cursor: grab;

	img {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-bottom: 20px;
	}

	h3 {
		margin-top: 0;
		margin-bottom: 10px;
	}
`;

export const Styled = { Testimonials, Slide };
