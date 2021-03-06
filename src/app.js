import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Redirect, Router, Route, Link } from 'react-router'
const DudeList = require('./modules/DudeList/DudeList');
const Dude = require('./modules/Dude/Dude');

class PageNotFound extends React.Component {
	render() {
		return (
			<div>
				<h1>Sorry, we couldn't find that page</h1>
			</div>
		);
	}
}


render(
	(
		<Router history={browserHistory}>
			<Route path="/dudes" component={DudeList} />
			<Route path="/dude/:name" component={Dude} />
			<Redirect from="/" to="/dudes" />
			<Route path="*" component={PageNotFound} />
		</Router>
	),
	document.getElementById('main')
);