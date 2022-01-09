import styled, { css } from 'styled-components';

import { TextareaProps } from './textarea.types';

const Textarea = styled('textarea')<TextareaProps>`
	width: 100%;
	padding: 0.66rem;
	border: 1px solid lightgray;
	outline: none;
	transition: all 300ms ease;
	resize: none;
	height: 11rem;
	border-radius: 1rem;

	${(props) =>
		props.hasError &&
		css`
			border-color: #cf3030 !important;
		`}
`;

export const Styled = { Textarea };
