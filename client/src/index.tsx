import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';
import { reportWebVitals } from './config';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
