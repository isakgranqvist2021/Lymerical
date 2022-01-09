import { useEffect } from 'react';
import AOS from 'aos';

import {
	Alert,
	FormGroup,
	Input,
	Label,
	Textarea,
	Select,
	Text,
	Spinner,
	Icon,
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
				<Styled.ContactDetails>
					<Styled.Group>
						<Icon icon='phone' />
						<Styled.Col>
							<Text text='Telefon:' variant='body2' />
							<Text text='+46763168976' variant='subtitle2' />
						</Styled.Col>
					</Styled.Group>
					<Styled.Group>
						<Icon icon='email' />
						<Styled.Col>
							<Text text='Email:' variant='body2' />
							<Text text='lymerical@gmail.com' variant='subtitle2' />
						</Styled.Col>
					</Styled.Group>
					<Styled.Group>
						<Icon icon='place' />
						<Styled.Col>
							<Text text='Adress:' variant='body2' />
							<Text text='Sweden, Malmö' variant='subtitle2' />
						</Styled.Col>
					</Styled.Group>
				</Styled.ContactDetails>
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
					<FormGroup mb={32}>
						<Label htmlFor='inquiry'>Kontakt Orsak</Label>
						<Select
							id='inquiry'
							disabled={isLoading}
							value={values.inquiry}
							onChange={(e) => setValue('inquiry', e.target.value)}
							hasError={fieldWithError === 'inquiry'}
							options={[
								{ text: 'Sociala Medier', value: 'social_media' },
								{ text: 'Logotyper', value: 'logo' },
								{ text: 'Marknadsföring', value: 'marketing' },
								{ text: 'Övrigt', value: 'other' },
							]}
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
