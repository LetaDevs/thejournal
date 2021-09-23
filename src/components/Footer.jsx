import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='header__logo'>
					<Link to='/co' className='header__logo-link'>
						<h1 className='header__logo-text footer__logo'>The Journal</h1>
					</Link>
				</div>
				<div className='footer__links'>
					<div className='footer__news'>
						<h4 className='footer__links-title'>news</h4>
						<p>Home Page</p>
						<p>World</p>
						<p>Coronavirus</p>
						<p>U.S.</p>
						<p>Politics</p>
						<p>Business</p>
						<p>Tech</p>
						<p>Science</p>
						<p>Sports</p>
						<p>Wildlfire Tracker</p>
						<p>Corrections</p>
					</div>
					<div className='footer__opinion'>
						<h4 className='footer__links-title'>opinion</h4>
						<p>Today's Opinion</p>
						<p>Columnists</p>
						<p>Editorials</p>
						<p>Guest Essays</p>
						<p>Letters</p>
						<p>Sunday Review</p>
						<p>Video: Opinion</p>
					</div>
					<div className='footer__arts'>
						<h4 className='footer__links-title'>arts</h4>
						<p>Today's Arts</p>
						<p>Art & Design</p>
						<p>Books</p>
						<p>Best Sellers Book List</p>
						<p>Dance</p>
						<p>Movies</p>
						<p>Music</p>
						<p>Pop Culture</p>
						<p>Television</p>
						<p>Theater</p>
						<p>Video: Arts</p>
					</div>
					<div className='footer__living'>
						<h4 className='footer__links-title'>living</h4>
						<p>Automotive</p>
						<p>Games</p>
						<p>Education</p>
						<p>Food</p>
						<p>Health</p>
						<p>Jobs</p>
						<p>Love</p>
						<p>Magazine</p>
						<p>Parenting</p>
						<p>Real Estate</p>
						<p>Style</p>
						<p>T Magazine</p>
						<p>Travel</p>
					</div>
					<div className='footer__more'>
						<h4 className='footer__links-title'>more</h4>
						<p>Reader Center</p>
						<p>Wirecutter</p>
						<p>Cooking</p>
						<p>Live Events</p>
						<p>The Learning Network</p>
						<p>Tools & Services</p>
						<p>Podcasts</p>
						<p>Multimedia</p>
						<p>Photography</p>
						<p>Video</p>
						<p>TimesMachine</p>
						<p>Manage My Account</p>
						<p>Journal Store</p>
						<p>The Journal Licensing</p>
					</div>
				</div>
			</div>
			<div className='footer__copy'>
				<span>The Journal - copyright {new Date().getFullYear()}&copy;</span>
			</div>
		</footer>
	);
};

export default Footer;
