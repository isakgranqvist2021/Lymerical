import styled from 'styled-components';

import { Button, Container } from 'components';

const Contact = styled('div')`
	padding: 100px 0;
	overflow: hidden;
	background-color: #fff;

	@media (max-width: 600px) {
		padding: 50px 0;
	}
`;

const ContactContainer = styled(Container)`
	display: grid;
	grid-template-columns: 1fr 2fr;

	@media (max-width: 980px) {
		grid-template-columns: 1fr;
	}
`;

const Form = styled('form')`
	width: 100%;
	margin-right: 50px;

	input,
	textarea {
		border: 1px solid lightgray;
	}

	label {
		color: #333;
	}

	@media (max-width: 500px) {
		margin-right: 0;
	}
`;

const Social = styled('div')`
	width: 100%;
	margin-right: 50px;

	h3 {
		font-size: 3rem;
		font-weight: 900;
		color: #333;
	}

	@media (max-width: 1100px) {
		margin: 0 0 100px 0 !important;
		text-align: center;
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 1100px) {
		margin: 0 0 50px 0 !important;
	}

	@media (max-width: 500px) {
		h3 {
			font-size: 2rem;
		}
	}
`;

const SendButton = styled(Button)`
	display: block;
	margin-left: auto;
`;

const ContactDetails = styled('div')`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 25px;

	@media (max-width: 980px) {
		flex-direction: row;
		justify-content: center;
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

	span {
		margin: 5px 10px 0 0;
		color: #ed902d;
	}
`;

const Col = styled('div')`
	display: flex;
	flex-direction: column;
`;

export const Styled = {
	Contact,
	ContactContainer,
	Form,
	Social,
	SendButton,
	ContactDetails,
	Group,
	Col,
};
