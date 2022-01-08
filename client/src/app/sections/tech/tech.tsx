import { Styled } from './tech.styled';

import { GRID_ITEMS } from './tech.constants';

export const Projects = () => {
	return (
		<Styled.Container
			id='Technology'
			aria-label='Technologies section'
			tabIndex={2}>
			{GRID_ITEMS.map((gridItem) => (
				<Styled.GridItem
					aria-label={gridItem.alt}
					key={gridItem.src}
					{...gridItem}
				/>
			))}
		</Styled.Container>
	);
};
