import styled from 'styled-components';

const Content = styled('div')`
	padding: 100px 0;
	width: 50%;
	margin: 0 auto;

	h3 {
		color: #333;
		text-align: center;
		margin-bottom: 50px;
		font-size: 2.2rem;
	}

	a {
		margin-top: 50px;
		display: block;
		text-align: center;
		color: #ed902d;
	}

	@media (max-width: 1600px) {
		width: 60%;
	}

	@media (max-width: 1368px) {
		width: 75%;
	}

	@media (max-width: 1095px) {
		width: 90%;
	}

	@media (max-width: 912px) {
		width: 95%;
	}

	@media (max-width: 865px) {
		width: 100%;
		padding: 20px;

		a {
			margin-top: 25px;
		}
	}
`;

const Portfolio = styled('div')`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
`;

const InstagramPost = styled('img')`
	max-width: 100%;
	max-height: 300px;
	flex-grow: 1;
	object-fit: cover;
	border: 5px solid #333;
	border-radius: 1rem;
	display: block;
	transition: all 300ms ease;
	cursor: pointer;

	&:hover {
		transform: scale(0.8);
	}
`;

const Video = styled('video')`
	max-width: 100%;
	max-height: 300px;
	flex-grow: 1;
	object-fit: cover;
	border: 5px solid #333;
	border-radius: 1rem;
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

export const Styled = { Content, Portfolio, InstagramPost, Video, Hr };
