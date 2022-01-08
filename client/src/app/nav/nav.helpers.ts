import { useState } from 'react';

export const useNavState = () => {
	const [navIsOpen, setNavIsOpen] = useState(false);

	const closeNav = () => setNavIsOpen(false);
	const toggleNav = () => setNavIsOpen(!navIsOpen);

	return { navIsOpen, closeNav, toggleNav };
};
