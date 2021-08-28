import React, { useState } from 'react';
import Modal from './modal';

import './modal-btn.css';

export default function ModalBtn() {
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		setModalOpen(prev => !prev);
	};

	return (
		<div className="container">
			<button onClick={openModal} className="btn">
				Sign Up
			</button>
			<Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
		</div>
	);
}
