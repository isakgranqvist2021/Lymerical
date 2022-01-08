import styled from 'styled-components';

const subtitle1 = styled('p')`
	margin: 1.8rem 0;
	font-size: 1.3rem;
	font-weight: 500;
	max-width: 50ch;
	color: #333;

	@media (max-width: 360px) {
		font-size: 1rem;
	}

	@media (max-width: 325px) {
		font-size: 1rem;
	}
`;

const subtitle2 = styled('p')``;

const subtitle3 = styled('p')`
	font-size: 1.1rem;
	font-weight: 400;
	color: #f5f5f5;
`;

export const Subtitles = {
	subtitle1,
	subtitle2,
	subtitle3,
};
