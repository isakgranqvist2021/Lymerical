import styled from 'styled-components';

const Features = styled('div')`
	padding: 200px 0;
	display: flex;
	align-items: center;
	background-color: #333;

	@media (max-width: 1400px) {
		padding: 50px 0;
	}
`;

const Grid = styled('div')`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;

	@media (max-width: 1400px) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 820px) {
		grid-template-columns: 1fr;
	}
`;

const Card = styled('div')`
	display: flex;
	flex-direction: column;
	box-shadow: none;
	padding: 20px;
`;

const CardIcon = styled('span')`
	font-size: 1.5rem;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
	padding: 30px;
	border-radius: 50%;
	background-color: #fff;
	color: #333;
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Material Icons Outlined';
`;

export const Styled = { Features, Grid, Card, CardIcon };
