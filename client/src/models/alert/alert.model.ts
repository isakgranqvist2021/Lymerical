export type Severity = 'danger' | 'success' | 'info' | 'warn';

export interface AlertModel {
	message: string;
	severity: Severity;
}
