import { Icon } from 'components';

import { Styled } from './modal.styled';
import { ModalProps } from './modal.types';

export const Modal = (props: ModalProps) => {
	const { open, title, body, footer, onClose } = props;

	const onPreventClose = (e: React.MouseEvent<HTMLElement>) => {
		e.stopPropagation();
	};

	return (
		<Styled.Modal.Container open={open} onClick={onClose}>
			<Styled.Modal.Body open={open} onClick={onPreventClose}>
				{!!title && (
					<Styled.Modal.Header>
						<h3>{title}</h3>

						<Icon onClick={onClose} icon='close' clickable />
					</Styled.Modal.Header>
				)}
				<Styled.Modal.Content>{body}</Styled.Modal.Content>
				{!!footer && <Styled.Modal.Footer>{footer}</Styled.Modal.Footer>}
			</Styled.Modal.Body>
		</Styled.Modal.Container>
	);
};
