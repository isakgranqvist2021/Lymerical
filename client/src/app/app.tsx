import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'aos/dist/aos.css';

import { Modal, useModalState } from 'components';
import { GlobalStyles } from 'theme';

import { Nav } from './nav';
import { PrivacyPolicy } from './privacy-policy';
import { Hero, Features, About, Contact, Projects, Footer } from './sections';

export const App = () => {
	const { modalIsOpen, openModal, closeModal } = useModalState();

	return (
		<>
			<GlobalStyles />
			<Nav />

			<Hero />
			<Features />
			<Projects />
			<About />
			<Contact />

			<Footer onPrivacyClick={openModal} />

			<Modal
				open={modalIsOpen}
				onClose={closeModal}
				title='Privacy Policy'
				body={<PrivacyPolicy />}
			/>
		</>
	);
};
