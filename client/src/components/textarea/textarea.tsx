import { Styled } from './textarea.styled';
import { TextareaProps } from './textarea.types';

export const Textarea = (props: TextareaProps) => {
	const { children, ...rest } = props;

	return <Styled.Textarea {...rest}>{children}</Styled.Textarea>;
};
