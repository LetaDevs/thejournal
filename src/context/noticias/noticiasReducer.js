import {
	NOTICIAS_GENERAL,
	NOTICIAS_SPORTS,
	NOTICIAS_BUSINESS,
	NOTICIAS_HEALTH,
	NOTICIAS_ENTERTAINMENT,
	NOTICIAS_TECHNOLOGY,
	NOTICIAS_BUSQUEDA,
} from '../../type';

export default (state, action) => {
	switch (action.type) {
		case NOTICIAS_GENERAL:
			return {
				...state,
				general: action.payload,
			};
		case NOTICIAS_SPORTS:
			return {
				...state,
				sports: action.payload,
			};
		case NOTICIAS_BUSINESS:
			return {
				...state,
				business: action.payload,
			};
		case NOTICIAS_HEALTH:
			return {
				...state,
				health: action.payload,
			};
		case NOTICIAS_ENTERTAINMENT:
			return {
				...state,
				entertainment: action.payload,
			};
		case NOTICIAS_TECHNOLOGY:
			return {
				...state,
				technology: action.payload,
			};
		case NOTICIAS_BUSQUEDA:
			const actuales = state.general;
			action.payload.forEach((noticia, index) => {
				actuales[index] = noticia;
			});
			return {
				...state,
				general: actuales,
			};

		default:
			return state;
	}
};
