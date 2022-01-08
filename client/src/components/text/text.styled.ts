import { Bodies, Subtitles, Titles } from './variants';

import { TextVariant } from './text.types';

export const Styled: Record<TextVariant, any> = {
	...Bodies,
	...Subtitles,
	...Titles,
};
