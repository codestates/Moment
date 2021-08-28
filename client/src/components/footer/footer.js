import React from 'react';

import './footer.css';

export default function Footer() {
	return (
		<section className="footer">
			<section className="footer-social-media">
				<a href="https://github.com/codestates/Moment/wiki" target="_blank" rel="noopener noreferrer">
					Moment
				</a>
			</section>
			<section className="footer-info">
				<section className="footer-left">
					<section className="footer-name">
						Back-End <a href="https://github.com/MANGPHA">Mangpha</a>
					</section>
					<section className="footer-name">
						Back-End <a href="https://github.com/LOTUS0204">lotus0204</a>
					</section>
					<section className="footer-name">
						Front-End <a href="https://github.com/HTlee1990">HTlee1990</a>
					</section>
					<section className="footer-name">
						Front-End <a href="https://github.com/XINNNI">xinnni</a>
					</section>
				</section>
				<section className="footer-center">
					<section className="footer-teams">
						<a href="https://github.com/codestates/Moment">Clover</a>
					</section>
					<br />
					<section className="footer-terms">
						terms and conditions
						<br />
						copyright.
					</section>
				</section>
				<section className="footer-right">
					<section className="footer-number">02-1253-8253</section>
					<br />
					<section className="footer-contact">
						<a href="https://github.com/codestates/Moment/wiki">First-project</a>
						<br />
						Contact us
					</section>
				</section>
			</section>
		</section>
	);
}
