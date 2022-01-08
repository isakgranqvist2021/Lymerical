import { TextProps } from './text.types';

import { Styled } from './text.styled';

export const Text = (props: TextProps) => {
	const { variant = 'body1', color, text, children } = props;

	const Element = Styled[variant];

	return <Element color={color}>{text || children}</Element>;
};
