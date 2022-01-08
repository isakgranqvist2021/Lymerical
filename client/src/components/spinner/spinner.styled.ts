import styled from 'styled-components';

const Spinner = styled('div')`
	border: 2px solid #fff;
	border-top: 2px solid rgb(207, 48, 48);
	border-radius: 50%;
	animation: spin 2s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
	width: 15px;
	height: 15px;
	margin: 0 auto;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

export const Styled = { Spinner };
