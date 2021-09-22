import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
	return (
		<header className='header'>
			<nav className='nav'>
				<NavLink to='/eeuu' exact activeClassName='nav__link-active' className='nav__link'>
					EEUU
				</NavLink>
				<NavLink to='/canada' exact activeClassName='nav__link-active' className='nav__link'>
					CANADA
				</NavLink>
				<NavLink to='/colombia' exact activeClassName='nav__link-active' className='nav__link'>
					COLOMBIA
				</NavLink>
				<NavLink to='/mexico' exact activeClassName='nav__link-active' className='nav__link'>
					MÉXICO
				</NavLink>
				<NavLink to='/argentina' exact activeClassName='nav__link-active' className='nav__link'>
					ARGENTINA
				</NavLink>
			</nav>
			<div className='header__logo'>
				<h1 className='header__logo-text'>The Journal</h1>
			</div>
			<div className='header__extras'>
				<p className='header__date'>Martes, 21 de septiembre de 2021</p>
				<div className='header__extras-search'>
					<form>
						<input
							type='text'
							className='header__extras-search-input'
							name='search'
							placeholder='ejem: coronavirus'
							autoComplete='off'
						/>
						<button type='submit' className='header__extras-search-btn'>
							<i className='fas fa-search header__extras-search-icon'></i>
						</button>
					</form>
				</div>
				<div className='header__extras-weather'>Bogotá - Colombia 23°C</div>
			</div>
		</header>
	);
};

export default Header;
