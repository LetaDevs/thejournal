import React from 'react';

const Cripto = ({data}) => {
	return (
		<div className='cripto'>
			<img src={`https://www.cryptocompare.com${data?.IMAGEURL}`} alt='crypto' />
			<div className='cripto__datos'>
				<p className='cripto__symbols'>{`${data?.FROMSYMBOL}-${data?.TOSYMBOL}`}</p>
				<p className='cripto__price'>${Number(data?.PRICE).toFixed(2)}</p>
			</div>
		</div>
	);
};

export default Cripto;
