import React, {createContext, useReducer} from 'react';
import noticiasReducer from './noticiasReducer';

export const noticiasContext = createContext();

const initialState = {
	general: [],
	sports: [],
	business: [],
	health: [],
	entertainment: [],
	technology: [],
};

const NoticiasProvider = (props) => {
	const [state, dispatch] = useReducer(noticiasReducer, initialState);

	return (
		<noticiasContext.Provider
			value={{
				general: state.general,
				sports: state.sports,
				business: state.business,
				health: state.health,
				entertainment: state.entertainment,
				technology: state.technology,
				dispatch,
			}}>
			{props.children}
		</noticiasContext.Provider>
	);
};

export default NoticiasProvider;
