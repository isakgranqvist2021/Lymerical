import styled, { css } from 'styled-components';

import { MOBILE_NAV_BREAKPOINT } from './nav.constants';
import { NavState } from './nav.types';

const Nav = styled('nav')`
	background-color: rgb(207, 48, 48);
	height: 80px;
	position: fixed;
	top: 0;
	z-index: 10;
	width: 100%;

	.container {
		height: inherit;
		display: flex;
		align-items: center;
		justify-content: space-between;

		@media (max-width: ${MOBILE_NAV_BREAKPOINT}) {
		}
	}

	@media (max-width: ${MOBILE_NAV_BREAKPOINT}) {
		padding: 0 1rem;
	}
`;

const NavLinks = styled('div')<NavState>`
	@media (max-width: ${MOBILE_NAV_BREAKPOINT}) {
		position: fixed;
		background: rgb(255, 255, 255);
		top: 0;
		left: 0;
		height: 100%;
		overflow: hidden;
		width: 0;
		transition: all 300ms ease;
		z-index: 15;
		display: flex;
		flex-direction: column;

		ul {
			display: flex;
			flex-direction: column;
		}

		${(props) =>
			props.open &&
			css`
				width: 280px;

				@media (max-width: 321px) {
					width: 225px;
				}
			`}
	}
`;

const Link = styled('a')`
	color: #fff;
	text-transform: uppercase;
	display: inline-block;
	text-decoration: none;
	font-weight: 600;
	letter-spacing: 1.1px;
	padding: 5px 0;
	transition: all 200ms ease;
	position: relative;

	&::before,
	&::after {
		content: '';
		background-color: #fff;
		height: 2px;
		position: absolute;
		width: 0;
		top: 100%;
		transition: all 200ms ease;
	}

	&::before {
		left: 0;
	}

	&::after {
		right: 0;
	}

	&:hover,
	&.is-current {
		&::before,
		&::after {
			width: 50%;
		}
	}

	&:not(:first-of-type) {
		margin-left: 1rem;
	}

	@media (max-width: ${MOBILE_NAV_BREAKPOINT}) {
		margin-left: 0 !important;
		padding: 1rem;
		color: #333;

		&:not(:last-of-type) {
			border-bottom: 1px solid #f5f5f5;
		}

		&::before,
		&::after {
			display: none;
		}
	}
`;

const Backdrop = styled('div')<NavState>`
	display: none;
	position: fixed;
	inset: 0;
	background-color: rgba(0, 0, 0, 0);
	z-index: 14;
	pointer-events: none;
	transition: all 300ms ease;

	@media (max-width: ${MOBILE_NAV_BREAKPOINT}) {
		display: block;

		${(props) =>
			props.open &&
			css`
				background-color: rgba(0, 0, 0, 0.568);
				pointer-events: all;
			`}
	}
`;

const Logo = styled('img')`
	display: block;
	height: 100%;
	max-width: 200px;

	@media (max-width: ${MOBILE_NAV_BREAKPOINT}) {
		display: block;
		height: 50%;
	}
`;

const Bars = {
	Container: styled('div')<NavState>`
		display: none;
		height: 35px;
		width: 45px;
		flex-direction: column;
		justify-content: space-between;

		@media (max-width: ${MOBILE_NAV_BREAKPOINT}) {
			display: flex;
		}
	`,
	Line: styled('div')<NavState>`
		height: 3px;
		width: 100%;
		background-color: #fff;
		transition-property: all;
		transition-duration: 300ms;
		transition-timing-function: cubic-bezier(0.6, -0.4, 0.735, 0.045);

		&:nth-of-type(1) {
			transform-origin: top left;
		}

		&:nth-of-type(3) {
			transform-origin: bottom left;
		}

		${(props) => css`
			${props.open &&
			css`
				&:nth-of-type(2) {
					opacity: 0;
					transform: translateX(100px);
				}

				&:nth-of-type(1) {
					transform: rotate(45deg);
				}

				&:nth-of-type(3) {
					transform: rotate(-45deg);
				}
			`}
		`}
	`,
};

export const Styled = { Nav, NavLinks, Link, Backdrop, Logo, Bars };
