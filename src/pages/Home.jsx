import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {noticiasContext} from '../context/noticias/NoticiasProvider';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Main from '../components/Main';
import Seccion from '../components/Seccion';

import {NOTICIAS_GENERAL, NOTICIAS_SPORTS, NOTICIAS_BUSINESS, NOTICIAS_HEALTH, NOTICIAS_ENTERTAINMENT} from '../type';
import Criptos from '../components/Criptos';

const Home = () => {
	const {dispatch} = useContext(noticiasContext);

	const {country} = useParams();

	useEffect(() => {
		const obtenerNoticias = async () => {
			const general = `${process.env.REACT_APP_NOTICIAS_API}/noticias?country=${country}&category=general`;
			const sports = `${process.env.REACT_APP_NOTICIAS_API}/noticias?country=${country}&category=sports`;
			const business = `${process.env.REACT_APP_NOTICIAS_API}/noticias?country=${country}&category=business`;
			const health = `${process.env.REACT_APP_NOTICIAS_API}/noticias?country=${country}&category=health`;
			const entertainment = `${process.env.REACT_APP_NOTICIAS_API}/noticias?country=${country}&category=entertainment`;
			const consulta = await Promise.all([
				fetch(general),
				fetch(sports),
				fetch(business),
				fetch(health),
				fetch(entertainment),
			]);
			const resultado = await Promise.all(consulta.map((dato) => dato.json()));
			console.log(resultado);

			dispatch({
				type: NOTICIAS_GENERAL,
				payload: resultado[0].noticias,
			});

			dispatch({
				type: NOTICIAS_SPORTS,
				payload: resultado[1].noticias,
			});

			dispatch({
				type: NOTICIAS_BUSINESS,
				payload: resultado[2].noticias,
			});

			dispatch({
				type: NOTICIAS_HEALTH,
				payload: resultado[3].noticias,
			});

			dispatch({
				type: NOTICIAS_ENTERTAINMENT,
				payload: resultado[4].noticias,
			});
		};
		obtenerNoticias();
	}, [country]);

	return (
		<div className='home'>
			<Header />
			<Main />
			<Seccion category='sports' />
			<Banner />
			<Seccion category='business' />
			<Criptos />
		</div>
	);
};

export default Home;
