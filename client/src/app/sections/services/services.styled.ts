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
	text-align: center;
	margin: 0 auto;

	img {
		width: 50px;
		height: 50px;
	}

	p {
		max-width: 40ch;
	}
`;

export const Styled = { Services, Grid, GridItem };
