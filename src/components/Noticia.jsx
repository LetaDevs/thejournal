import React from 'react';
import moment from 'moment';

const Noticia = ({noticia, img, author, description, date, border}) => {
	return (
		<article className={`noticia ${border ? 'noticia--border' : ''}`}>
			{img && (
				<a href={noticia.url} target='_blank' className='noticia__link'>
					<img src={noticia.urlToImage} alt='banner noticia' className='noticia__img' />
				</a>
			)}
			{author && <p className='noticia__author'>{noticia.author}</p>}
			<a href={noticia.url} target='_blank' className='noticia__link'>
				<h2 className='noticia__title'>{noticia.title}</h2>
			</a>
			{description && <p className='noticia__description'>{noticia.description}</p>}

			{date && <span className='noticia__date'>{moment(noticia.publishedAt).fromNow()}</span>}
		</article>
	);
};

Noticia.defaultProps = {
	noticia: {
		author: 'Eduardo Torres',
		title: 'El científico iraní y la máquina operada a control remoto que lo mató en menos de un minuto',
		description:
			'El padre del programa nuclear de Irán había eludido los atentados israelíes. Una operación planeada por el Mosad innovó con inteligencia artificial y sin agentes en el lugar del ataque.',
		publishedAt: '2021-09-09 16:01:55',
		country: 'co',
		category: 'general',
		urlToImage:
			'https://static01.nyt.com/images/2021/09/19/world/19iran-assassination-p1-esp-1/19iran-assassination-p1-videoLarge-v2.jpg',
		url: 'https://www.nytimes.com/es/2021/09/22/espanol/mossad-cientifico-irani-Fakhrizadeh.html',
	},

	img: true,
	author: true,
	description: true,
	date: true,
	border: false,
};

export default Noticia;
