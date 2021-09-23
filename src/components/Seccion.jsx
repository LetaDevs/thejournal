import React, {useContext} from 'react';
import {noticiasContext} from '../context/noticias/NoticiasProvider';
import Noticia from './Noticia';

const Seccion = ({category}) => {
	const noticias = useContext(noticiasContext);

	return (
		<section className='section'>
			<div className='section__container'>
				<h3 className='section__title'>{category}</h3>
				<div className='section__one'>
					<Noticia noticia={noticias[category][0]} />
					<Noticia noticia={noticias[category][1]} />
					<Noticia noticia={noticias[category][2]} />
				</div>
				<div className='section__two'>
					<Noticia noticia={noticias[category][3]} img={false} author={false} />
					<Noticia noticia={noticias[category][4]} img={false} author={false} />
					<Noticia noticia={noticias[category][5]} img={false} author={false} />
					<Noticia noticia={noticias[category][6]} img={false} author={false} />
				</div>
			</div>
		</section>
	);
};

Seccion.defaultProps = {
	category: 'Sports',
};

export default Seccion;
