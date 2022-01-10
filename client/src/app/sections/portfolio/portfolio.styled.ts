import styled from 'styled-components';

const Portfolio = styled('div')`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
`;

const InstagramPost = styled('img')`
	width: 100%;
	object-fit: cover;
	display: block;
	transition: all 300ms ease;
	cursor: pointer;

	&:hover {
		transform: scale(0.8);
	}
`;

const Hr = styled('div')`
	border-top: 3px solid #ed902d;
`;

export const Styled = { Portfolio, InstagramPost, Hr };
