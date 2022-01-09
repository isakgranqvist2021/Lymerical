import styled from 'styled-components';

import { Container } from 'components';

const About = styled('div')`
	padding: 100px 0;
	display: flex;
	align-items: center;
	background-color: #333;
	flex-direction: column;
	justify-content: center;

	h2,
	p {
		color: #fff;
	}

	p {
		margin-bottom: 20px;
	}
`;

const AboutContainer = styled(Container)`
	text-align: center;
	height: 100%;
	max-width: 55%;

	@media (max-width: 900px) {
		flex-direction: column;
		gap: 3rem;
		max-width: 75%;
	}

	@media (max-width: 900px) {
		max-width: 90%;
	}
`;

export const Styled = { About, AboutContainer };
