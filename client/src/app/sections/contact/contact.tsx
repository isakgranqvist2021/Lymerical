import { useEffect } from 'react';
import AOS from 'aos';

import {
	Alert,
	FormGroup,
	Input,
	Label,
	Textarea,
	Text,
	Spinner,
} from 'components';

import { useContactState } from './contact.helpers';
import { Styled } from './contact.styled';

export const Contact = () => {
	const {
		values,
		alert,
		fieldWithError,
		isLoading,
		submit,
		setValue,
		clearAlert,
	} = useContactState();

	useEffect(() => {
		AOS.init({
			duration: 2000,
		});
	}, []);

	return (
		<Styled.Contact id='Contact' aria-label='Contact section' tabIndex={4}>
			<Styled.ContactContainer>
				<Styled.Social aria-label='Social media icons'>
					<Text
						variant='h3'
						text='Du kan även hitta mig här på sociala medier'
						data-aos='fade-left'
					/>

					<Styled.SocialIcons data-aos='fade-up'>
						<a aria-label='Instagram link' href='' title='Instagram'>
							<img src='/static/icons/instagram.svg' alt='Instagram Icon' />
						</a>
						<a aria-label='Linkedin link' href='' title='Linkedin'>
							<img src='/static/icons/linkedin.svg' alt='Linkedin Icon' />
						</a>
						<a aria-label='Email me link' href='' title='Send mail'>
							<img src='/static/icons/email.svg' alt='Email Icon' />
						</a>
					</Styled.SocialIcons>
				</Styled.Social>
				<Styled.Form data-aos='fade-right' aria-label='Contact form'>
					<FormGroup mb={32}>
						<Label htmlFor='email'>Email</Label>
						<Input
							id='email'
							placeholder='Email'
							autoComplete='email'
							hasError={fieldWithError === 'email'}
							disabled={isLoading}
							value={values.email}
							onChange={(e) => setValue('email', e.target.value)}
						/>
					</FormGroup>
					<FormGroup mb={32}>
						<Label htmlFor='name'>Ditt Namn</Label>
						<Input
							id='name'
							placeholder='Ditt namn'
							hasError={fieldWithError === 'name'}
							value={values.name}
							autoComplete='name'
							disabled={isLoading}
							onChange={(e) => setValue('name', e.target.value)}
						/>
					</FormGroup>
					<FormGroup mb={10}>
						<Label htmlFor='message'>Meddelande</Label>
						<Textarea
							id='message'
							placeholder='Meddelande'
							hasError={fieldWithError === 'message'}
							value={values.message}
							disabled={isLoading}
							onChange={(e) => setValue('message', e.target.value)}></Textarea>
					</FormGroup>

					<Alert alert={alert} onClose={clearAlert} />

					<Styled.SendButton
						outlined
						variant='primary'
						disabled={isLoading}
						onClick={submit}>
						{isLoading ? <Spinner /> : 'Skicka Meddelande'}
					</Styled.SendButton>
				</Styled.Form>
			</Styled.ContactContainer>
		</Styled.Contact>
	);
};
