import React, {useContext} from 'react';
import {noticiasContext} from '../context/noticias/NoticiasProvider';
import Noticia from './Noticia';

const Main = () => {
	const {general} = useContext(noticiasContext);

	return (
		<main className='main'>
			<div className='main__container'>
				{general.length > 0 ? (
					<>
						<div className='main__section-one'>
							<Noticia noticia={general[0]} />
							<Noticia noticia={general[1]} />
							<div>
								<Noticia noticia={general[2]} img={false} author={false} border={true} />
								<Noticia noticia={general[3]} img={false} author={false} border={true} />
							</div>
						</div>
						<div className='main__section-two'>
							<Noticia noticia={general[4]} author={false} description={false} date={false} />
							<Noticia noticia={general[5]} author={false} description={false} date={false} />
							<Noticia noticia={general[6]} author={false} description={false} date={false} />
							<Noticia noticia={general[7]} author={false} description={false} date={false} />
							<Noticia noticia={general[8]} author={false} description={false} date={false} />
						</div>
					</>
				) : (
					<h3>No se encontraron noticias</h3>
				)}
			</div>
		</main>
	);
};

export default Main;
