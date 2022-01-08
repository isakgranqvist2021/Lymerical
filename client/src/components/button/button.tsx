import { Styled } from './button.styled';
import { ButtonProps } from './button.types';

export const Button = (props: ButtonProps) => {
	const { children, variant = 'primary', ...rest } = props;

	const Element = Styled[variant];

	return (
		<Element type='button' {...rest}>
			{children}
		</Element>
	);
};
