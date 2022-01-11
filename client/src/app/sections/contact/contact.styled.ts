import styled from 'styled-components';

import { Button, Container } from 'components';

const Contact = styled('div')`
	padding: 100px 0;
	overflow: hidden;
	background-color: #fff;
	width: 50%;
	margin: 0 auto;

	@media (max-width: 600px) {
		padding: 50px 0;
	}

	@media (max-width: 1655px) {
		width: 60%;
	}

	@media (max-width: 1382px) {
		width: 70%;
	}

	@media (max-width: 1186px) {
		width: 80%;
	}

	@media (max-width: 1036px) {
		width: 100%;
		padding: 100px 50px;
	}

	@media (max-width: 1036px) {
		padding: 100px 25px;
	}
`;

const Title = styled('h2')`
	font-size: 4rem !important;
	text-transform: capitalize !important;
	margin-bottom: 50px !important;
	text-align: center;
	font-weight: 900;
	color: #ed902d;

	@media (max-width: 484px) {
		font-size: 3rem !important;
	}

	@media (max-width: 372px) {
		font-size: 2rem !important;
	}
`;

const ContactContainer = styled(Container)`
	display: flex;
	flex-direction: column;
`;

const Form = styled('form')`
	width: 100%;
	margin-right: 50px;

	label {
		color: #333;
	}

	@media (max-width: 500px) {
		margin-right: 0;
	}
`;

const SendButton = styled(Button)`
	display: block;
	margin-left: auto;
`;

const ContactDetails = styled('div')`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-top: 50px;
	gap: 25px;

	@media (max-width: 980px) {
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		margin-bottom: 50px;
	}
`;

const Group = styled('div')`
	display: flex;

	p {
		margin: 5px 0 !important;
		line-height: 1;

		&:first-of-type {
			color: #ed902d;
			text-transform: uppercase;
			font-weight: 700;
		}
	}

	img {
		width: 50px;
		margin: 0 10px 0 0;
		height: 50px;
	}
`;

const Col = styled('div')`
	display: flex;
	flex-direction: column;
`;

export const Styled = {
	Contact,
	Title,
	ContactContainer,
	Form,
	SendButton,
	ContactDetails,
	Group,
	Col,
};
