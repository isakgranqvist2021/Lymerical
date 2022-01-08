import { Styled } from './form-group.styled';
import { FormGroupProps } from './form-group.types';

export const FormGroup = (props: FormGroupProps) => {
	const { children, ...rest } = props;

	return <Styled.FormGroup {...rest}>{children}</Styled.FormGroup>;
};
