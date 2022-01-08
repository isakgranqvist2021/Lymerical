import styled, { css } from 'styled-components';

import { ModalState } from './modal.types';

const Modal = {
	Container: styled('div')<ModalState>`
		position: fixed;
		inset: 0;
		z-index: 16;
		background-color: rgba(0, 0, 0, 0.5);
		opacity: 0;
		pointer-events: none;
		transition: all 300ms ease;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;

		${(props) =>
			props.open &&
			css`
				opacity: 1;
				pointer-events: all;
			`}
	`,
	Body: styled('div')<ModalState>`
		width: 100%;
		height: 100%;
		background-color: #fff;
		transition: all 300ms ease;
		transform: translateY(200px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		width: 50%;
		height: 70%;

		@media (max-width: 1100px) {
			width: 60%;
		}

		@media (max-width: 900px) {
			width: 75%;
		}

		@media (max-width: 900px) {
			width: 90%;
			height: 90%;
		}

		${(props) =>
			props.open &&
			css`
				transform: translateY(0);
			`}
	`,
	Header: styled('div')`
		padding: 1rem;
		background-color: rgb(207, 48, 48);
		color: #fff;
		display: flex;
		justify-content: space-between;
	`,
	Content: styled('div')`
		padding: 1rem;
		flex-grow: 1;
		overflow: auto;
	`,
	Footer: styled('div')`
		padding: 1rem;
	`,
};

export const Styled = { Modal };
