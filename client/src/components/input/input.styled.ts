import styled, { css } from 'styled-components';

import { InputProps } from './input.types';

const Input = styled('input')<InputProps>`
	width: 100%;
	padding: 0.66rem;
	border: none;
	outline: none;
	transition: all 300ms ease;

	${(props) =>
		props.hasError &&
		css`
			border-color: #ed902d !important;
		`}
`;

export const Styled = { Input };
