import styled, { css } from 'styled-components';

import { ButtonProps } from './button.types';

const button = css<ButtonProps>`
	border-width: 1px;
	border-style: solid;
	padding: 0.8rem 1.5rem;
	font-size: 0.75rem;
	text-align: center;
	text-transform: uppercase;
	cursor: pointer;
	font-weight: 700;
	letter-spacing: 1.1px;
	font-family: 'Arial';
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
	min-width: 100px;
	border-radius: 1rem;

	${(props) =>
		props.disabled &&
		css`
			pointer-events: none;
		`}

	@media (max-width: 600px) {
		width: 100%;
	}
`;

const primary = styled('button')<ButtonProps>`
	${button};

	background-color: #ed902d;
	border-color: #ed902d;
	color: #fff;

	&:hover {
		background-color: transparent;
		color: #ed902d;
	}

	${(props) =>
		props.outlined &&
		css`
			background-color: transparent;
			border-color: #ed902d;
			color: #ed902d;

			&:hover {
				background-color: #ed902d;
				color: #fff;
			}
		`}
`;

const secondary = styled('button')<ButtonProps>`
	${button};

	background-color: #fff;
	border-color: #fff;
	color: #333;

	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}

	${(props) =>
		props.outlined &&
		css`
			background-color: transparent;
			border-color: #fff;
			color: #fff;
		`}
`;

export const Styled = { primary, secondary };
