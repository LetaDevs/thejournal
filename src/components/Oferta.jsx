import React, {useEffect, useState} from 'react';
import 'animate.css';

const Oferta = () => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(true);
			return clearTimeout(timer);
		}, 3000);
	}, []);

	const handleClick = () => {
		setShow(false);
	};

	return (
		<>
			{show ? (
				<div className='oferta animate__animated animate__fadeInUp'>
					<div className='oferta__contenido'>
						<h4>Special Offer</h4>
						<p>
							Subscribe for <span className='oferta__precio'>$2</span> <span className='oferta__promo'>$0.25</span> a
							week.
						</p>
						<a href='https://www.letadevs.com/' className='oferta__btn' target='_blank'>
							view offer
						</a>
					</div>
					<button className='oferta__cerrar' onClick={handleClick}>
						<i className='fas fa-times'></i>
					</button>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default Oferta;
