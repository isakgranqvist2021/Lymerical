import { Styled } from './select.styled';
import { SelectProps } from './select.types';

export const Select = (props: SelectProps) => {
	const { options, ...rest } = props;

	return (
		<Styled.Select {...rest}>
			{options?.map((option) => (
				<Styled.Option value={option.value}>{option.text}</Styled.Option>
			))}
		</Styled.Select>
	);
};
