import ReactDOM from 'react-dom';
import React from 'react';
import Sources from './sources';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './home';
import Headlines from './headlines.jsx';

ReactDOM.render((
	<Router>
		<Switch>
		 <Route exact path='/' component={localStorage.username ? Sources : Login}/> 
		 <Route path='/sources/:source/:sortBy' component={Headlines}/>
		 <Route  exact path='/sources' component={Sources}/>
	    </Switch>
	</Router>), 
	document.getElementById('app'));
