import {
	NOTICIAS_GENERAL,
	NOTICIAS_SPORTS,
	NOTICIAS_BUSINESS,
	NOTICIAS_HEALTH,
	NOTICIAS_ENTERTAINMENT,
	NOTICIAS_TECHNOLOGY,
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

		default:
			return state;
	}
};
