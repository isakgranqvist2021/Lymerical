import { useEffect, useState } from 'react';

export const useModalState = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const openModal = () => {
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	useEffect(() => {
		const tag = document.querySelector('html');
		if (!tag) return;

		tag.style.overflowY = modalIsOpen ? 'hidden' : 'auto';

		return () => {
			tag.style.overflowY = 'auto';
		};
	}, [modalIsOpen]);

	return { modalIsOpen, openModal, closeModal };
};
