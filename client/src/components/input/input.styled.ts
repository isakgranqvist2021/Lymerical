import styled, { css } from 'styled-components';

import { InputProps } from './input.types';

const Input = styled('input')<InputProps>`
	width: 100%;
	padding: 0.66rem;
	border: 3px solid #ed902d;
	outline: none;
	transition: all 300ms ease;
	border-radius: 1rem;

	${(props) =>
		props.hasError &&
		css`
			border-color: #cf3030 !important;
		`}
`;

export const Styled = { Input };
