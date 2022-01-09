import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'aos/dist/aos.css';

import { GlobalStyles } from 'theme';

import { Nav } from './nav';
import {
	Hero,
	About,
	Services,
	Portfolio,
	Testimonials,
	Contact,
	Footer,
} from './sections';

export const App = () => {
	return (
		<>
			<GlobalStyles />

			<Nav />

			<Hero />

			<About />

			<Services />

			<Portfolio />

			<Testimonials />

			<Contact />

			<Footer />
		</>
	);
};
