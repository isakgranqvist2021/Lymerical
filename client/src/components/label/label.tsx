import { Styled } from './label.styled';
import { LabelProps } from './label.types';

export const Label = (props: LabelProps) => {
	const { children, ...rest } = props;

	return <Styled.Label {...rest}>{children}</Styled.Label>;
};
