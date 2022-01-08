import styled from 'styled-components';

import { Container } from 'components';

const Footer = styled('footer')`
	padding: 20px 0;
	background-color: #333;
	border-top: 1px solid #3d3d3d;
`;

const FooterContent = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #919191;

	@media (max-width: 480px) {
		flex-direction: column;

		p {
			margin-top: 20px;
		}
	}
`;

const LinkGroup = styled('div')`
	display: flex;

	a {
		line-height: 1.4;
		color: #919191;
		text-decoration: none;
		cursor: pointer;

		&:hover {
			text-decoration: underline;
		}

		&:not(:last-of-type) {
			margin-right: 20px;
		}
	}

	@media (max-width: 480px) {
		a {
			display: block;
			margin: 20px 0;
		}
	}
`;

export const Styled = { Footer, FooterContent, LinkGroup };
