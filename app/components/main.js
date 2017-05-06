import ReactDOM from 'react-dom';
import React from 'react';
import Sources from './sources';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home';
import Test from './test.jsx';

ReactDOM.render((
	<Router>
		<Switch>
		 <Route exact path='/' component={Home}/> 
		 <Route path='/sources/:source/:sortBy' component={Test}/>
		 <Route exact path='/sources' component={Sources}/>
	    </Switch>
	</Router>), 
	document.getElementById('app'));
