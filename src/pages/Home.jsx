import React, {useContext, useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {noticiasContext} from '../context/noticias/NoticiasProvider';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Main from '../components/Main';
import Seccion from '../components/Seccion';

import {
	NOTICIAS_GENERAL,
	NOTICIAS_SPORTS,
	NOTICIAS_BUSINESS,
	NOTICIAS_HEALTH,
	NOTICIAS_ENTERTAINMENT,
	NOTICIAS_TECHNOLOGY,
	NOTICIAS_BUSQUEDA,
} from '../type';
import Criptos from '../components/Criptos';
import Safari from '../components/Safari';
import Tech from '../components/Tech';
import Footer from '../components/Footer';

const Home = () => {
	const {dispatch} = useContext(noticiasContext);

	const [busqueda, setBusqueda] = useState('');

	const {country} = useParams();
	const history = useHistory();

	useEffect(() => {
		if (country !== 'us' && country !== 'ca' && country !== 'co' && country !== 'mx' && country !== 'ar') {
			return history.push('/co');
		}

		const obtenerNoticias = async () => {
			const general = `${process.env.REACT_APP_NOTICIAS_API}/noticias?country=${country}&category=general`;
			const sports = `${process.env.REACT_APP_NOTICIAS_API}/noticias?country=${country}&category=sports`;
			const business = `${process.env.REACT_APP_NOTICIAS_API}/noticias?country=${country}&category=business`;
			const health = `${process.env.REACT_APP_NOTICIAS_API}/noticias?country=${country}&category=health`;
			const entertainment = `${process.env.REACT_APP_NOTICIAS_API}/noticias?country=${country}&category=entertainment`;
			const technology = `${process.env.REACT_APP_NOTICIAS_API}/noticias?country=${country}&category=technology`;
			const consulta = await Promise.all([
				fetch(general),
				fetch(sports),
				fetch(business),
				fetch(health),
				fetch(entertainment),
				fetch(technology),
			]);
			const resultado = await Promise.all(consulta.map((dato) => dato.json()));

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

			dispatch({
				type: NOTICIAS_TECHNOLOGY,
				payload: resultado[5].noticias,
			});
		};
		obtenerNoticias();
	}, [country]);

	useEffect(() => {
		if (busqueda === '') return;

		const buscarNoticias = async () => {
			const url = `${process.env.REACT_APP_NOTICIAS_API}/noticias?country=${country}&q=${busqueda}`;
			const resultado = await fetch(url).then((data) => data.json());
			console.log(resultado);
			dispatch({
				type: NOTICIAS_BUSQUEDA,
				payload: resultado.noticias,
			});
		};
		buscarNoticias();
	}, [busqueda]);

	return (
		<div className='home'>
			<Header setBusqueda={setBusqueda} />
			<Criptos />
			<Main />
			<Seccion category='sports' />
			<Banner />
			<Seccion category='business' />
			<Seccion category='health' />
			<Safari />
			<Seccion category='entertainment' />
			<Tech />
			<Footer />
		</div>
	);
};

export default Home;
