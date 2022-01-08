import styled, { css } from 'styled-components';

import { StyledAlertProps } from './alert.types';

const Alert = styled('div')<StyledAlertProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0.75rem 1rem;
	margin-bottom: 1rem;

	span {
		cursor: pointer;
		transition: all 300ms ease;
	}

	${(props) => css`
		${props.severity === 'danger' &&
		css`
			background-color: #cf3030;
			color: #fff;
		`}

		${props.severity === 'success' &&
		css`
			background-color: #69dd86;
			color: rgb(61, 61, 61);
		`}
	`}
`;

export const Styled = { Alert };
