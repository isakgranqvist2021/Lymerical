import styled, { css } from 'styled-components';

import { TextareaProps } from './textarea.types';

const Textarea = styled('textarea')<TextareaProps>`
	width: 100%;
	padding: 0.66rem;
	border: none;
	outline: none;
	transition: all 300ms ease;
	resize: none;
	height: 11rem;

	${(props) =>
		props.hasError &&
		css`
			border-color: rgb(207, 48, 48) !important;
		`}
`;

export const Styled = { Textarea };
