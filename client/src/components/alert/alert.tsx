import { Styled } from './alert.styled';
import { AlertProps } from './alert.types';

export const Alert = (props: AlertProps) => {
	const { alert, onClose } = props;

	return (
		<>
			{alert && (
				<Styled.Alert severity={alert.severity}>
					<p>{alert.message}</p>
					<span onClick={onClose}>
						<span className='material-icons-outlined'>close</span>
					</span>
				</Styled.Alert>
			)}
		</>
	);
};
