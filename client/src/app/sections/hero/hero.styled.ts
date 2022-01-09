import styled from 'styled-components';

import { Container } from 'components';

const Hero = styled('div')`
	padding: 310px 0;
	position: relative;

	@media (max-width: 950px) {
		padding: 160px 0;
	}

	@media (max-width: 600px) {
		padding: 150px 0;
	}
`;

const HeroContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const CompanyLogo = styled('img')`
	max-width: 300px;

	@media (max-width: 320px) {
		max-width: 90%;
	}
`;

export const Styled = {
	CompanyLogo,
	Hero,
	HeroContainer,
};
