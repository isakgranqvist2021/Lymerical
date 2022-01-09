import styled, { css } from 'styled-components';

import { SelectProps } from './select.types';

const Select = styled('select')<SelectProps>`
	width: 100%;
	padding: 0.66rem;
	border: 1px solid lightgray;
	outline: none;
	transition: all 300ms ease;
	border-radius: 1rem;

	${(props) =>
		props.hasError &&
		css`
			border-color: #cf3030 !important;
		`}
`;
const Option = styled('option')``;

export const Styled = { Select, Option };
