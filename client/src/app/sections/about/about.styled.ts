import styled from 'styled-components';

import { Container } from 'components';

const About = styled('div')`
	padding: 100px 0;
	min-height: 75vh;
	display: flex;
	align-items: center;
	background-color: #333;

	h2,
	p {
		color: #fff;
	}
`;

const AboutContainer = styled(Container)`
	display: flex;
	height: 100%;

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 3rem;
	}
`;

const FlexItem = styled('div')`
	flex-grow: 1;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;

	svg {
		width: 300px;
		height: 300px;
		max-width: 100%;
		fill: #ffffff;
		margin: 0 auto;
	}

	@media (max-width: 900px) {
		svg {
			margin-bottom: 2rem;
		}
	}
`;

export const Styled = { About, AboutContainer, FlexItem };
