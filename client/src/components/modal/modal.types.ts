export interface ModalState {
	open: boolean;
}

export interface ModalProps extends ModalState {
	onClose: () => void;
	title?: JSX.Element | string;
	body?: JSX.Element | string;
	footer?: JSX.Element | string;
}
