import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import moment from 'moment';

const Noticia = ({noticia, img, author, description, date, border}) => {
	return (
		<>
			{noticia.author === 'test' ? (
				<Stack spacing={1}>
					<Skeleton variant='rectangular' width={'100%'} height={118} />
					<Skeleton variant='text' />
					<Skeleton variant='text' width={'80%'} />
					<Skeleton variant='text' width={'80%'} />
					<Skeleton variant='text' width={'40%'} />
				</Stack>
			) : (
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
			)}
		</>
	);
};

Noticia.defaultProps = {
	noticia: {
		author: 'test',
	},

	img: true,
	author: true,
	description: true,
	date: true,
	border: false,
};

export default Noticia;
