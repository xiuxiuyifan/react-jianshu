import ZHeader from './components/ZHeader/ZHeader';
import {BrowserRouter, Route} from 'react-router-dom';

import './app.scss'
import Home from './views/home';
import Detail from './views/detail';

function App() {
	return (
		<div className="App">
			<ZHeader/>
			<BrowserRouter>
				<Route path="/" exact component={Home}/>
				<Route path="/detail" exact component={Detail}/>
			</BrowserRouter>
		</div>
	);
}

export default App;
