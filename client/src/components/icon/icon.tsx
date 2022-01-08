import { Styled } from './icon.styled';
import { IconProps } from './icon.types';

export const Icon = (props: IconProps) => {
	const { icon, ...rest } = props;

	return <Styled.Icon {...rest}>{icon}</Styled.Icon>;
};
