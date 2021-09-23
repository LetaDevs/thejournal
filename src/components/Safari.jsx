import React from 'react';

const Safari = () => {
	return (
		<div className='safari'>
			<div className='safari__container'>
				<video className='safari__video' autoPlay loop muted>
					<source src='/img/elefante.mp4' type='video/mp4' />
				</video>
				<div className='safari__content'>
					<h3 className='safari__title'>The top African safari tours</h3>
					<p className='safari__text'>Extraordinary Journeys</p>
					<a href='https://www.letadevs.com/' target='_blank' className='safari__btn'>
						reserve your seat
					</a>
				</div>
			</div>
		</div>
	);
};

export default Safari;
