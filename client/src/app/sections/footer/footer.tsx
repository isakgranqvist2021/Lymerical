import { Styled } from './footer.styled';

export const Footer = () => {
	return (
		<Styled.Footer>
			<Styled.FooterContent>
				<p aria-label='Copyright text'>&copy; Lymerical 2021</p>
				<Styled.Icons>
					<a
						aria-label='Instagram link'
						href='https://instagram.com/lymercial?utm_medium=copy_link'
						title='Instagram'>
						<img src='/static/icons/instagram.svg' alt='Instagram Icon' />
					</a>
					<a
						aria-label='Facebook link'
						href='https://www.facebook.com/Lymercial/'
						title='Facebook'>
						<img src='/static/icons/facebook.svg' alt='Facebook Icon' />
					</a>
				</Styled.Icons>
			</Styled.FooterContent>
		</Styled.Footer>
	);
};
