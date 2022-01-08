import styled from 'styled-components';

import { GridItemProps } from './tech.types';

const Container = styled('div')`
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	padding: 100px 0;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`;

const GridItem = styled('div')<GridItemProps>`
	height: 300px;
	background-image: url(${(props) => props.src});
	background-size: ${(props) => props.backgroundSize || 'cover'};
	background-repeat: no-repeat;
	background-position: center;

	@media (max-width: 680px) {
		height: 200px;
	}
`;

export const Styled = { Container, GridItem };
