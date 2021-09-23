import React, {useEffect, useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import moment from 'moment';

const Header = ({setBusqueda}) => {
	const [userData, setUserData] = useState({});
	const [clima, setClima] = useState({});
	const [climaIcon, setClimaIcon] = useState('');

	const [search, setSearch] = useState('');

	useEffect(() => {
		const obtenerDatos = async () => {
			const url = 'https://ipapi.co/json/';
			const resultado = await fetch(url).then((data) => data.json());
			setUserData({
				city: resultado.city,
				countryCode: resultado.country,
				country: resultado.country_name,
			});
		};
		obtenerDatos();
	}, []);

	useEffect(() => {
		if (Object.keys(userData).length === 0) return;

		const obtenerClima = async () => {
			const apiKey = process.env.REACT_APP_WEATHER_KEY;
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${userData.city},${userData.countryCode}&lang=es&units=metric&appid=${apiKey}`;

			const resultado = await fetch(url).then((data) => data.json());
			setClima({
				temp: Math.ceil(resultado.main.temp),
				icon: resultado.weather[0].icon,
			});
		};
		obtenerClima();
	}, [userData]);

	useEffect(() => {
		if (Object.keys(clima).length === 0) return;

		const obtenerIcon = async () => {
			const url = `http://openweathermap.org/img/wn/${clima.icon}@2x.png`;
			const resultado = await fetch(url);
			setClimaIcon(resultado.url);
		};
		obtenerIcon();
	}, [clima]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (search.trim() === '') return;

		setBusqueda(search);
		setSearch('');
	};

	return (
		<header className='header'>
			<nav className='nav'>
				<NavLink to='/us' exact activeClassName='nav__link-active' className='nav__link'>
					EEUU
				</NavLink>
				<NavLink to='/ca' exact activeClassName='nav__link-active' className='nav__link'>
					CANADA
				</NavLink>
				<NavLink to='/co' exact activeClassName='nav__link-active' className='nav__link'>
					COLOMBIA
				</NavLink>
				<NavLink to='/mx' exact activeClassName='nav__link-active' className='nav__link'>
					MÉXICO
				</NavLink>
				<NavLink to='/ar' exact activeClassName='nav__link-active' className='nav__link'>
					ARGENTINA
				</NavLink>
			</nav>
			<div className='header__logo'>
				<Link to='/co' className='header__logo-link'>
					<h1 className='header__logo-text'>The Journal</h1>
				</Link>
			</div>
			<div className='header__extras'>
				<p className='header__extras-date'>{moment().format('dddd, LL')}</p>
				<div className='header__extras-search'>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							className='header__extras-search-input'
							name='search'
							value={search}
							placeholder='ejem: coronavirus'
							autoComplete='off'
							onChange={(e) => setSearch(e.target.value)}
						/>
						<button type='submit' className='header__extras-search-btn'>
							<i className='fas fa-search header__extras-search-icon'></i>
						</button>
					</form>
				</div>
				<div className='header__extras-weather'>
					<img src={climaIcon} alt='clima icon' />
					<p>{`${userData.city} - ${userData.country} ${clima.temp + 1}°C`}</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
