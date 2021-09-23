import React, {useEffect, useState} from 'react';
import Cripto from './Cripto';

const Criptos = () => {
	const [criptos, setCriptos] = useState({});

	useEffect(() => {
		const obtenerCriptos = async () => {
			const apiKey = process.env.REACT_APP_CRYPTOS_KEY;
			const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,SOL,XRP,ATOM,AVAX,DOT,LUNA&tsyms=USD&api_key=${apiKey}`;

			const consulta = await fetch(url).then((data) => data.json());
			setCriptos({
				ATOM: consulta.RAW.ATOM.USD,
				AVAX: consulta.RAW.AVAX.USD,
				BTC: consulta.RAW.BTC.USD,
				DOT: consulta.RAW.DOT.USD,
				ETH: consulta.RAW.ETH.USD,
				LUNA: consulta.RAW.LUNA.USD,
				SOL: consulta.RAW.SOL.USD,
				XRP: consulta.RAW.XRP.USD,
			});
		};
		obtenerCriptos();
	}, []);

	return (
		<section className='criptos'>
			<div className='criptos__container'>
				<Cripto data={criptos?.BTC} />
				<Cripto data={criptos?.ETH} />
				<Cripto data={criptos?.SOL} />
				<Cripto data={criptos?.ATOM} />
				<Cripto data={criptos?.AVAX} />
				<Cripto data={criptos?.DOT} />
				<Cripto data={criptos?.LUNA} />
				<Cripto data={criptos?.XRP} />
			</div>
		</section>
	);
};

export default Criptos;
