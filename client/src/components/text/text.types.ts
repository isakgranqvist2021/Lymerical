export type TextVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'subtitle1'
	| 'subtitle2'
	| 'subtitle3'
	| 'body1'
	| 'body2'
	| 'body3';

type TextColor = 'dark' | 'light' | 'gray';

export interface TextProps {
	variant?: TextVariant;
	color?: TextColor;
	text?: string;
	children?: React.ReactNode;
}
