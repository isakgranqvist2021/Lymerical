import styled from 'styled-components';

import { Container } from 'components';

const Footer = styled('footer')`
	padding: 20px 0;
	background-color: #333;
	border-top: 3px solid #3d3d3d;
`;

const FooterContent = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #919191;

	@media (max-width: 480px) {
		padding: 20px 0;
		flex-direction: column;
	}
`;

const Icons = styled('div')`
	display: flex;
	gap: 20px;

	a img {
		width: 30px;
		height: 30px;
	}

	@media (max-width: 480px) {
		margin-top: 20px;
	}
`;

export const Styled = { Footer, FooterContent, Icons };
