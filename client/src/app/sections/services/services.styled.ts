import styled from 'styled-components';

const Services = styled('div')`
	padding: 100px 0;
	background-color: #333;
`;

const Grid = styled('div')`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 20px;
`;

const GridItem = styled('div')`
	color: #fff;

	@media (max-width: 826px) {
		text-align: center;
		margin: 0 auto;
	}

	p {
		max-width: 40ch;
	}
`;

export const Styled = { Services, Grid, GridItem };
