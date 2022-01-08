import { AlertModel, Severity } from 'models';

export interface AlertProps {
	alert: AlertModel | null;
	onClose?: () => void;
}

export interface StyledAlertProps {
	severity: Severity;
}
