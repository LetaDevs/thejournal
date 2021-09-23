import React, {useContext} from 'react';
import {noticiasContext} from '../context/noticias/NoticiasProvider';
import Noticia from './Noticia';

const Tech = () => {
	const {technology} = useContext(noticiasContext);

	return (
		<section className='tech'>
			<div className='tech__container'>
				<h3 className='tech__title'>Technology</h3>
				<div className='tech__noticias'>
					<Noticia noticia={technology[0]} author={false} description={false} date={false} />
					<Noticia noticia={technology[1]} author={false} description={false} date={false} />
					<Noticia noticia={technology[2]} author={false} description={false} date={false} />
					<Noticia noticia={technology[3]} author={false} description={false} date={false} />
					<Noticia noticia={technology[4]} author={false} description={false} date={false} />
				</div>
			</div>
		</section>
	);
};

export default Tech;
