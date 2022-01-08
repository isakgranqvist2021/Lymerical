import styled, { css } from 'styled-components';

import { IconProps } from './icon.types';

const Icon = styled('span')<Omit<IconProps, 'icon'>>`
	font-family: 'Material Icons Outlined';

	${(props) =>
		props.clickable &&
		css`
			cursor: pointer;
		`}
`;

export const Styled = { Icon };
