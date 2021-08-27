import React, { useRef } from 'react';

import './modal.css';

export default function Modal({ modalOpen, setModalOpen }) {
	const modalRef = useRef();
	const closerModal = e => {
		if (modalRef.current === e.target) {
			setModalOpen(false);
		}
	};
	return (
		<>
			{modalOpen ? (
				<div className="background" ref={modalRef} onClick={closerModal}>
					<div className="modalwrapper" onChange={setModalOpen}>
						<img className="modalimage" src={require('../../assets/svg/17.svg').default} alt="" />
						<div className="modalcontent">
							<h1>M.</h1>
							<span>With us?</span>
							<input placeholder="E-mail"></input>
							<input placeholder="Nickname"></input>
							<input placeholder="password"></input>
							<div className="options">
								<button className="join">Join Now</button>
								<button className="join">FaceBook</button>
								<button className="join">Google</button>
							</div>
						</div>
						<div className="modalclosebutton" onClick={() => setModalOpen(prev => !prev)}>
							&#10005;
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}
