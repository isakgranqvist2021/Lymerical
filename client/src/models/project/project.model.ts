import { ImageModel } from 'models/image';

interface URL {
	text: string;
	href: string;
}

export interface ProjectModel {
	label: string;
	description: string;
	images: ImageModel[];
	website: URL | null;
	github: URL | null;
}
