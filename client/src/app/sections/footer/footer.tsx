import { Styled } from './footer.styled';

export const Footer = () => {
	return (
		<Styled.Footer>
			<Styled.FooterContent>
				<Styled.Icons>
					<a aria-label='Instagram link' href='' title='Instagram'>
						<img src='/static/icons/instagram.svg' alt='Instagram Icon' />
					</a>
					<a aria-label='Linkedin link' href='' title='Linkedin'>
						<img src='/static/icons/linkedin.svg' alt='Linkedin Icon' />
					</a>
					<a aria-label='Facebook link' href='' title='Facebook'>
						<img src='/static/icons/facebook.svg' alt='Facebook Icon' />
					</a>
				</Styled.Icons>

				<p aria-label='Copyright text'>&copy; Lymerical 2021</p>
			</Styled.FooterContent>
		</Styled.Footer>
	);
};
