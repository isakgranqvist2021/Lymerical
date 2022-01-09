import styled from 'styled-components';

import { LinkProps } from './link.types';

const Link = styled('a')<LinkProps>`
	color: #ed902d;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export const Styled = { Link };
