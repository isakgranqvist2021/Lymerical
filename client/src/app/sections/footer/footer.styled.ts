import styled from 'styled-components';

import { Container } from 'components';

const Footer = styled('footer')`
	padding: 50px 0;
	background-color: #333;
	border-top: 1px solid #3d3d3d;
`;

const FooterContent = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #919191;

	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

const Icons = styled('div')`
	display: flex;
	gap: 20px;
	margin-bottom: 25px;

	a img {
		width: 30px;
		height: 30px;
	}
`;

export const Styled = { Footer, FooterContent, Icons };
