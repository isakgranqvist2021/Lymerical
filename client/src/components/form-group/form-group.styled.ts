import styled, { css } from 'styled-components';

import { FormGroupProps } from './form-group.types';

const FormGroup = styled('section')<FormGroupProps>`
	${(props) =>
		props.mb &&
		css`
			margin-bottom: ${props.mb + 'px'};
		`}
`;

export const Styled = { FormGroup };
