import { Container, Text } from 'components';

import { SERVICES } from './services.constants';
import { Styled } from './services.styled';

export const Services = () => {
	return (
		<Styled.Services id='Services'>
			<Container>
				<Styled.Grid>
					{SERVICES.map((service, i) => (
						<Styled.GridItem key={i}>
							<Text variant='h3' text={service.title} />
							<Text variant='body2' text={service.body} />
						</Styled.GridItem>
					))}
				</Styled.Grid>
			</Container>
		</Styled.Services>
	);
};
