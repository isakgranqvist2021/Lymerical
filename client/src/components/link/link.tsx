import { Styled } from './link.styled';
import { LinkProps } from './link.types';

export const Link = (props: LinkProps) => {
	const { children, text, ...rest } = props;

	return <Styled.Link {...rest}>{text || children}</Styled.Link>;
};
