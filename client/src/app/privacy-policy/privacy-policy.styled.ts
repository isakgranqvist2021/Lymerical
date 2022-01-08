import styled from 'styled-components';

const PrivacyPolicy = styled('div')`
	padding: 3rem;

	ul {
		padding: 1rem 2rem 0 2rem;

		li {
			margin-bottom: 5px;
		}
	}
`;

const Header = styled('header')`
	color: gray;
	font-size: 0.9rem;
	padding: 20px 0;
`;

const Section = styled('section')`
	padding: 20px 0;

	h2 {
		margin-bottom: 10px;
	}
`;

export const Styled = { PrivacyPolicy, Header, Section };
