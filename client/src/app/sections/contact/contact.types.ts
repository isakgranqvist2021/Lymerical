import { AlertModel, ContactModel } from 'models';

export interface ContactState {
	values: ContactModel;
	fieldWithError: string | null;
	alert: AlertModel | null;
	isLoading: boolean;
}
