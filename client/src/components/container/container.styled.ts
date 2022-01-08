import styled from 'styled-components';

const Container = styled('section')`
	width: 75%;
	margin: 0 auto;

	@media (max-width: 600px) {
		width: 90%;
	}
`;

export const Styled = { Container };
