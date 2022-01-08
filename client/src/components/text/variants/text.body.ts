import styled from 'styled-components';

const body1 = styled('p')`
	line-height: 1.7;
	font-size: 1.1rem;
	letter-spacing: 1.1px;

	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}
`;

const body2 = styled('p')``;
const body3 = styled('p')``;

export const Bodies = { body1, body2, body3 };
