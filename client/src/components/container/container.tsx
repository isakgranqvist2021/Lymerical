import { Styled } from './container.styled';
import { ContainerProps } from './container.types';

export const Container = (props: ContainerProps) => {
	const { children, ...rest } = props;

	return <Styled.Container {...rest}>{children}</Styled.Container>;
};
