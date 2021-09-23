import Home from './pages/Home';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import NoticiasProvider from './context/noticias/NoticiasProvider';

import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');

function App() {
	return (
		<Router>
			<NoticiasProvider>
				<div>
					<Switch>
						<Route exact path='/'>
							<Redirect to='/co' />
						</Route>
						<Route path='/:country' component={Home} />
					</Switch>
				</div>
			</NoticiasProvider>
		</Router>
	);
}

export default App;
