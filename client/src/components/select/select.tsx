import { Styled } from './select.styled';
import { SelectProps } from './select.types';

export const Select = (props: SelectProps) => {
	const { options, ...rest } = props;

	return (
		<Styled.Select {...rest}>
			<Styled.Option value=''>Välj en</Styled.Option>
			{options?.map((option) => (
				<Styled.Option value={option.value}>{option.text}</Styled.Option>
			))}
		</Styled.Select>
	);
};
