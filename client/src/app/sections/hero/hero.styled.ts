import styled from 'styled-components';

import { Container } from 'components';

const Hero = styled('div')`
	padding: 310px 0;
	position: relative;

	@media (max-width: 950px) {
		padding: 160px 0;
	}

	@media (max-width: 600px) {
		padding: 50px 0;
	}
`;

const HeroContainer = styled(Container)``;

export const Styled = {
	Hero,
	HeroContainer,
};
