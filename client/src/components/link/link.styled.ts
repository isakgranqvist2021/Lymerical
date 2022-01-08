import styled from 'styled-components';

import { LinkProps } from './link.types';

const Link = styled('a')<LinkProps>`
	color: rgb(207, 48, 48);
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export const Styled = { Link };
