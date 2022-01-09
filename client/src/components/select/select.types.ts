interface Option {
	value: any;
	text: string;
}

export interface SelectProps
	extends React.SelectHTMLAttributes<HTMLSelectElement> {
	options?: Option[];
	hasError?: boolean;
}
